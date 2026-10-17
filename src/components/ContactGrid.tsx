import { useState } from 'react'
import { EnvelopeSimple, ArrowUpRight, CaretDown, CalendarCheck } from '@/components/slab'
import { FAQS } from '@/data/faqs'
import { profile } from '@/data/profile'

/**
 * ContactGrid - the Contact view as a fixed viewport.
 *
 * One glass sheet, two columns: the questions people ask before they book on
 * the left, on a dark plate (one open at a time, the list scrolls), and the
 * booking card on the right. Sized to the panel, so nothing here scrolls.
 *
 * The calendar is a Google appointment page opened in a new tab rather than
 * framed in: a page that refuses to be framed leaves an empty box behind.
 */

/** What a visitor gets from the call, in order. */
const CALL_STEPS = [
  'Tell me about your business, your tools and your offer.',
  'We find where leads leak and where time gets wasted.',
  'You leave with a plan built on the wagi formula: audit, automate, accelerate.',
]

export default function ContactGrid() {
  // One question open at a time so the plate never grows past the calendar.
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <section className="pgrid cgrid" aria-labelledby="contact-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">FAQs / Contact</span>
        <h1 className="pgrid__title" id="contact-title">
          Ready to stop stressing and start scaling?
        </h1>
        <p className="pgrid__lede">
          Book a call and tell me about your business. We will find where leads get stuck and what to build first.
        </p>
      </header>

      <div className="home__glass cgrid__glass">
        {/* Left: the dark plate. What happens after you press send. */}
        <aside className="cgrid__aside" aria-labelledby="contact-faq">
          <div className="cgrid__aside-head">
            <span className="cgrid__eyebrow">FAQs</span>
            <h2 className="cgrid__aside-title" id="contact-faq">
              Quick answers.
              <br />
              <span>Still have one? Book a call.</span>
            </h2>
          </div>

          <ul className="cgrid__faqs" role="list">
            {FAQS.map((f, i) => {
              const isOpen = openFaq === i
              return (
                <li key={f.q} className={`cgrid__faq${isOpen ? ' is-open' : ''}`}>
                  <button
                    type="button"
                    className="cgrid__faq-q"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`cfaq-${i}`}
                  >
                    <span className="cgrid__step-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    <span className="cgrid__faq-text">{f.q}</span>
                    <CaretDown size={14} weight="bold" className="cgrid__faq-caret" aria-hidden="true" />
                  </button>
                  <div className="cgrid__faq-a" id={`cfaq-${i}`} hidden={!isOpen}>
                    <p>{f.a}</p>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="cgrid__direct">
            <a className="cgrid__mail" href={`mailto:${profile.email}`}>
              <EnvelopeSimple size={16} weight="fill" aria-hidden="true" />
              <span>{profile.email}</span>
            </a>
            <ul className="cgrid__socials" role="list">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a className="cgrid__social" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <img src={s.iconPath} alt="" loading="lazy" decoding="async" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Right: the booking card. */}
        <div className="cgrid__panel cgrid__panel--booking">
          <div className="cgrid__book">
            <span className="cgrid__book-mark" aria-hidden="true">
              <CalendarCheck size={26} weight="fill" />
            </span>
            <span className="cgrid__book-eyebrow">Book a call</span>
            <h2 className="cgrid__book-title">Pick a time that works for you.</h2>
            <ol className="cgrid__book-steps" role="list">
              {CALL_STEPS.map((step, i) => (
                <li key={step} className="cgrid__book-step">
                  <span className="cgrid__book-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <a className="cgrid__book-btn" href={profile.bookingUrl} target="_blank" rel="noopener noreferrer">
              Open my calendar
              <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
            </a>
            <span className="cgrid__book-note">Opens Google Calendar in a new tab.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
