# Behind Innovations — Website (React)

React + Vite + Tailwind + React Router rebuild of `behind-innovations-website-content.pdf`,
carrying over the visual theme from your `index.html` draft (sky/blue/indigo gradients,
glass cards, Space Grotesk + Plus Jakarta Sans, orbit hero).

## Pages built (all 14)

| Route         | Page              |
|---------------|-------------------|
| `/`           | 01 Home           |
| `/about`      | 02 About BI       |
| `/road`       | 03 Road — Ride app (interactive ride-mode simulator) |
| `/sea`        | 04 Sea            |
| `/air`        | 05 Air            |
| `/space`      | 06 Space          |
| `/tourism`    | 07 Tourism        |
| `/logistics`  | 08 Logistics      |
| `/technology` | 09 Technology (journey explorer tabs) |
| `/infrastructure` | 10 Infrastructure |
| `/partners`   | 11 Partners (opens inquiry form pre-selected) |
| `/investors`  | 12 Investors (interactive roadmap + 7 investment stages) |
| `/careers`    | 13 Careers (open-roles list is empty — placeholder) |
| `/contact`    | 14 Contact (emails are placeholders — see `src/data/contact.js`) |


## Viewing the site

This is a Vite app: opening `index.html` by double-click shows a blank page. Run `npm install`,
then `npm run dev` and open the URL it prints (usually http://localhost:5173).
`tailwind.config.js` must use forward slashes: `content: ['./index.html', './src/**/*.{js,jsx}']`
(a `.js`-only or backslash pattern leaves the `.jsx` pages unstyled).

## Company name font

The name in the navbar/footer is the wordmark cut from the logo (`src/assets/wordmark-*.png`),
so it matches the logo font exactly. `-dark` is for light backgrounds, `-light` for dark ones.

## Deploying (Vercel/Netlify) — routing fix

This app uses `react-router-dom`'s `BrowserRouter`, so every page (`/technology`,
`/investors`, ...) is a real URL, not a hash. A static host must be told to serve
`index.html` for *any* path, or opening/refreshing a page other than `/` shows a 404.

- **Vercel:** `vercel.json` (included) adds the required rewrite. Redeploy after adding it.
- **Netlify:** add a `public/_redirects` file containing `/*  /index.html  200`.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build      # production build to /dist
```

## Structure

```
src/
  data/topics.js         inquiry topics (pre-select the form)
  data/contact.js        contact emails (null = placeholder)
  data/nav.js            14-page site map (first 8 in the bar, rest under "More")
  components/
    Navbar.jsx            sticky nav + scroll progress + mobile drawer
    Footer.jsx             closing statement footer
    InquiryForm.jsx        shared form (modal + Contact page); no backend yet
    PartnerModal.jsx       "Partner With Us" dialog
    PageHeader.jsx          reusable page title header
    Tagline.jsx            "Road • Sea • Air • Space • Technology" line (navbar + footer)
    FutureDirectionNote.jsx  amber notice used on Sea/Air/Space
  pages/
    Home.jsx, About.jsx, Road.jsx, Sea.jsx, Air.jsx, Space.jsx,
    Tourism.jsx, Logistics.jsx, Technology.jsx, Infrastructure.jsx,
    Partners.jsx, Investors.jsx, Careers.jsx, Contact.jsx
  App.jsx                 routes
  main.jsx                entry, wraps App in BrowserRouter
  index.css                theme tokens ported from index.html
```

## Notes carried over from the content draft

- Road leads with our **ride-hailing app**, the first real product (carpooling,
  Women Safety Rides). Everything is labelled "planned" — no launch date is given.
- Sea, Air and Space intentionally keep **"future direction / no services operating yet"**
  language (regulatory caution from the Master Plan, sections 9, 10, 18). Keep this even
  after further copyediting.
- Before publishing: add real emails in `src/data/contact.js`, real roles in `OPEN_ROLES` (`Careers.jsx`),
  and connect `InquiryForm`'s `onSubmit` to a backend/email service.

## Scam Alert page

A dedicated `/scam-alert` page (linked in the header — always visible, amber pill — and in the
footer) warns visitors about lookalike domains and impersonation, based on your own draft. Edit
`src/pages/ScamAlert.jsx` directly to add real reporting emails or update the examples; the
official site address is pulled from `src/data/contact.js`.

## "Behind Trip" naming removed

The product is no longer named "Behind Trip" anywhere in the app (nav, Home, Road, About, the
partner modal, or the inquiry topic list) — it's now referred to generically as the "Ride App"
/ "our ride app", per request. If you later want a real product name, search the repo for
"Ride App" / "our ride app" and swap it in.

## Softer regulatory language

The old bottom-of-page boxes reading "This is a future direction. No marine/aviation services are
currently operating." (Sea, Air) and "No space services or launch dates are being announced."
(Space) have been replaced with a small "Future direction" / "Core long-term ambition" badge near
the page title, and the caution is folded into the surrounding paragraphs instead of stated as a
blunt standalone line. The footer's copyright line was softened the same way. The general
disclaimer on the About page (that Sea/Air/Space are long-term direction) was left as-is.