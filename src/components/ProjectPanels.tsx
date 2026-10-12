import { lazy, Suspense } from 'react'
import { ArrowUpRight } from '@/components/slab'
import { useFunnelModal } from './FunnelModal'
import { allPages, type Funnel } from '@/data/funnels'

const FunnelBarrel = lazy(() => import('./FunnelBarrel'))

/**
 * What the Projects dialogs show. Each panel is the work itself, on screen
 * the moment the dialog opens - no section chrome to read past and no second
 * dialog to click into.
 */

/** One client site: a mac window holding its full-page screenshot, with the
 *  live address in the bar and a button out to it. */
export function SitePanel({ site }: { site: Funnel }) {
  const host = site.url?.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
  return (
    <div className="ppanel ppanel--window">
      <div className="ppanel__bar">
        <span className="ppanel__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="ppanel__url">
          <span className="ppanel__url-host">{host ?? site.label}</span>
        </span>
        {site.url && (
          <a className="funnels__modal-visit" href={site.url} target="_blank" rel="noopener noreferrer">
            Visit site
            <ArrowUpRight weight="bold" size={14} aria-hidden="true" />
          </a>
        )}
      </div>
      <div className="ppanel__scroll ppanel__scroll--shot">
        {site.shot && <img src={site.shot} alt={`${site.label} website, full page`} decoding="async" />}
      </div>
    </div>
  )
}

/** Only the barrel, spinning on the backdrop. Its own page preview still
 *  stacks above (z 9000). */
export function BarrelPanel() {
  const { openFull, modal } = useFunnelModal()
  return (
    <div className="ppanel ppanel--barrel">
      <Suspense fallback={<div className="funnels__barrel-skeleton" aria-hidden="true" />}>
        <FunnelBarrel funnels={allPages} onOpen={openFull} />
      </Suspense>
      {modal}
    </div>
  )
}
