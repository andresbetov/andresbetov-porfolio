# Session Handoff

## Current Objective

- Goal: Build a Platzi-inspired dark portfolio site for Andres Bermudez (andresbetov)
- Current status: feat-001..017 on main (feat-017 PR pending merge). Next: feat-018.
- Branch / commit: `feat/feat-017-fix-320px-overflow` @ `a3fdacd` (feature) +
  records commit pending; PR #16 not opened yet.

## Completed This Session

- [x] feat-017 - Fix 320px overflow, verified and hardened (commit `a3fdacd`):
  - Temp audit spec at 320/300/280px: scrollWidth-clientWidth = 0 and 0
    offenders at every width. Repo-name titles wrap safely at their literal
    hyphens (probe spec confirmed: "xai-financial-predictor-engine" breaks to
    "xai-financial-predictor-" + "-engine", 2 lines).
  - Grids were already fluid: `repeat(N, minmax(0, 1fr))` + explicit 3/2/1
    breakpoints. Decision ADR-012: keep explicit breakpoints, reject
    auto-fit minmax() (it would make the tablet column count viewport-driven
    and could silently change the audit-verified 2-col tablet layout).
  - Hardening: `overflow-wrap: break-word` on Projects `.cardTitle` (titles
    come from site.js, so a future hyphen-less repo name can't overflow 320px).
  - Verified: vitest 5/5, e2e 10/10, lint + build + prettier green.
- [x] No subagents used (ui-designer / qa-visual-tester still emit the
      session-insert DB error) - code-level audits only, per user instruction.

## Skills Usage Notes (for future sessions)

- frontend-design skill: restraint applied - no churn on verified layouts;
  one-line hardening instead of reworking grids (minimal directions need
  precision).
- harness-creator skill: full pipeline executed - init.sh, audit-first,
  evidence recording in feature_list.json/progress.md/session-handoff.md,
  ADR added for the grid decision (ADR-012), atomic commit, PR.
- webapp-testing skill: python playwright not installed; used the project's
  @playwright/test (node) with the temp-spec-in-e2e/ audit recipe. This
  session also used a probe spec (temp) to inspect computed styles/rects.

## Verification Evidence

| Check       | Command              | Result                                | Notes                        |
| ----------- | -------------------- | ------------------------------------- | ---------------------------- |
| Init        | ./init.sh            | PASS                                  | full verification run inside |
| Lint        | npm run lint         | PASS                                  | eslint . clean               |
| Build       | npm run build        | PASS                                  |                              |
| Format      | npx prettier --check | PASS                                  | css + json + md              |
| Test        | npm test             | 5 passed (5)                          | ALL GREEN since feat-013     |
| e2e         | npm run test:e2e     | 10 passed (10)                        | screenshots 1440/390         |
| 320px audit | temp spec            | 0 overflow, 0 offenders @ 320/300/280 | specs deleted after          |

## Files Changed

- `src/components/Projects/Projects.module.css` - overflow-wrap: break-word on card titles
- `docs/decisions.md` - ADR-012 (explicit grid breakpoints over auto-fit)
- `feature_list.json` - feat-017 done (a3fdacd), feat-018 active
- `progress.md`, `session-handoff.md` - session records

## Decisions Made

- ADR-012: keep explicit 3/2/1 grid breakpoints (minmax(0,1fr) already fluid);
  auto-fit rejected because column count would become viewport/content-driven
  and could silently break the audit-verified tablet 2-col layout.
- Hardening over rework: the 320px gate was already green at 320/300/280; the
  only real risk is data-driven titles, covered by overflow-wrap: break-word.

## Blockers / Risks

- Subagent infra (ui-designer / qa-visual-tester) down: session-insert DB
  error on spawn. User instructed NOT to use them - code-level + scripted
  audits only.
- Model cannot view images: numeric audits only; screenshots saved for user
  review (/tmp/opencode/portfolio-*.png).
- feat-018/019 are evidence-recording passes: their gates (vitest 5/5, e2e
  10/10) have been green since feat-013 - no new work expected.

## Next Session Startup

1. Read `AGENTS.md`.
2. Read `feature_list.json`, `progress.md`, `docs/decisions.md`.
3. Review this handoff.
4. Run `./init.sh`.
5. On `feat/feat-017-fix-320px-overflow`: merge PR #16 (CI fully green),
   checkout main, pull, branch `feat/feat-018-vitest-smoke-tests-green`.

## Recommended Next Step

- Merge feat-017 (PR #16), then feat-018 - Vitest smoke tests green: evidence
  pass - run npm test (expect 5/5), record evidence in feature_list.json +
  progress.md, merge. Then feat-019 is the same for e2e (10/10), then real
  work resumes at feat-020 (meta tags + favicon: title, description, OG tags,
  theme-color, SVG 'AB' favicon in accent green).
