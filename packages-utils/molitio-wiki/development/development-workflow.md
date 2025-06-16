# Molitio Web Engine Development Workflows

## Persisted AI-Assisted Workflow Configuration

This document defines the canonical, persisted configuration for the Molitio web development workflow, including:
- Test-Driven Development (TDD) with the Red-Green-Refactor cycle
- Branching and naming conventions
- The role of the wiki and `CONTRIBUTING.md` as the source of truth
- Documentation must always be in lockstep with implementation (see design-system/*/plan.md)

## Test-Driven Development (TDD)
- Always start with a failing test (Red)
- Write the simplest code to pass the test (Green)
- Refactor for quality and maintainability (Refactor)
- Repeat for every feature and bugfix
- **AI agents and collaborators must follow this cycle for all work.**

## Branching Strategy
- See `CONTRIBUTING.md` for full details
- Use ticket IDs and descriptive names for all branches

## Documentation and Persistence
- All workflows, standards, and feature plans must be documented in the wiki (`packages-utils/molitio-wiki/design-system/`) and in `CONTRIBUTING.md`
- The wiki is the living, persisted documentation layer for all contributors and AI assistants
- Update both the wiki and `CONTRIBUTING.md` whenever workflows or standards change
- **Design system plan docs must always reflect the current implementation.** When a component changes, update its `plan.md` immediately.
- **Component plan docs must only describe the component's functionality and usage. Architectural principles are defined in `CONTRIBUTING.md` and this document.**

## AI Assistant Usage
- Use Copilot and other AI tools to:
  - Suggest tests first
  - Maintain the TDD cycle
  - Proactively recommend refactoring
  - Reference the wiki and `CONTRIBUTING.md` for all standards and workflows

## SOLID Principles
- All components and plans should adhere to SOLID principles where possible, especially Single Responsibility and Open/Closed. These principles are defined in `CONTRIBUTING.md` and referenced here for clarity.

---

_Last updated: 16 June 2025_
