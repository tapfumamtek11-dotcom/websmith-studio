# Websmith Studio — Official Website

**Thoughtfully Built Digital Experiences.**

Official production repository for **Websmith Studio** — an independent digital design and development studio designing and building bespoke, responsive websites, digital storefronts, and ongoing maintenance solutions for businesses, entrepreneurs, and growing brands.

---

## Official Channels & Contact

- **Official Email:** [websmith.studio.dev@gmail.com](mailto:websmith.studio.dev@gmail.com)
- **Official WhatsApp:** [+263 77 999 9248](https://wa.me/263779999248)
- **Instagram:** [@websmith.studio.dev](https://www.instagram.com/websmith.studio.dev)
- **Facebook:** [@websmith.studio.dev](https://www.facebook.com/websmith.studio.dev)
- **TikTok:** [@websmith.studio.dev](https://www.tiktok.com/@websmith.studio.dev)

---

## Project Structure

```text
websmith-studio/
├── assets/
│   ├── favicon.png                      # 64×64 square geometric W emblem favicon
│   ├── websmith-logo-lockup.png         # Primary transparent header/footer lockup
│   ├── websmith-logo-brass-on-black.png # Obsidian & Champagne Brass card / OG image
│   ├── websmith-logo-original.png       # High-resolution original master logo
│   └── portfolio/                       # 12 high-resolution case study screenshots (3 per site + mobile)
│       ├── brynbrands-corporate-1.png
│       ├── brynbrands-corporate-2.png
│       ├── brynbrands-corporate-3.png
│       ├── brynbrands-corporate-mobile.png
│       ├── sekurutau-gallery-1.png
│       ├── sekurutau-gallery-2.png
│       ├── sekurutau-gallery-3.png
│       ├── sekurutau-gallery-mobile.png
│       ├── sekurutau-music-1.png
│       ├── sekurutau-music-2.png
│       ├── sekurutau-music-3.png
│       └── sekurutau-music-mobile.png
├── css/
│   └── style.css                        # Complete design system, layout & motion stylesheet
├── js/
│   └── main.js                          # Centralised config, case studies & analytics
├── index.html                           # Production landing page with SEO & JSON-LD schema
├── 404.html                             # Branded 404 fallback page
├── manifest.webmanifest                 # Web App Manifest
├── robots.txt                           # Search crawler rules
├── sitemap.xml                          # XML Sitemap
├── vercel.json                          # Vercel headers, CSP, clean URLs & immutable caching
├── .vercelignore                        # Excludes non-production files from Vercel upload
├── package.json                         # Project metadata & local preview scripts
└── .gitignore                           # Git ignore rules
```

---

## Deploying to GitHub & Vercel

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial production release: Websmith Studio official website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/websmith-studio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Import the GitHub repository in [Vercel](https://vercel.com/new).
   - **Framework Preset:** `Other` (Static HTML/CSS/JS — zero build step required).
   - **Root Directory:** `./` (if deploying this `websmith-studio` folder directly).
   - Enable **Vercel Web Analytics** and **Vercel Speed Insights** in the Vercel Project Dashboard (the client scripts `/_vercel/insights/script.js` and `/_vercel/speed-insights/script.js` are pre-wired in `index.html`).

---

## Local Development Preview

```bash
npm start
# Serves at http://localhost:3000
```
