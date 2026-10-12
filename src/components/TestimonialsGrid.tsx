import { useState } from 'react'
import { Play, Quotes } from '@/components/slab'
import { TESTIMONIALS, VIDEOS, CLIENTS, driveEmbed } from '@/data/testimonials'

/**
 * TestimonialsGrid - the Testimonials view as a fixed viewport.
 *
 * Two columns inside one glass sheet: the video proof on the left, the
 * written testimonials on the right. The page is sized to the panel and does
 * not scroll, so both clips share ONE stage and a picker switches between
 * them rather than stacking two players down a column that would never fit.
 *
 * The clips are Google Drive files played through Drive's own embed, so the
 * stage is ONE fixed plate each player sits inside. Content lives in
 * src/data/testimonials.ts.
 */

/** What you did for a client, looked up from the client list by company. */
const workFor = (role: string) => {
  const company = role.split(',').slice(1).join(',').trim().toLowerCase()
  return CLIENTS.find((c) => c.name.toLowerCase() === company)?.work
}

export default function TestimonialsGrid() {
  const [active, setActive] = useState(0)
  const clip = VIDEOS[active]

  return (
    <section className="pgrid tgrid" aria-labelledby="testimonials-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Testimonials</span>
        <h1 className="pgrid__title" id="testimonials-title">
          Don&rsquo;t take my word for it.
        </h1>
        <p className="pgrid__lede">
          40+ clients served, from agencies to founders. Here is what a few of them say.
        </p>
      </header>

      <div className="home__glass tgrid__glass">
        {/* Left: one stage, two clips. */}
        <div className="tgrid__reel">
          <div className="tgrid__stage">
            {/* Re-keyed so switching clips mounts a fresh player. */}
            <iframe
              key={clip.driveId}
              className="tgrid__video"
              src={driveEmbed(clip.driveId)}
              title={clip.title}
              allow="autoplay; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* The picker is one segmented control, not loose chips: cells on a
              shared plate, the active one lit. */}
          <div className="tgrid__picker" role="group" aria-label="Choose a video testimonial">
            {VIDEOS.map((c, i) => (
              <button
                key={c.driveId}
                type="button"
                className={`tgrid__pick${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
                aria-pressed={i === active}
              >
                <span className="tgrid__pick-thumb tgrid__pick-thumb--icon" aria-hidden="true">
                  <Play size={16} weight="fill" />
                </span>
                <span className="tgrid__pick-copy">
                  <span className="tgrid__pick-kicker">Video {String(i + 1).padStart(2, '0')}</span>
                  <span className="tgrid__pick-meta">Client testimonial</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: the written testimonials, one row per client. */}
        <div className="tgrid__ledger">
          <div className="tgrid__ledger-head">
            <h2 className="tgrid__ledger-title">In their words.</h2>
            <ul className="tgrid__brands" role="list" aria-label="Clients">
              {CLIENTS.map((c) => (
                <li key={c.name} className="tgrid__client-tag" title={c.work}>
                  {c.name}
                </li>
              ))}
            </ul>
          </div>

          {/* One plate, rows split by hairlines. Boxed cards each carrying
              their own border read as separate widgets; a single ledger reads
              as one record. */}
          <ul className="tgrid__clients" role="list">
            {TESTIMONIALS.map((t, i) => {
              const work = workFor(t.role)
              return (
                <li key={t.name} className="tgrid__client">
                  <span className="tgrid__client-ghost" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="tgrid__client-mark" aria-hidden="true">
                    <Quotes size={22} weight="fill" />
                  </span>

                  <span className="tgrid__client-body">
                    <span className="tgrid__client-head">
                      <span className="tgrid__client-name">{t.name}</span>
                      <span className="tgrid__client-role">{t.role}</span>
                    </span>
                    <span className="tgrid__client-daily">&ldquo;{t.quote}&rdquo;</span>
                    {work && (
                      <ul className="tgrid__client-tags" role="list">
                        <li className="tgrid__client-tag">{work}</li>
                      </ul>
                    )}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
