export type FunnelTag = 'Lead Capture' | 'Booking' | 'Checkout' | 'Website'

export type Funnel = {
  file: string
  label: string
  tag: FunnelTag
  desc: string
  /** Public subfolder the HTML + thumbnail live under. Default 'funnels'. */
  dir?: 'funnels' | 'samples'
  /** Live address of a client page. Shown in the preview bar and linked. */
  url?: string
  /** Full-page screenshot in public/. When set, the preview shows it instead of iframing `file`. */
  shot?: string
}

/**
 * Your funnel pages and websites.
 *
 * Client work is shown from a full-page screenshot (`shot`) with a link to the
 * live page, because most live sites refuse to load inside another site's frame.
 * Each entry needs:
 *   - public/samples/thumbs/<file>.jpeg (3:4, the 3D carousel card)
 *   - public/home/samples-<file>.jpeg   (16:9, the Home reel)
 *   - public/work/<file>.jpg            (the full-page screenshot)
 * where <file> is `file` without its .html extension.
 */

const site = (slug: string, label: string, url: string, desc: string): Funnel => ({
  file: `${slug}.html`,
  label,
  tag: 'Website',
  desc,
  dir: 'samples',
  url,
  shot: `/work/${slug}.jpg`,
})

export const websiteFunnel: Funnel[] = [
  site(
    '3-second-media',
    '3 Second Media',
    'https://3secondmedia.com/',
    'A digital marketing and social media agency for coaches. Built to turn attention into booked calls.',
  ),
  site(
    'paul-jamison',
    'Paul Jamison',
    'https://www.thepauljamison.com/',
    'Personal website for an author and industry expert who helps entrepreneurs excel in the landscaping and lawn care business.',
  ),
  site(
    'market-pull',
    'Market Pull',
    'https://www.marketpull.com/',
    'Sales coaching for startups: scale in a predictable way, learn how to sell, avoid costly strategy mistakes and bad hires, and coach your first sales team.',
  ),
]

/**
 * Landing pages. Add an entry per page once its screenshots are in place:
 *   https://uplevelcommunication.com/webinar
 *   https://3secondmedia.com/dwy-marketing-partnership-page
 */
export const landingPages: Funnel[] = []

/** Everything the 3D carousel spins. */
export const allPages: Funnel[] = [...websiteFunnel, ...landingPages]

/**
 * Tag -> color map. Brand-external colors that identify the page type, passed
 * to CSS via an inline --tag-color custom property.
 */
export const tagColors: Record<FunnelTag, string> = {
  'Lead Capture': '#8b5cf6',
  Booking: '#ec4899',
  Checkout: '#f59e0b',
  Website: '#C7F36B',
}
