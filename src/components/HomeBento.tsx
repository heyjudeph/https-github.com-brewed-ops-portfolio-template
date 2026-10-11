import type React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FolderOpen,
  User,
  Handshake,
  Medal,
  Stack,
  Quotes,
  FunnelSimple,
  FlowArrow,
  AddressBook,
  Globe,
  Robot,
  SealCheck,
  CheckCircle,
} from '@/components/slab'
import { allPages, type Funnel } from '@/data/funnels'
import { CLIENTS as CLIENT_LIST, TESTIMONIALS } from '@/data/testimonials'
import { profile } from '@/data/profile'

/**
 * Home's showcase: one card per rail view, each an index of what that view
 * holds, each built from content the portfolio already ships. Every card is
 * a link. Nothing here invents a fact - the sites, the clients, the quotes
 * and the credentials are the same records the views render in full.
 *
 * Motion is transform-only on a clipped inner track, so a card never adds
 * height and Home stays a single viewport.
 */

const thumbSrc = (f: Funnel) =>
  `/home/${f.dir ?? 'funnels'}-${f.file.replace('.html', '.jpeg')}`

const PROJECT_SHOTS = allPages

const OFFERS = [
  { Icon: AddressBook, title: 'CRM Setup', note: 'Pipelines, tags and stages' },
  { Icon: FunnelSimple, title: 'Funnels & Landing Pages', note: 'Pages that turn clicks into leads' },
  { Icon: FlowArrow, title: 'GHL Automations', note: 'Follow-ups that run themselves' },
  { Icon: Globe, title: 'Websites', note: 'Fast, clean, conversion-minded' },
  { Icon: Robot, title: 'AI Chat Agents', note: 'Answers and bookings, 24/7' },
] as const

/** The written testimonials, each with its client's name and quote. */
const REVIEWS = TESTIMONIALS.map((t) => ({ name: t.name, role: t.role, work: `“${t.quote.split(/(?<=[.!?])\s/)[0]}”` }))

// Photos of you, fanned. Small copies are fine - the fan shows them under 100px.
const PHOTOS = [profile.avatarSrc, profile.hero.portraitSrc, `${profile.avatarSrc}?2`]

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof FolderOpen
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  const half = Math.ceil(CLIENT_LIST.length / 2)
  const clientRows = [CLIENT_LIST.slice(0, half), CLIENT_LIST.slice(half)]

  return (
    <nav className="bento" aria-label="Explore the portfolio">
      {/* Projects: the funnel thumbnails drift upward on a looped track. */}
      <Link to="/projects" className="bento__card bento__card--projects">
        <CardHead Icon={FolderOpen} title="Projects" desc="Websites and funnels built for coaches, agencies and experts." />
        <div className="bento__media bento__reel" aria-hidden="true">
          <div className="bento__reel-track">
            {[...PROJECT_SHOTS, ...PROJECT_SHOTS].map((f, i) => (
              <span key={i} className="bento__shot">
                <img src={thumbSrc(f)} alt="" loading="lazy" decoding="async" />
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* About: a fanned stack of photos. */}
      <Link to="/about" className="bento__card bento__card--about">
        <CardHead Icon={User} title="About" desc="IT graduate, ex-BPO, building systems since 2020." />
        <div className="bento__media bento__fan" aria-hidden="true">
          {PHOTOS.map((src, i) => (
            <span key={src} className="bento__photo" style={{ ['--i' as string]: i }}>
              <img src={src} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </Link>

      {/* Clients: the businesses you work with, two chip rows scrolling
          against each other. */}
      <Link to="/testimonials" className="bento__card bento__card--ai">
        <CardHead Icon={Handshake} title="Clients" desc="Agencies, consultants and founders I build for." />
        <div className="bento__media bento__chips" aria-hidden="true">
          {clientRows.map((row, r) => (
            <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
              <div className="bento__chip-track">
                {[...row, ...row].map((c, i) => (
                  <span key={`${c.name}-${i}`} className="bento__chip">
                    <CheckCircle size={15} weight="duotone" />
                    {c.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Link>

      {/* Credentials: the badge that matters, on its plate. */}
      <Link to="/about" className="bento__card bento__card--creds">
        <CardHead Icon={Medal} title="Credentials" desc="Six Sigma White Belt and a BS in Information Technology." />
        <div className="bento__media bento__badge" aria-hidden="true">
          <span className="bento__badge-ring">
            <img src="/me/six-sigma-white-belt.svg" alt="" width={72} height={72} />
          </span>
          <span className="bento__badge-tag">
            <SealCheck size={14} weight="fill" />
            Six Sigma White Belt
          </span>
        </div>
      </Link>

      {/* Services: the five offers as a compact index. */}
      <Link to="/services" className="bento__card bento__card--services">
        <CardHead Icon={Stack} title="Services" desc="For coaches, agencies and service businesses." />
        <ul className="bento__media bento__offers" role="list">
          {OFFERS.map(({ Icon, title, note }, i) => (
            <li key={title} className="bento__offer" style={{ '--i': i } as React.CSSProperties}>
              <span className="bento__offer-tile">
                <Icon size={15} weight="duotone" aria-hidden="true" />
              </span>
              <span className="bento__offer-text">
                <span className="bento__offer-title">{title}</span>
                <span className="bento__offer-note">{note}</span>
              </span>
              <span className="bento__offer-num" aria-hidden="true">
                0{i + 1}
              </span>
            </li>
          ))}
        </ul>
      </Link>

      {/* Testimonials: client cards drifting up a clipped column. */}
      <Link to="/testimonials" className="bento__card bento__card--quotes">
        <CardHead Icon={Quotes} title="Testimonials" desc="40+ clients served. Here is what a few of them say." />
        <div className="bento__media bento__reviews" aria-hidden="true">
          <div className="bento__reviews-track">
            {[...REVIEWS, ...REVIEWS].map((c, i) => (
              <span key={i} className="bento__review">
                <span className="bento__review-top">
                  <Quotes size={14} weight="fill" />
                  <b>{c.name}</b>
                </span>
                <span className="bento__review-role">{c.role}</span>
                <span className="bento__review-work">{c.work}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </nav>
  )
}
