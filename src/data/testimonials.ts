/**
 * What clients say, and who they are.
 *
 * TESTIMONIALS feed the Testimonials page and the Home cards. VIDEOS are
 * Google Drive files: keep each one shared as "Anyone with the link" or the
 * player shows a sign-in prompt instead of the video. CLIENTS is the client
 * list with what you did for each.
 */

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "You're a freaking rockstar! I truly appreciate you, Jude. I don't know what I would have done this week without you coming to the rescue. You've been an amazing addition to the team!",
    name: 'Alexandra S.',
    role: 'CEO, Luxulexa Consulting',
  },
  {
    quote:
      'Did you just create these logos? You absolutely crushed it! I’m blown away - so professional, so clean. Thank you! 🙌',
    name: 'Austin L.',
    role: 'CEO, The Company Consulting',
  },
  {
    quote: 'My boy, this looks really, really good. I feel lucky to have you on the squad, bro. 🙌',
    name: 'Raza R.',
    role: 'Founder, TAPSVN',
  },
  {
    quote: "You're a legend! Feeling super good about our work together!",
    name: 'Devin M.',
    role: 'CEO, Tweets For Experts',
  },
]

export type VideoTestimonial = {
  /** The id in the Drive share link: drive.google.com/file/d/<id>/view */
  driveId: string
  title: string
}

export const VIDEOS: VideoTestimonial[] = [
  { driveId: '1N9OGHmcDL3BkW5dBFruldrvh3Ly2PW6J', title: 'Client video testimonial 1' },
  { driveId: '1e2Y1mniUPMtTCn3i6hvuoQV5wX-m8JtN', title: 'Client video testimonial 2' },
]

/** Drive's embeddable player for a shared file. */
export const driveEmbed = (id: string) => `https://drive.google.com/file/d/${id}/preview`

export type Client = {
  name: string
  /** What you did for them. */
  work: string
}

export const CLIENTS: Client[] = [
  { name: 'Luxulexa Consulting', work: 'General virtual assistance' },
  { name: '3 Second Media', work: 'GHL specialist' },
  { name: 'Market Pull', work: 'Website' },
  { name: 'The Paul Jamison', work: 'Website and video edits' },
  { name: 'TAPSVN', work: 'Executive assistance' },
  { name: 'Home Clinix', work: 'Website' },
  { name: 'VitaCane Juicery', work: 'Website' },
  { name: 'HospoHR', work: 'Website' },
  { name: 'Owen Fitzpatrick', work: 'Website' },
]
