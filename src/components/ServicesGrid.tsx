import type { CSSProperties } from 'react'
import { MagnifyingGlass, FlowArrow, RocketLaunch, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'
import Autopilot, { TOOLS } from '@/components/Autopilot'

/**
 * ServicesGrid - the Services view on one glass sheet.
 *
 * Three bands, top to bottom: the wagi formula (on a dark plate so it is the
 * first thing the eye lands on), the five services as cards that carry the
 * marks of what each one is built with, and the live automation demo scaled
 * into whatever height is left. Same object language as Home and Projects:
 * the glass, the bento card, plated marks, the accent for the index.
 */

/* ---------- The method ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Audit',
    body: 'I map your funnel, CRM and follow-up to find where leads leak and time gets wasted.',
    Icon: MagnifyingGlass,
    chips: ['Funnel review', 'CRM check', 'Lead leaks', 'Tool stack'],
  },
  {
    index: '02',
    label: 'Automate',
    body: 'I build the pipelines, workflows and pages that capture, nurture and book for you.',
    Icon: FlowArrow,
    chips: ['Workflows', 'Pipelines', 'Email & SMS'],
  },
  {
    index: '03',
    label: 'Accelerate',
    body: 'You get more booked calls and less admin, with a system that scales as you grow.',
    Icon: RocketLaunch,
    chips: ['Booked calls', 'Less admin', 'Room to scale'],
  },
]

/* ---------- The services ---------- */

// Tool marks from /public/icons: what each service is built with.
const GHL = '/icons/gohighlevel.png'
const HUBSPOT = '/icons/tools/hubspot-color.svg'
const SALESFORCE = '/icons/tools/salesforce.svg'
const KAJABI = '/icons/tools/kajabi.svg'
const CANVA = '/icons/tools/canva.svg'
const ZAPIER = '/icons/tools/zapier-color.svg'
const CALENDLY = '/icons/tools/calendly-color.svg'
const WORDPRESS = '/icons/tools/wordpress-color.svg'
const SQUARESPACE = '/icons/tools/squarespace-color.svg'
const SHOPIFY = '/icons/tools/shopify-color.svg'
const OPENAI = '/icons/openai.svg'
const CLAUDE = '/icons/ai/claude-color.svg'

type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'CRM Setup',
    description: 'A CRM that knows where every lead is and what happens next.',
    chip: 'Foundation',
    logos: [GHL, HUBSPOT, SALESFORCE],
    bullets: ['Pipelines and stages', 'Tags, fields and lead sources', 'Clean data you can trust'],
  },
  {
    index: '02',
    title: 'Funnels & Landing Pages',
    description: 'Opt-ins, webinar pages and sales flows that turn clicks into leads.',
    chip: 'Lead gen',
    logos: [GHL, KAJABI, CANVA],
    bullets: ['Opt-in and webinar pages', 'Booking and thank-you flows', 'Built to convert on mobile'],
  },
  {
    index: '03',
    title: 'GHL Automations',
    description: 'Follow-ups, reminders and handoffs that run without you.',
    chip: 'Follow-up',
    logos: [GHL, ZAPIER, CALENDLY],
    bullets: ['Email and SMS nurture', 'Booking confirmations and reminders', 'Tool-to-tool integrations'],
  },
  {
    index: '04',
    title: 'Websites',
    description: 'Fast, clean, conversion-minded websites that represent your brand.',
    chip: 'Presence',
    logos: [WORDPRESS, SQUARESPACE, SHOPIFY],
    bullets: ['Design and build', 'Mobile-first and fast', 'Easy for you to update'],
  },
  {
    index: '05',
    title: 'AI Chat Agents',
    description: 'Chat agents that answer questions and book calls around the clock.',
    chip: '24/7',
    logos: [GHL, OPENAI, CLAUDE],
    bullets: ['Trained on your offers and FAQs', 'Qualifies and books leads', 'Hands off to you when needed'],
  },
]

/** The tool marks, stacked horizontally on white tiles (same as Projects). */
function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- The page ---------- */

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          Systems that capture, nurture and close.
        </h1>
        <p className="pgrid__lede">
          Five ways I help coaches, agencies and service businesses grow without adding more hours.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* One dark plate, the headline on the left, the three stages wired
            in order on the right with a signal running them. */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow sgrid__method-eyebrow--name">the wagi formula</span>
            <h2 className="sgrid__method-title" id="method-title">
              Audit. Automate. Accelerate.
              <br />
              <span>Three steps to a business that runs itself.</span>
            </h2>
            <p className="sgrid__method-sub">
              Fix the leaks first, automate what works, then scale it. No guesswork, no wasted builds.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Five cards, each carrying the marks of what it is built with. */}
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">What I build.</h2>
            <p className="sgrid__offers-sub">Not sure where to start? The audit tells you.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* The live workflow. Its caption and the tool chips sit in a header
            above the window, so the canvas gets the whole glass width. */}
        <div className="sgrid__flow">
          <header className="sgrid__flow-head">
            <div className="sgrid__flow-copy">
              <span className="sgrid__flow-eyebrow">Live automation</span>
              <h2 className="sgrid__flow-title">From opt-in to booked call.</h2>
              <p className="sgrid__flow-sub">
                A new lead opts in for a coaching client, gets tagged and added to the CRM pipeline, then a nurture sequence of emails and texts pushes them to book a strategy call. Once they book, they get a confirmation and automatic reminders before the call.
              </p>
            </div>
            <ul className="sgrid__flow-tools" role="list" aria-label="Tools that power this flow">
              {TOOLS.map(({ Icon: ToolIcon, label }) => (
                <li key={label} className="sgrid__flow-tool">
                  <ToolIcon size={14} weight="duotone" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </header>
          <div className="sgrid__flow-main">
            <Autopilot compact maxScale={1.08} />
          </div>
        </div>
      </div>
    </section>
  )
}
