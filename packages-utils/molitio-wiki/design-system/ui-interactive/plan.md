# Plan: UI Interactive Components

## Overview
The UI Interactive components provide reusable primitives for user interaction, starting with the Button. This plan is in lockstep with the current implementation in `ui-core`.

## Goals
- Provide accessible, reusable interaction primitives (starting with Button).
- Ensure all components are keyboard and screen reader accessible.
- Adhere to SOLID principles (Single Responsibility, Open/Closed).

## API (Current)
- `ButtonProps`: `{ children, ... }` (see implementation for details)

## Structure
- `Button`: Styled button element for primary actions.

## Accessibility (A11y)
- Button is a native `<button>` element.
- (Future) Add ARIA roles, focus management, and variants.

## Molitio Contract
- Must include `data-molitio-id="ui-button"` (to be added in future iterations).

## Testing Plan
- **Rendering:** Renders with various children and props.
- **Interaction:** Responds to user input and events.
- **Accessibility:** (Planned) Passes aXe or similar checks.
- **Molitio Contract:** (Planned) Enforces `data-molitio-id`.

## SOLID Principles
- **Single Responsibility:** Button only handles rendering and basic interaction.
- **Open/Closed:** Button can be extended with new props or styles without modifying core logic.

## Future Directions
- Add more interaction primitives (modals, forms, dropdowns, etc.).
- Add theming and style variants.
- Expand accessibility features.

---

_Last updated: 16 June 2025_
