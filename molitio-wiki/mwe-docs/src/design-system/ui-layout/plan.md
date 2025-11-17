# Plan: UI Layout Component

## Overview

The `MWERootLayout` component defines the overall structure of the web application, including the navigation bar, main content, and global providers.

## API

- `RootLayoutProps`: `{ appContext: AppContext }`
- Accepts `children` for main content.

## Usage

- Use as the root layout for all pages. Integrates navigation and context providers.

## Accessibility (A11y)

- Semantic HTML structure (`<main>`, `<nav>`, etc.).

## Molitio Contract

- Must include `data-molitio-id="ui-layout"` (to be added in future iterations).

## Future Directions

- Add support for modals, sidebars, and dynamic content regions.
- Theming and layout variants.

---

_Last updated: 16 June 2025_
