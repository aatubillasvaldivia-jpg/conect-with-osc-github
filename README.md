# Orlando Soccer Club — Website

React + Vite + Tailwind site. Fully standalone (no Base44 or other backend needed).

## Run it on your computer

Requires [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:5173 — changes you save show up instantly.

## Where to edit things

| What | File |
|---|---|
| Phone, WhatsApp, Instagram, addresses, schedules | `src/lib/oscData.js` |
| Top banner (headline, buttons) | `src/components/Hero.jsx` |
| About section | `src/components/Nosotros.jsx` |
| Development stages | `src/components/Etapas.jsx` |
| Methodology | `src/components/Metodologia.jsx` |
| Photo gallery | `src/components/Galeria.jsx` |
| Registration form (sends to WhatsApp) | `src/components/inscripcion/` |
| Community section | `src/components/Comunidad.jsx` |
| Header / footer | `src/components/SiteHeader.jsx`, `src/components/SiteFooter.jsx` |
| Colors (purple / orange / ink / cream) | `src/index.css` (`--osc-*` variables) |
| Page title, SEO description | `index.html` |
| Favicon | `public/favicon.png`, `public/apple-touch-icon.png`
| Club logo | `public/images/osc-logo.png` / `.webp` (used by `src/components/Crest.jsx`) |

**Photos:** right now they are Unsplash placeholders. To use the club's real photos,
put them in `public/images/` (e.g. `public/images/hero.jpg`) and change the `src` to
`"/images/hero.jpg"`.

## Deploy

Test the production build first: `npm run build` (output goes to `dist/`).

**Vercel:** push this folder to a GitHub repo → vercel.com → *Add New Project* → import the repo.
It detects Vite automatically (build `npm run build`, output `dist`). `vercel.json` is included.

**Netlify:** push to GitHub → app.netlify.com → *Add new site → Import an existing project*.
Settings come from `netlify.toml`. Or, without GitHub: run `npm run build` and drag the
`dist` folder onto app.netlify.com/drop.
