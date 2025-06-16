# Plan: UI Layout Component

## Overview
The `MWERootLayout` component defines the overall structure of the web application, including the navigation bar, main content, and global providers. This plan is in lockstep with the current implementation in `ui-core`.

## Goals
- Provide a flexible, reusable structure for all pages (starting with molitio.com landing page).
- Support responsive design for all device sizes.
- Integrate navigation and context providers.
- Adhere to SOLID principles (Single Responsibility, Open/Closed).

## API (Current)
- `RootLayoutProps`: `{ appContext: AppContext }`
- Accepts `children` for main content.

## Structure
- `<html>` and `<body>` wrappers with theme and layout classes.
- `<NavBar />` for navigation.
- `<main>` for page content, wrapped in context providers.
- `<EmailClient />` for global email integration.

## Accessibility (A11y)
- Semantic HTML structure (`<main>`, `<nav>`, etc.).
- (Future) Add ARIA landmarks and roles.

## Molitio Contract
- Must include `data-molitio-id="ui-layout"` (to be added in future iterations).

## Testing Plan
- **Rendering:** Renders with various children and app contexts.
- **Accessibility:** (Planned) Landmarks and structure pass aXe or similar checks.
- **Molitio Contract:** (Planned) Enforces `data-molitio-id`.

## SOLID Principles
- **Single Responsibility:** Layout only manages page structure and context.
- **Open/Closed:** New providers or layout regions can be added without modifying core logic.

## Future Directions
- Add support for modals, sidebars, and dynamic content regions.
- Theming and layout variants.
- Expand accessibility features.

---

_Last updated: 16 June 2025_
