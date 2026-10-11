import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin, CalendarCheck } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who you are on the left, the illustration
 * on the right. Sized to the panel, so nothing here scrolls.
 *
 * The left column is a ladder, not a paragraph block: one display statement,
 * one line of context, then the four things you do - each carrying the marks
 * of the tools it is built with. The tools are the proof, so they are the
 * visual (any square SVG/PNG in public/).
 */

const GHL = { src: '/icons/gohighlevel.png', name: 'GoHighLevel' }
const ZAPIER = { src: '/icons/tools/zapier-color.svg', name: 'Zapier' }
const HUBSPOT = { src: '/icons/tools/hubspot-color.svg', name: 'HubSpot' }
const SALESFORCE = { src: '/icons/tools/salesforce.svg', name: 'Salesforce' }
const WORDPRESS = { src: '/icons/tools/wordpress-color.svg', name: 'WordPress' }
const SQUARESPACE = { src: '/icons/tools/squarespace-color.svg', name: 'Squarespace' }
const SHOPIFY = { src: '/icons/tools/shopify-color.svg', name: 'Shopify' }
const KAJABI = { src: '/icons/tools/kajabi.svg', name: 'Kajabi' }
const CHATGPT = { src: '/icons/openai.svg', name: 'ChatGPT' }
const CLAUDE = { src: '/icons/ai/claude-color.svg', name: 'Claude' }
const GWS = { src: '/icons/googleworkspace.svg', name: 'Google Workspace' }
const CLICKUP = { src: '/icons/tools/clickup-color.svg', name: 'ClickUp' }
const SLACK = { src: '/icons/ai/slack-color.svg', name: 'Slack' }
const CALENDLY = { src: '/icons/tools/calendly-color.svg', name: 'Calendly' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'CRM setup and GHL automations',
    marks: [GHL, ZAPIER, HUBSPOT, SALESFORCE],
  },
  {
    index: '02',
    title: 'Websites, funnels and landing pages',
    marks: [WORDPRESS, SQUARESPACE, SHOPIFY, KAJABI],
  },
  {
    index: '03',
    title: 'AI chat agents',
    marks: [CHATGPT, CLAUDE],
  },
  {
    index: '04',
    title: 'Operations and admin support',
    marks: [GWS, CLICKUP, SLACK, CALENDLY],
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          Web developer and GHL automation specialist, helping business owners scale, not stress.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            A builder at heart, a digital nomad by choice.
            <span> I build the systems that do the heavy lifting.</span>
          </p>

          <p className="agrid__note">
            <strong>From the Philippines, with a degree in Information Technology.</strong> I started
            in the BPO industry in 2017, went independent in 2020, and for over four years I have
            helped business owners grow through smarter websites, funnels, and automations.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* One plate, two cells sharing a mark / title / meta anatomy. */}
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--img">
                <img src="/me/six-sigma-white-belt.jpg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Six Sigma White Belt</span>
                <span className="agrid__cell-meta">Process improvement</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">Remote, independent since 2020</span>
              </span>
            </span>

            <a className="agrid__cell agrid__cell--wide" href={profile.bookingUrl} target="_blank" rel="noopener noreferrer">
              <span className="agrid__cell-mark">
                <CalendarCheck size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Book a call</span>
                <span className="agrid__cell-meta">Pick a time on my calendar</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src={profile.hero.portraitSrc}
            alt={profile.hero.portraitAlt}
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
