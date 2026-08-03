# AGENTS.md

React (Vite) portfolio for Andres Bermudez (andresbetov). Platzi-inspired dark
theme. Single-page marketing site: hero, about, skills, projects, contact.

## Startup Workflow

Every new session, in order:

1. Read `feature_list.json`, `progress.md`, and `docs/decisions.md`.
2. Read `session-handoff.md` if present.
3. Run `./init.sh` (or the verification commands it runs) before editing.
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

## Commands

- `npm run dev` — dev server (default http://localhost:5173)
- `npm run build` — production build (must pass before done)
- `npm run lint` — ESLint (must pass before done)
- `npm test` — Vitest smoke tests (must pass before done)
- `npm run test:e2e` — Playwright specs (desktop + mobile; run before done
  for visual/UX features)
- `npm run format` — Prettier formatting
- `npm run preview` — preview production build

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
