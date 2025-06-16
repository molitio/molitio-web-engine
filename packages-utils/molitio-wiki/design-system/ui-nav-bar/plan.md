# Plan: UI Nav Bar Component

## Overview
The UI Nav Bar (`NavBar` and `NavMenu`) provides the primary navigation for the application. It is designed to be accessible, responsive, and easily extensible as the site grows. This plan is in lockstep with the current implementation in `ui-core`.

## Goals
- Enable intuitive navigation for molitio.com and future pages.
- Ensure accessibility (keyboard navigation, ARIA roles).
- Support for mobile and desktop layouts.
- Adhere to SOLID principles, especially Single Responsibility and Open/Closed.

## API (Current)
- `NavBarProps`: `{ headerText?: string }`
- `NavMenu` uses navigation context (Jotai atom) for menu items.

## Structure
- `NavBar`: Sticky section containing the navigation menu.
- `NavMenu`: Renders navigation items from context, supports selection state.

## Accessibility (A11y)
- Navigation is rendered as a `<nav>` element.
- Each item is a link with a label and icon.
- (Future) Add ARIA roles and keyboard navigation support.

## Molitio Contract
- Must include `data-molitio-id="ui-nav-bar"` (to be added in future iterations).

## Testing Plan
- **Rendering:** Renders with various navigation item sets.
- **Interaction:** Supports mouse navigation and selection state.
- **Accessibility:** (Planned) Keyboard navigation and ARIA roles.
- **Molitio Contract:** (Planned) Enforces `data-molitio-id`.

## SOLID Principles
- **Single Responsibility:** NavBar and NavMenu are focused on navigation only.
- **Open/Closed:** New navigation items can be added via context without modifying the component code.

## Future Directions
- Add ARIA roles and keyboard navigation.
- Add support for dropdowns, user menus, and theming.
- Integrate with routing and authentication.

---

_Last updated: 16 June 2025_
