# andresbetov — Portfolio

Fast, minimalist, professional portfolio site for **Andres Bermudez** (`andresbetov`),
systems engineering student and fullstack developer in Colombia — someday on Mars. 🪐

## Stack

- React + Vite
- CSS Modules
- Space Grotesk
- Vitest + Testing Library (smoke tests)
- Playwright (visual/UX tests)

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run lint` | Lint |
| `npm test` | Vitest smoke tests |
| `npm run test:e2e` | Playwright specs (chromium) |
| `npm run format` | Prettier formatting |

## Project structure

- `src/data/site.js` — single content source (profile, skills, projects, links)
- `src/styles/tokens.css` — design tokens from `docs/design-system.md`
- `src/components/` — one folder per component (component.jsx + component.module.css)

## Socials

- GitHub: https://github.com/andresbetov
- LinkedIn: https://linkedin.com/in/andresbetov/
- X: https://x.com/andresbetov
- Instagram: https://instagram.com/andresbetov

## Docs

- [Design system](docs/design-system.md)
- [Decisions](docs/decisions.md)

## License

Apache-2.0
