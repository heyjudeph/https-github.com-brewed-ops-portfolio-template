/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email, booking link and the Home headline.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

import { Briefcase, UsersThree, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  /** Where "Book a call" sends people. */
  bookingUrl: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Jude Blase',
  firstName: 'Jude',
  handle: '@heyjudeblase',
  role: 'Web Developer & GHL Automation Specialist',
  avatarSrc: '/me/avatar.jpg',
  verifiedLabel: 'Six Sigma White Belt certified',
  email: 'jodelsongcuan.work@gmail.com',
  bookingUrl: 'https://calendar.app.google/aLxrwMjKkLDGiTBV7',
  location: 'Philippines · GMT+8',
  // Pick any icon from https://phosphoricons.com and import it above.
  stats: [
    { value: '4+ yrs', label: 'Experience', Icon: Briefcase },
    { value: '40+', label: 'Clients', Icon: UsersThree },
    { value: 'GMT+8', label: 'Timezone', Icon: Clock },
  ],
  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  displayName: { line1: 'Systems that work.', line2: "Even when you don't." },
  hero: {
    body: 'I help business owners grow through smarter websites, funnels, and automations, so you can focus on scaling, not stressing.',
    portraitSrc: '/me/portrait.jpg',
    portraitAlt: 'Portrait of Jude Blase',
  },
  socials: [
    { label: 'Facebook profile', href: 'https://www.facebook.com/heyjudeblase/', iconPath: '/icons/facebook.svg' },
    { label: 'Instagram profile', href: 'https://www.instagram.com/heyjudeblase/', iconPath: '/icons/instagram.svg' },
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/jodelsongcuan/', iconPath: '/icons/linkedin.svg' },
  ],
}
