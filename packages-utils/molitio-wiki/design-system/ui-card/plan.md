# Plan: UI Card Component

## Overview
The `Card` component is a reusable UI element for displaying an image, title, and description. It is designed to be simple, accessible, and easily styled.

## API
- `CardProps`: `{ data: CardData }`
- `CardData`: `{ title, imageUrl, imageAlt, description }`

## Usage
- Use for displaying content cards with image, title, and description.

## Accessibility (A11y)
- `alt` text is required for images.
- Semantic HTML structure.

## Molitio Contract
- All instances must include a `data-molitio-id="ui-card"` attribute (to be added in future iterations).

## Future Directions
- Add support for actions (buttons, links).
- Add theming and style variants.
- Integrate with design tokens.

---

_Last updated: 16 June 2025_
