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

## ADR-008: Red-test merge policy before feat-018

- **Date:** 2026-08-03
- **Context:** The Vitest smoke tests are committed as acceptance gates and are
  red by design until the app sections exist (feat-018). Strictly requiring
  `npm test` green on every PR would block merging features whose gates are
  deliberately still open.
- **Decision:** Until feat-018, a feature is mergeable when lint + build pass;
  the test step may stay red by design. From feat-018 on, `npm test` must pass
  for every PR.
- **Alternatives:** Stack all features and batch-merge at feat-018; block every
  merge until gates close.
- **Consequences:** PR test steps will show red until feat-018; reviewers must
  distinguish "red by design" (assertions against not-yet-built sections) from
  regressions (lint/build failures, infra errors).

## ADR-009: Runtime is Node 22 LTS, not Node 20

- **Date:** 2026-08-03
- **Context:** The original harness pinned Node 20 (`.nvmrc`, ci.yml), but
  jsdom 30 (required by the Vitest stack) declares engines
  `^22.22.2 || ^24.15 || >=26` and crashes on Node 20 at test startup
  (`webidl.util.markAsUncloneable is not a function`). Node 20 is also EOL
  (April 2026).
- **Decision:** Run the project on Node 22 LTS: `.nvmrc` = 22, ci.yml
  `node-version: 22`, package.json `engines: node >=22`.
- **Alternatives:** Pin jsdom to a Node-20-compatible version (keeps an EOL
  runtime); move to Node 24 LTS.
- **Consequences:** CI and local development must use Node >= 22.22.2.

## ADR-007: Branch-per-feature workflow

- **Date:** 2026-08-02
- **Context:** Tracked feature list needs predictable, reviewable progress.
- **Decision:** One branch per feature (`feat/<id>-<slug>` from main), atomic commit per feature, merged via PR after gates pass.
- **Alternatives:** Main-only commits.
- **Consequences:** Each `feature_list.json` entry carries a `branch` field; git history mirrors the feature list.

## ADR-011: Scope project-link gates to the projects section

- **Date:** 2026-08-03
- **Context:** The projects gates ("exactly three project cards linking to
  GitHub") originally counted document-wide
  `a[href^="https://github.com/andresbetov"]` matches. The footer GitHub link
  satisfies that prefix, so once feat-013 adds 3 project cards the document
  holds 4 matching links and the gates fail. The gates' intent is "three
  project cards", not "three GitHub links anywhere".
- **Decision:** Scope the gates to the projects section: vitest queries
  `within(document.querySelector('#projects'))`, e2e uses
  `#projects a[href^="https://github.com/andresbetov"]`. No assertion
  strength is reduced; the footer link remains covered by the socials gate.
- **Alternatives:** Remove the footer GitHub link (loses social gate coverage);
  make one project card link to the profile URL (misrepresents the projects).
- **Consequences:** feat-013 flips both projects gates to green (vitest 5/5,
  e2e 10/10).
