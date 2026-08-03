# Session Handoff

## Current Objective

- Goal: Build a Platzi-inspired dark portfolio site for Andres Bermudez (andresbetov)
- Current status: feat-001 (scaffold) + feat-003 (deps/scripts) done, in stacked PRs
  awaiting merge. Next: feat-004 (tokens.css).
- Branches: `feat/feat-001-scaffold-vite-react-app` @ `8ba49cf`,
  `feat/feat-003-install-dependencies` @ `7be1cbb`; main @ `cd4c635`

## Completed This Session

- [x] feat-001 - Scaffold Vite + React app (Vite 8.2.0, React 19.2.8)
- [x] feat-003 - Install dependencies + scripts:
  vitest 4, RTL 16, jest-dom 7, jsdom 30, @playwright/test 1.62, prettier 3.9,
  eslint 10 (+@eslint/js, globals, eslint-config-prettier); scripts
  test/test:e2e/format/lint; engines >=20; `npx playwright install chromium`
  done; full-repo prettier format applied (single quotes, semi, es5 trailing)
- [x] Decision: ESLint over template's oxlint (per plan); oxlint removed,
  .opencode added to eslint/prettier ignores
- [x] PR #1 created: https://github.com/andresbetov/andresbetov-porfolio/pull/1

## Verification Evidence

| Check | Command | Result | Notes |
|---|---|---|---|
| Lint | npm run lint | PASS | eslint . clean (app + harness files) |
| Build | npm run build | PASS | dist/ generated |
| Test | npm test | RED (4/1) | expected by design until feat-018 |
| CI | gh pr checks | test step red | "Missing script: test" pre-feat-003; will re-run green-test-step-free after merge |
| Init | ./init.sh | PASS | install + lint + build |

## Files Changed

- feat-001: `index.html`, `package.json`, `vite.config.js`, `public/`,
  `src/{main.jsx, App.jsx, App.css, index.css, assets/}`, `package-lock.json`
- feat-003: `eslint.config.js` (new), `package.json` (scripts+engines),
  `.oxlintrc.json` (removed), `.prettierignore` (+.opencode),
  prettier reformat of configs/tests/docs

## Decisions Made

- ESLint (flat config) instead of template's oxlint; eslint-config-prettier
  turns off formatting rules.
- Stacked PRs: feat-003 branches off feat-001 branch; merge #2 into #1, then #1
  into main (keeps each feature atomic on its own branch per AGENTS.md).
- Lint/prettier ignore `.opencode/` (opencode's own skill scripts, not app code).

## Blockers / Risks

- [ ] `npm test` red until feat-018 (App smoke-test gates) — CI test step will
      stay red on every PR up to feat-018; harness says tests are gates, do not
      weaken. Merge policy needs user agreement (merge with red test step, or
      batch-merge at feat-018).
- [ ] PR #1 CI currently red only on test step; after feat-003 merge, same
      status persists (real assertion failures now, still red by design).

## Next Session Startup

1. Read `AGENTS.md`.
2. Read `feature_list.json` and `progress.md`.
3. Review this handoff.
4. Run `./init.sh` (install + lint + build).
5. Merge PR chain in order (#2 feat-003 first, then #1 feat-001).

## Recommended Next Step

- Merge PR #2 (feat-003) into feat-001 branch, then PR #1 (feat-001) into main.
- Then feat-004: `src/styles/tokens.css` with every token from
  docs/design-system.md under `:root` (colors, fonts, sizes, radii, spacing,
  motion) — branch `feat/feat-004-create-tokens-css`.
