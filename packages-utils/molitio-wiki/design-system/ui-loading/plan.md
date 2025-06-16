# Plan: UI Loading Component

## Overview
The `Loading` component provides a simple loading indicator. This plan is in lockstep with the current implementation in `ui-core`.

## Goals
- Indicate loading state in the UI.
- Adhere to SOLID principles (Single Responsibility, Open/Closed).

## API (Current)
- No props.

## Structure
- `<div>` with loading text and styles.

## Accessibility (A11y)
- (Future) Add ARIA live region for screen readers.

## Molitio Contract
- Must include `data-molitio-id="ui-loading"` (to be added in future iterations).

## Testing Plan
- **Rendering:** Renders loading indicator.
- **Accessibility:** (Planned) ARIA live region.
- **Molitio Contract:** (Planned) Enforces `data-molitio-id`.

## SOLID Principles
- **Single Responsibility:** Loading only displays loading state.
- **Open/Closed:** Can be extended with new props or styles without modifying core logic.

## Future Directions
- Add spinner or animation.
- Add ARIA live region for accessibility.

---

_Last updated: 16 June 2025_
