# Jude Blase - Portfolio

Portfolio site for Jude Blase, web developer and GHL automation specialist from the Philippines, helping business owners grow through smarter **websites, funnels, and automations**.

Built on the [BrewedOps portfolio template](https://github.com/brewed-ops/portfolio-template): a fixed profile rail, an animated contour background, a bento home screen, a 3D page carousel, and a separate app-style layout for phones. Branded in obsidian `#151515`, warm white `#F5F3ED` and electric lime `#C7F36B`.

Stack: Vite 6, React 19, TypeScript, plain CSS custom properties, Three.js, GSAP, Lenis, React Router 7, Phosphor icons, Poppins.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build to dist/
npm run lint       # ESLint with the TypeScript parser and the React hooks rules
```

## Where the content lives

| What | Where |
|---|---|
| Name, handle, photo, email, booking link, socials, Home headline, phone stats | `src/data/profile.ts` |
| Websites and landing pages (Projects page and the 3D carousel) | `src/data/funnels.ts`, images in `public/work/`, `public/samples/thumbs/`, `public/home/` |
| Written testimonials, video testimonials (Google Drive) and the client list | `src/data/testimonials.ts` |
| FAQs | `src/data/faqs.ts` |
| Services, the wagi formula, the automation demo copy | `src/components/ServicesGrid.tsx`, `src/components/Autopilot.tsx` |
| About page copy and tool marks | `src/components/AboutGrid.tsx` |
| Tools strip | `src/components/ToolsMarquee.tsx` (logos in `public/icons/` and `public/icons/tools/`) |
| Photos and the credential seal | `public/me/` |
| SEO and share tags | `index.html` |
| Colors | `src/styles/tokens.css` (the token names are the template's: `--navy` is the ink, `--orange` is the lime accent) |
| Privacy / Terms | `src/components/Privacy.tsx`, `src/components/ToS.tsx` (still template placeholders) |

### Adding a website or landing page

1. Take a full-page screenshot of the page.
2. Save three images, named after a short slug (for example `my-client`):
   - `public/work/my-client.jpg`: the full-page screenshot
   - `public/samples/thumbs/my-client.jpeg`: the top of the page cropped to 3:4
   - `public/home/samples-my-client.jpeg`: the top of the page cropped to 16:9
3. Add an entry to `websiteFunnel` or `landingPages` in `src/data/funnels.ts`.

### Video testimonials

The videos play through Google Drive's embedded player. Each file must stay shared as **Anyone with the link**, or visitors see a sign-in prompt instead of the video.

## Notes

- The background shader measures the visitor's frame rate and steps down on slow machines (`src/lib/perf.ts`). Keep any large `backdrop-filter` blur off the layers above it, because blur over an animated canvas is the most expensive thing on the page.
- From 1100px down, the site switches to the phone layout. `src/styles/mobile-app.css` owns its components (`TabBar`, `QuickMenu`, `HomeMobile`); `src/styles/mobile-pass.css` holds the motion and the native-feel fixes. Everything respects `prefers-reduced-motion` and the site's own Reduce motion switch.
- Anything new you add above the fold on Home must join the intro hold-back list in `src/styles/boot.css`. Otherwise it shows through the intro animation.
- The Home headline's size is fitted to its length (`.home__title` in `src/styles/home.css` and `.boot__title` in `src/styles/boot.css`, kept identical). If you change the headline's length, adjust the `/ 19` divisor there.

## Credits

- Template: [brewed-ops/portfolio-template](https://github.com/brewed-ops/portfolio-template) by BrewedOps.
- Contour background technique inspired by the landonorris.com site by OFF+BRAND. The simplex noise is Ashima Arts / Ian McEwan (MIT).
- Icons: [Phosphor](https://phosphoricons.com) (MIT). Tool logos from [Simple Icons](https://simpleicons.org) (CC0), [SVG Logos](https://github.com/gilbarbara/logos) (CC0) and [Devicon](https://devicon.dev) (MIT); they are trademarks of their owners. Kajabi, BudHerd and MasterControl are letter tiles until real logos are added.
- Font: Poppins (SIL Open Font License).

## License

The template is licensed under [PolyForm Noncommercial 1.0.0](LICENSE), plus one extra permission: you can use it for **your own** portfolio, even if that portfolio promotes your paid services.

What it does not allow without a commercial license: selling or reselling the template, or building portfolio sites for other people for payment. For a commercial license, email brewedops@gmail.com.
