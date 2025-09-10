# React UI with Figma Design Tokens

This app wires a base light/dark theme, typography, spacing utilities, and example components using the extracted Figma design tokens.

## Design Tokens and Spec

- Tokens: `assets/design-tokens.css` (imported globally in `src/index.css`)
- Spec Overview: `assets/design-spec-overview.html` for developer reference

## Components

- Navigation (top bar)
- Button (primary, outline, ghost; sizes sm/md/lg)
- Input (with label, hint, error)
- Tag (neutral, success, warning, error)
- Table (thead, tbody, empty state)

Find components in `src/components/` and utilities in `src/styles/`.

## Theming

The app sets `data-theme` on the root element. Tokens define theme hooks in `assets/design-tokens.css`.

## Scripts

- `npm start` - dev server
- `npm test` - tests
- `npm run build` - production build
