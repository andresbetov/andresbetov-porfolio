# Decisions Log

Chronological log of decisions for this project. One entry per decision.

---

## ADR-001: Platzi-inspired dark theme

- **Date:** 2026-08-02
- **Context:** The site should feel fast, minimalist, and professional, inspired by platzi.com.
- **Decision:** Dark theme with electric green accent; tokens extracted from platzi.com and frozen in `docs/design-system.md`.
- **Alternatives:** Light theme, custom palette.
- **Consequences:** Token values are the single source of truth; no hardcoded colors outside `src/styles/tokens.css`.

## ADR-002: Space Grotesk typeface

- **Date:** 2026-08-02
- **Context:** Platzi uses the proprietary Roobert font.
- **Decision:** Substitute Space Grotesk (400/500/700) via Google Fonts.
- **Alternatives:** Inter, Sora, system fonts.
- **Consequences:** Open-source font; loaded once in `index.html`.

## ADR-003: Verification via Vitest + Playwright

- **Date:** 2026-08-02
- **Context:** Need repeatable acceptance gates for each feature.
- **Decision:** Vitest + Testing Library for unit/smoke tests; Playwright for visual/UX specs with screenshots at 1440/768/390/320 widths.
- **Alternatives:** Jest, Cypress.
- **Consequences:** CI runs lint + test + build (+ e2e, feat-022); all features must pass the gates in AGENTS.md.

## ADR-004: CSS Modules for styling

- **Date:** 2026-08-02
- **Context:** Component-scoped styles without a UI framework.
- **Decision:** CSS Modules; one folder per component containing `component.jsx` + `component.module.css`.
- **Alternatives:** Tailwind, styled-components, plain global CSS.
- **Consequences:** No extra dependencies; tokens consumed via custom properties.

## ADR-005: Single content source in data/site.js

- **Date:** 2026-08-02
- **Context:** Profile, skills, projects, and links must be easy to update.
- **Decision:** All content lives in `src/data/site.js`; components only consume data.
- **Alternatives:** JSX-embedded content, CMS, JSON files.
- **Consequences:** Editing content never requires touching components.

## ADR-006: CI + GitHub Pages deployment

- **Date:** 2026-08-02
- **Context:** The site must build reliably and be publicly available.
- **Decision:** GitHub Actions CI (lint/test/build on push/PR) with static deploy to GitHub Pages.
- **Alternatives:** Netlify, Vercel, manual uploads.
- **Consequences:** Remote repo required (pushed via feature PRs); e2e job added at feat-022, Pages workflow at feat-023.

## ADR-007: Branch-per-feature workflow

- **Date:** 2026-08-02
- **Context:** Tracked feature list needs predictable, reviewable progress.
- **Decision:** One branch per feature (`feat/<id>-<slug>` from main), atomic commit per feature, merged via PR after gates pass.
- **Alternatives:** Main-only commits.
- **Consequences:** Each `feature_list.json` entry carries a `branch` field; git history mirrors the feature list.
