# Plan: UI Footer Component

## Overview
The `Footer` component displays site-wide footer content, such as license or copyright information. This plan is in lockstep with the current implementation in `ui-core`.

## Goals
- Provide a consistent footer for all pages.
- Support custom license or copyright text.
- Adhere to SOLID principles (Single Responsibility, Open/Closed).

## API (Current)
- `FooterProps`: `{ licenceText?: string }`

## Structure
- `<footer>` element with container and text.

## Accessibility (A11y)
- Semantic `<footer>` element.

## Molitio Contract
- Must include `data-molitio-id="ui-footer"` (to be added in future iterations).

## Testing Plan
- **Rendering:** Renders with and without `licenceText`.
- **Accessibility:** Semantic HTML.
- **Molitio Contract:** (Planned) Enforces `data-molitio-id`.

## SOLID Principles
- **Single Responsibility:** Footer only displays footer content.
- **Open/Closed:** Can be extended with new props or styles without modifying core logic.

## Future Directions
- Add support for links, social icons, or additional content.
- Theming and style variants.

---

_Last updated: 16 June 2025_
