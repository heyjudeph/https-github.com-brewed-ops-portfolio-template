import { useCallback, useEffect, useRef, useState, type ComponentType, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, X, CursorClick, CalendarCheck } from '@/components/slab'
import { GlobeIcon } from './ProjectIcons'
import { SitePanel, BarrelPanel } from './ProjectPanels'
import { websiteFunnel, allPages, type Funnel } from '@/data/funnels'
import { profile } from '@/data/profile'

/**
 * Projects, as one viewport in Home's bento language: a glass panel with one
 * card per client website, each scrolling through its page on hover and
 * opening the full page in a near-fullscreen dialog, plus the 3D carousel of
 * every page and a booking card.
 *
 * The dialog is a portal at z 8000, under the funnel preview (9000) so the
 * barrel's own "open this page" dialog can still stack on top of it.
 */
type Project = {
  id: string
  title: string
  desc: string
  Section: ComponentType
  span?: 2
  Preview: ComponentType
}

const thumbSrc = (f: Funnel) => `/${f.dir ?? 'funnels'}/thumbs/${f.file.replace('.html', '.jpeg')}`

/* ---------- Previews ---------- */

/** One browser window; the page scrolls top to bottom while pointed at. */
function sitePreview(site: Funnel) {
  return function SitePreview() {
    return (
      <div className="bento__media bento__page" aria-hidden="true">
        <span className="bento__page-frame" style={{ backgroundImage: `url('${site.shot}')` }} />
      </div>
    )
  }
}

/** The pages fanned like cards. */
function PagesPreview() {
  return (
    <div className="bento__media bento__fan" aria-hidden="true">
      {allPages.slice(0, 3).map((f, i) => (
        <span key={f.file} className="bento__photo bento__photo--page" style={{ ['--i' as string]: i }}>
          <img src={thumbSrc(f)} alt="" loading="lazy" decoding="async" />
        </span>
      ))}
    </div>
  )
}

const SITE_CARDS: Project[] = websiteFunnel.map((site, i) => ({
  id: site.file.replace('.html', ''),
  title: site.label,
  desc: site.desc,
  span: i === 0 ? 2 : undefined,
  Section: function Site() {
    return <SitePanel site={site} />
  },
  Preview: sitePreview(site),
}))

const PROJECTS: Project[] = [
  ...SITE_CARDS,
  {
    id: 'pages',
    title: 'Every page, in 3D',
    desc: 'All the websites and landing pages on one spinning carousel. Click any page to open it.',
    span: 2,
    Section: BarrelPanel,
    Preview: PagesPreview,
  },
]

/* ---------- Dialog ----------
   A backdrop, a close button in the corner, and the work. No panel, no
   header: each Section brings its own window (or, for the barrel, none). */
function ProjectModal({ project, onClose, children }: { project: Project; onClose: () => void; children: ReactNode }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div
      className="pmodal"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <button ref={closeRef} type="button" className="pmodal__close" onClick={onClose} aria-label="Close">
        <X size={18} weight="bold" />
      </button>
      <div className="pmodal__stage">{children}</div>
    </div>,
    document.body,
  )
}

/* ---------- The page ---------- */

export default function ProjectsGrid() {
  const [open, setOpen] = useState<Project | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const show = useCallback((p: Project, el: HTMLElement) => {
    triggerRef.current = el
    setOpen(p)
  }, [])
  const close = useCallback(() => {
    setOpen(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Projects</span>
        <h1 className="pgrid__title" id="projects-title">
          Websites and funnels that do the selling.
        </h1>
        <p className="pgrid__lede">
          Client sites I built for agencies, coaches and experts. Open a card to see the full page.
        </p>
      </header>

      <div className="home__glass pgrid__glass">
        {/* Hung on the sheet's top edge so it reads as a tag on the container,
            not another card. aria-hidden: the lede already says it. */}
        <span className="pgrid__hint" aria-hidden="true">
          <CursorClick size={14} weight="duotone" />
          Click a card to open it
        </span>
        <div className="bento bento--projects">
          {PROJECTS.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`bento__card bento__card--btn${p.span === 2 ? ' bento__card--wide' : ''}`}
              data-id={p.id}
              onClick={(e) => show(p, e.currentTarget)}
              aria-haspopup="dialog"
            >
              <span className="bento__head">
                <span className="bento__icon">
                  <GlobeIcon size={22} />
                </span>
                <span className="bento__title">{p.title}</span>
                <span className="bento__desc">{p.desc}</span>
                <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
              </span>
              <p.Preview />
            </button>
          ))}

          {/* The last cell is the next step, not more work. */}
          <a
            className="bento__card bento__card--wide bento__card--cta"
            href={profile.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bento__head">
              <span className="bento__icon">
                <CalendarCheck size={22} weight="fill" aria-hidden="true" />
              </span>
              <span className="bento__title">Your business could be next.</span>
              <span className="bento__desc">
                Tell me what you sell and where leads get stuck. I will map the site, funnel and follow-up that fixes it.
              </span>
              <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
            </span>
            <span className="bento__cta-btn">
              Book a call
              <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>

      {open && (
        <ProjectModal project={open} onClose={close}>
          <open.Section />
        </ProjectModal>
      )}
    </section>
  )
}
