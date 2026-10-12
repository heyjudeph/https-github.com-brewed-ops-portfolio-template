import { Link } from 'react-router-dom'
import { SealCheck, CaretRight, Quotes, Stack, CalendarCheck } from '@/components/slab'
import { profile } from '@/data/profile'
import { TESTIMONIALS } from '@/data/testimonials'
import QuickMenu from './QuickMenu'

/**
 * Home on a phone, the parts the rail and the bento used to carry:
 *
 *   HomeProfile  avatar, name, verified mark, handle and the QuickMenu
 *                (theme + accessibility) - the rail's identity block, laid flat
 *   HomeStats    three proof facts (profile.stats), each named by a glyph so
 *                it reads at a glance
 *   HomeExplore  one shelf card per rail view in a snap row, then the first
 *                written testimonial
 */

export function HomeProfile() {
  return (
    <header className="hprofile">
      <img className="hprofile__avatar" src={profile.avatarSrc} alt="" width={56} height={56} />
      <div className="hprofile__who">
        <span className="hprofile__name">
          {profile.name}
          <SealCheck size={16} weight="fill" className="hprofile__verified" aria-label={profile.verifiedLabel} />
        </span>
        <span className="hprofile__handle">
          {profile.handle} · {profile.role}
        </span>
      </div>
      <QuickMenu className="hprofile__menu" />
    </header>
  )
}

export function HomeStats() {
  return (
    <ul className="hstats" role="list">
      {profile.stats.map(({ value, label, Icon }, i) => (
        <li key={i}>
          <Icon className="hstats__icon" size={18} weight="duotone" aria-hidden="true" />
          <b className="hstats__value">{value}</b>
          <span className="hstats__label">{label}</span>
        </li>
      ))}
    </ul>
  )
}

const TILES = [
  { n: '01', label: 'Projects', to: '/projects', title: 'Websites and funnels that do the selling', desc: 'Client sites for agencies, coaches and experts.', img: '/home/samples-3-second-media.jpeg' },
  { n: '02', label: 'Services', to: '/services', title: 'CRM, funnels, automations, websites, AI agents', desc: 'Audit. Automate. Accelerate.', Icon: Stack },
  { n: '03', label: 'Book a call', to: '/contact', title: 'Your business could be next', desc: 'Pick a time that works for you.', Icon: CalendarCheck, accent: true },
  { n: '04', label: 'Testimonials', to: '/testimonials', title: 'What 40+ clients say', desc: 'Founders and CEOs I build for.', Icon: Quotes },
  { n: '05', label: 'About', to: '/about', title: `Hi, I'm ${profile.firstName}.`, desc: 'IT graduate, ex-BPO, building systems since 2020.', img: profile.avatarSrc },
] as const

const FEATURED = TESTIMONIALS[0]

export function HomeExplore() {
  return (
    <>
      <div className="hsec">
        <h2 className="hsec__title">Explore</h2>
      </div>
      <ul className="htiles" role="list">
        {TILES.map((t) => (
          <li key={t.to}>
            <Link to={t.to} className={`htile${'accent' in t && t.accent ? ' htile--accent' : ''}`}>
              {'img' in t ? (
                <span className="htile__media"><img className="htile__img" src={t.img} alt="" loading="lazy" /></span>
              ) : (
                <span className="htile__media htile__glyph"><t.Icon size={52} weight="duotone" aria-hidden="true" /></span>
              )}
              <span className="htile__body">
                <span className="htile__n">{t.n} {t.label}</span>
                <span className="htile__title">{t.title}</span>
                <span className="htile__desc">{t.desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* A header that links carries its chevron on the title itself. */}
      <div className="hsec">
        <h2 className="hsec__title">
          <Link to="/testimonials" className="hsec__link">
            What clients say
            <CaretRight size={16} weight="bold" aria-hidden="true" />
          </Link>
        </h2>
      </div>
      <Link to="/testimonials" className="hproof hproof--quote" aria-label={`Testimonial from ${FEATURED.name}, ${FEATURED.role}`}>
        <span className="hproof__copy">
          <Quotes size={22} weight="fill" className="hproof__mark" aria-hidden="true" />
          <span className="hproof__title">{FEATURED.quote}</span>
          <span className="hproof__meta">
            {FEATURED.name} · {FEATURED.role}
          </span>
        </span>
      </Link>
    </>
  )
}
