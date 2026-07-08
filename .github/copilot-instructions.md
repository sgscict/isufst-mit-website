# Copilot instructions for this repo

This is a small static marketing site for the ISUFST Master in Information Technology program.

- Architecture: single-page React app composed in `src/App.tsx`. There is no client-side routing; sections are ordered in the page tree and navigated by anchor links.
- Content model: `src/data.ts` is the single source of truth for all program copy, curriculum, outcomes, FAQs, contact details, and hero stats. Most content edits should happen there.
- Shared UI patterns:
  - `src/components/Section.tsx` wraps section layout and uses `src/hooks/useReveal.ts` for scroll reveal animation.
  - `src/components/Icon.tsx` supplies an inline SVG icon set. Add new icons there instead of pulling in an external icon library.
  - `src/index.css` defines Tailwind v4 theme tokens and utilities such as `container-page`, `reveal`, `is-visible`, and `animate-float-up`.
- Navigation:
  - `src/components/Navbar.tsx` uses sticky header styling, scroll detection, and a mobile hamburger menu.
  - Anchor targets include `#top`, `#about`, `#why`, `#curriculum`, `#admission`, `#faq`, and `#apply`.
- Styling: uses Tailwind CSS v4 with `@import 'tailwindcss'`, custom theme variables, and utility classes in `src/index.css`.
- Build/dev workflow: use `npm install`, `npm run dev`, `npm run build`, `npm run preview`, and `npm run lint`.
- No tests are defined in this repo currently.

When making changes:
- Keep content data separate from component layout. If text changes are needed, update `src/data.ts` first.
- If adding a new page section, create a new component in `src/components/`, then import and render it in `src/App.tsx` in the desired order.
- Use the existing reveal pattern and `Section` wrapper for consistent spacing and animation.
- Preserve the current `Icon` inline set if adding icons, and keep the app dependency-free for icons.
- For UI changes, prefer Tailwind classes and custom utilities rather than adding new CSS files.

Key files:
- `src/App.tsx`
- `src/data.ts`
- `src/components/Section.tsx`
- `src/components/Icon.tsx`
- `src/components/Navbar.tsx`
- `src/hooks/useReveal.ts`
- `src/index.css`
