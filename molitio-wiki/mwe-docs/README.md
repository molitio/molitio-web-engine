# Molitio Design System Documentation

This directory contains the plan documents for all reusable UI components in the Molitio Web Engine. Each `plan.mdx` describes the component's intended functionality and usage for developers and users.


## Tailwind CSS Usage Philosophy

- **Tailwind CSS is the default styling solution for all UI components and layouts.**
- Use basic Tailwind utility classes for all styling by default. Avoid custom CSS unless absolutely necessary for advanced use cases.
- Prefer composable Tailwind class patterns and solutions for layout, spacing, color, and responsiveness.
- All code examples, prototypes, and new components should use Tailwind classes for styling.
- If a component requires custom styles, document the reason and approach in its `plan.mdx`.

## Documentation Structure
- **Architectural principles and workflow** are defined in the root `CONTRIBUTING.md` and `development-workflow.md`.
- **Component plan docs** (`plan.mdx`) must only describe the component's functionality and usage. Do not repeat architectural principles here.

## How to Use
- Update the relevant `plan.mdx` whenever a component changes.
- Reference `CONTRIBUTING.md` and `development-workflow.md` for architectural and workflow guidance.
- Treat these documents as the canonical work contract for all contributors and AI agents.
