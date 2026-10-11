export type QA = { q: string; a: string }

/**
 * The questions people ask before they email. One list, used by the FAQ
 * accordion on the Contact view (and the legacy long-scroll FAQ section).
 * Five questions, two or three sentences each: the accordion sits in a
 * fixed panel and more than that pushes the email row off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What do you do?',
    a: 'I build the systems behind your business: CRM setup, funnels and landing pages, GoHighLevel automations, websites and AI chat agents. Most of my clients are coaches, agencies and service businesses who want more booked calls with less manual follow-up.',
  },
  {
    q: 'Do I need to be on GoHighLevel?',
    a: 'No. GoHighLevel is my specialty, but I also work in HubSpot, Salesforce, Zapier, WordPress, Squarespace, Shopify and Kajabi. If you are not sure which tool fits, we figure it out in the audit.',
  },
  {
    q: 'How much do you charge?',
    a: 'It depends on the scope. After a short call I send a clear quote for the build, so you know the cost before any work starts.',
  },
  {
    q: 'Where are you based?',
    a: 'I work remotely from the Philippines (GMT+8) and have been independent since 2020, working with clients across different time zones.',
  },
  {
    q: 'What happens after I book a call?',
    a: 'We talk through your business, your tools and where leads get stuck. Then I come back with a plan using the wagi formula: audit, automate, accelerate.',
  },
]
