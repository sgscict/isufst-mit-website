# Master in Information Technology — CICT, ISUFST

A modern, single-page marketing site for the **Master in Information Technology (MIT)**
graduate program of the **College of Information and Communications Technology (CICT)**,
**Iloilo State University of Fisheries Science and Technology (ISUFST)**.

## Tech stack

- **Vite** — build tooling & dev server
- **React 19 + TypeScript** — UI
- **Tailwind CSS v4** — styling (configured via `@tailwindcss/vite`)
- Google Fonts: _Plus Jakarta Sans_ (body) + _Space Grotesk_ (display)
- Zero UI dependencies — icons and animations are hand-rolled

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Editing content

All program copy — degree info, stats, curriculum, admission requirements,
careers, FAQs, and contact details — lives in **`src/data.ts`**.
Update the values there and the whole page reflects the changes; no component
edits are needed for routine content updates.

## Project structure

```
src/
├── data.ts               # ← all editable program content
├── index.css             # Tailwind theme, brand tokens, animations
├── App.tsx               # page composition
├── hooks/
│   └── useReveal.ts       # scroll-into-view animation hook
└── components/
    ├── Navbar.tsx         # sticky nav + mobile menu
    ├── Hero.tsx
    ├── About.tsx          # overview + stats
    ├── Highlights.tsx     # "Why MIT" feature cards
    ├── Curriculum.tsx
    ├── Admission.tsx      # requirements + careers
    ├── FAQ.tsx            # accordion
    ├── Apply.tsx          # CTA + contact details
    ├── Footer.tsx
    ├── Section.tsx        # shared section shell
    └── Icon.tsx           # inline SVG icon set
```

## Notes

Course titles, contact details, and figures are indicative placeholders.
Replace them with the official, approved program information from the CICT
graduate office before publishing.
