# Design System

Single source of truth for visual tokens. Reference this file; never redefine tokens inline. Extracted from Platzi's public site design (dark + electric green), adapted as the visual identity of this portfolio. All tokens must be implemented as CSS custom properties in `src/styles/tokens.css` and consumed from there.

## Colors

| Token                | Value                       | Usage                                          |
| -------------------- | --------------------------- | ---------------------------------------------- |
| `--color-bg`         | `#13161C`                   | Page background                                |
| `--color-surface`    | `#1E2229`                   | Cards, secondary buttons                       |
| `--color-surface-2`  | `#313640`                   | Elevated surfaces, hover fills                 |
| `--color-accent`     | `#0AE98A`                   | Links, primary buttons, highlights, focus ring |
| `--color-secondary`  | `#1863DC`                   | Secondary accents (minimal use)                |
| `--color-text`       | `#F7FAF7`                   | Primary text                                   |
| `--color-text-muted` | `rgba(247, 250, 247, 0.64)` | Secondary text, captions                       |

Rules: accent is reserved for interactive elements and key highlights. Text must meet WCAG AA contrast on `--color-bg` (accent text on bg: only for large text or non-text elements).

## Typography

- Family: `Space Grotesk` (Google Fonts) with system fallback `-apple-system, "Segoe UI", Roboto, sans-serif`. Substitute for Platzi's proprietary Roobert.
- Weights: 400 body, 500 emphasis, 700 headings.

| Role            | Size                           | Line-height |
| --------------- | ------------------------------ | ----------- |
| H1              | `clamp(2.25rem, 5vw, 3.25rem)` | 1.1         |
| H2              | `clamp(1.5rem, 3vw, 2rem)`     | 1.2         |
| H3              | 1.25rem                        | 1.3         |
| Body            | 1.125rem                       | 1.6         |
| Small / caption | 0.875rem                       | 1.5         |

## Layout & shape

- Flat design: no drop shadows; separation via background contrast and 1px borders (`rgba(247, 250, 247, 0.12)`).
- Border radius: 2px primary buttons, 4px base, 8px cards and inputs.
- Spacing scale: multiples of 4px (4, 8, 12, 16, 24, 32, 48, 64, 96).
- Breakpoints: mobile < 768px, tablet 768–1024px, desktop > 1024px.
- Max content width: 1120px, centered.

## Components

| Component        | Spec                                                                                   |
| ---------------- | -------------------------------------------------------------------------------------- |
| Button primary   | bg `--color-accent`, text `#13161C`, radius 2px, hover: lighten accent 8%              |
| Button secondary | bg `--color-surface`, border 1px `--color-accent`, text `--color-accent`, radius 8px   |
| Card             | bg `--color-surface`, radius 8px, padding 24px, 1px border `rgba(247, 250, 247, 0.08)` |
| Link             | color `--color-accent`, underline on hover only                                        |
| Focus ring       | 2px outline `--color-accent`, offset 2px, on all interactive elements                  |
| Section          | vertical padding 96px mobile 64px, H2 heading above content                            |

## Motion

- Transitions: 150ms ease for color/border, 200ms ease for transform.
- Respect `prefers-reduced-motion`: disable transitions/animations.
