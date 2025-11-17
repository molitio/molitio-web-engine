# Plan: UI Nav Bar Component

## Overview

The UI Nav Bar (`NavBar` and `NavMenu`) provides the primary navigation for the application. It is accessible, responsive, and extensible.

## API

- `NavBarProps`: `{ headerText?: string }`
- `NavMenu` uses navigation context (Jotai atom) for menu items.

## Usage

- Use for top-level navigation in the app. Supports selection state and icons.

## Accessibility (A11y)

- Navigation is rendered as a `<nav>` element.
- Each item is a link with a label and icon.

## Molitio Contract

- Must include `data-molitio-id="ui-nav-bar"` (to be added in future iterations).

## Future Directions

- Add ARIA roles and keyboard navigation.
- Add support for dropdowns, user menus, and theming.

---

_Last updated: 16 June 2025_
