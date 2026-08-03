# AGENTS.md

React (Vite) portfolio for Andres Bermudez (andresbetov). Platzi-inspired dark
theme. Single-page marketing site: hero, about, skills, projects, contact.

## Current state

Pre-scaffold: no app code and no root `package.json` yet (feat-001 active).
The test harness is committed and red by design: `src/__tests__/App.test.jsx`,
`e2e/portfolio.spec.js`, `vitest.config.js`, `playwright.config.js` are the
acceptance gates for each feature. Do not delete or weaken them to make CI
pass. They also pin paths the scaffold must honor: `src/App.jsx` (test imports
`../App`), `index.html` at root, `e2e/portfolio.spec.js` relative to root.

## Startup Workflow

Every new session, in order:

1. Read `feature_list.json`, `progress.md`, and `docs/decisions.md`.
2. Read `session-handoff.md` if present.
3. Run `./init.sh` before editing. Until feat-001 lands it prints
   "Run feat-001 first" — that is the expected current behavior, not an error.
4. Work on ONE feature at a time. Do not start a feature whose dependencies
   are not complete.

## Invariants

- Visual tokens are defined once in `docs/design-system.md`; implement them
  in `src/styles/tokens.css` and never hardcode colors/fonts elsewhere.
- Components live in `src/components/`, one folder per component containing
  `component.jsx` + `component.module.css` (CSS Modules).
- All content (profile, skills, projects, links) comes from `src/data/site.js`;
  never embed content directly in components.
- No comments in code unless requested; no emojis in UI copy.
- Never introduce secrets or API keys.
- Content is English. Person: software engineer, systems engineering student,
  Colombia. Projects: Elara App, hierarchical-clustering-portfolio-selector,
  xai-financial-predictor-engine.
- Smoke tests assert exact hrefs: exactly three `https://github.com/andresbetov/*`
  project links, and social links with `www.` on LinkedIn/Instagram (README
  lists them without `www.` — copy from the test, not the README).

## Commands

- `npm run dev` — dev server (default http://localhost:5173)
- `npm run build` — production build (must pass before done)
- `npm run lint` — ESLint (`eslint .`, flat config `eslint.config.js`; must
  pass before done; `.opencode/` is ignored)
- `npm test` — Vitest smoke tests (jsdom; config picks up only
  `src/**/*.test.{js,jsx}`, setup in `tests/setup.js`; red by design until
  feat-018 — do not weaken the tests to make it pass)
- `npm run test:e2e` — Playwright, chromium only; auto-starts the dev server
  on 5173; checks overflow at 1440/768/390/320, anchors, hover; screenshots
  at 1440/390 into `/tmp/opencode/portfolio-{desktop,mobile}.png`
- `npm run format` — Prettier (single quotes, semicolons, trailing commas
  es5, 2-space indent per .editorconfig)
- `npm run preview` — preview production build

CI (`.github/workflows/ci.yml`, Node 20 per `.nvmrc`) runs `npm ci`, lint,
test, build on push/PR. No e2e or format checks in CI yet — an e2e job lands
with feat-022 and a Pages deploy with feat-023.

## Definition of done

- `npm run build`, `npm run lint`, and `npm test` all pass.
- For visual/UX features: `npm run test:e2e` passes and screenshots are
  captured at 1440px and 390px.
- UI follows docs/design-system.md (ui-designer audit for non-trivial changes).
- `feature_list.json` updated: feature marked done with evidence, next feature
  becomes active.

## Git Workflow

- Branch per feature: before starting a feature, branch from main using the
  branch name recorded in `feature_list.json` (e.g. `feat/feat-001-scaffold-vite-react-app`).
- Commit once per completed feature (atomic). Record the commit id as
  evidence in `feature_list.json` and `session-handoff.md`.
- Push the branch and open a pull request. CI runs lint/test/build on the PR.
- Merge to main only after all verification gates pass.
- Never commit feature work directly to main.

## End of Session

Before ending a session, in order:

1. Record verification evidence (commands run and results) in
   `session-handoff.md`.
2. Update `progress.md`: what's done, what's in progress, blockers.
3. Update `feature_list.json`: status and evidence for completed features.
4. Leave a clear `session-handoff.md` (blockers, decisions, next step) so the
   next session restarts cleanly.

## Scope

- This project: frontend only. Do not create backend services, databases, or
  deploy infrastructure unless explicitly asked.
- One active feature at a time; never leave a feature half-finished and jump
  to another. If blocked, record the blocker in progress.md.
