# Jude Blase — Portfolio

Personal portfolio site for Jude Blase: web developer and virtual assistant from the Philippines,
helping business owners grow through smarter **websites, funnels, and automations**.

## Structure

- `index.html` — page content (hero, about, journey, services, testimonials, contact)
- `styles.css` — styles, with automatic light and dark mode
- `testimonials.js` — your client testimonials (the section stays hidden until you add one)

## Adding testimonials

Open `testimonials.js` and add an entry inside the square brackets for each testimonial:

```js
const TESTIMONIALS = [
  {
    quote: "What the client said about working with you.",
    name: "Client Name",
    role: "Founder, Company Name",
  },
];
```

`role` is optional. Separate entries with commas. Save, refresh, and the Testimonials
section plus its menu link appear automatically.

## Run locally

It's a static site with no build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy

Works as-is on GitHub Pages, Netlify, or Vercel. For GitHub Pages, enable Pages in the repo
settings and point it at the root of the default branch.
