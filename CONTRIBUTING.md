# Contributing to Molitio Web Engine

Welcome to the Molitio open-source project! This guide outlines the core methodologies, workflows, and standards that all contributors must follow to ensure a robust, scalable, and maintainable ecosystem.

## Table of Contents
1. [Core Methodologies](#core-methodologies)
    - [The 12-Factor App](#the-12-factor-app)
    - [The Four Pillars of Component Testing](#the-four-pillars-of-component-testing)
    - [The "Define -> Implement -> Collaborate" Workflow](#the-define-implement-collaborate-workflow)
2. [Repository Structure](#repository-structure)
3. [Contribution Workflow](#contribution-workflow)
4. [Coding Standards](#coding-standards)
5. [Testing Standards](#testing-standards)
6. [Documentation Standards](#documentation-standards)
7. [Community Standards](#community-standards)
8. [Branching Strategy and Naming Conventions](#branching-strategy-and-naming-conventions)

---

## Core Methodologies

### The 12-Factor App
We strictly adhere to the [12-Factor App methodology](https://12factor.net/):
1. **Codebase:** One codebase tracked in version control, many deploys.
2. **Dependencies:** Explicitly declare and isolate dependencies.
3. **Config:** Store config in the environment, never in code.
4. **Backing Services:** Treat backing services as attached resources.
5. **Build, Release, Run:** Strictly separate build and run stages.
6. **Processes:** Execute the app as one or more stateless processes.
7. **Port Binding:** Export services via port binding.
8. **Concurrency:** Scale out via the process model.
9. **Disposability:** Maximize robustness with fast startup and graceful shutdown.
10. **Dev/Prod Parity:** Keep development, staging, and production as similar as possible.
11. **Logs:** Treat logs as event streams.
12. **Admin Processes:** Run admin/management tasks as one-off processes.

### The Four Pillars of Component Testing
All UI components must be tested against these pillars:
1. **Rendering:** Components must render correctly with various props.
2. **Interaction:** Components must respond correctly to user events.
3. **Accessibility (A11y):** Components must be usable by everyone.
4. **Molitio Contract:** Components must follow project-specific rules (e.g., `data-molitio-id`).

### The "Define -> Implement -> Collaborate" Workflow
1. **Define:** Plan features/components in structured markdown (`plan.md`) in `packages-utils/molitio-wiki/design-system/`.
2. **Implement:** Write code and tests based on the plan.
3. **Collaborate:** Use the AI assistant to review and ensure adherence to standards.

## Repository Structure
- **`CONTRIBUTING.md`:** This file. The highest authority on development practices.
- **`packages-utils/molitio-wiki/design-system/`:** Feature/component plans (`plan.md`).
- **`packages/ui/components/`:** React UI components (reference for coding style).

## Contribution Workflow
1. Fork the repository and create a feature branch.
2. Write or update a `plan.md` for new features/components.
3. Implement code and tests following the plan and standards.
4. Ensure all code passes linting and tests.
5. Submit a pull request for review.

## Coding Standards
- Follow patterns in `packages/ui/components/`.
- Use environment variables for all configuration (see Factor III).
- Keep code modular, stateless, and maintainable.

## Testing Standards
- All components must be tested for rendering, interaction, accessibility, and Molitio contract.
- Use established test patterns and tools.

## Documentation Standards
- All features/components must have a `plan.md`.
- Update documentation as features evolve.

## Community Standards
- Be respectful and collaborative.
- Review and provide constructive feedback.

## Branching Strategy and Naming Conventions

We use a structured git branching strategy to ensure clarity and traceability:

- **Feature branches:** `feature/<TICKET-ID>_<description>` or `feature/<TICKET-ID>-<description>`
  - Example: `feature/MWE-191_NextJS_UI_containerization`
- **Fix branches:** `fix/<TICKET-ID>-<description>`
  - Example: `fix/MWE-240-Nonce-breaking-apps-on-production-site`
- **Chore branches:** `chore/<TICKET-ID>_<description>`
  - Example: `chore/MWE-181_monorepo_refactor`
- **Release branches:** `releases/<package-name>` or `release`
  - Example: `releases/mwe-john-glenn-ui`
- **Documentation branches:** `documentation/<TICKET-ID>_<description>`
  - Example: `documentation/MWE-241_ResourceHub-containerization-planning`
- **Automation/Dependabot:** `dependabot/<...>`

**General rules:**
- Always use a relevant ticket/issue ID if available (e.g., `MWE-191`).
- Use lowercase and hyphens/underscores for readability.
- Keep branch names concise but descriptive.
- Start all new work from the latest `main` branch.

Add this to your workflow:
1. Pull the latest `main` branch before starting new work.
2. Create a branch using the conventions above.
3. Open a pull request to `main` when your work is ready for review.

---
For questions, refer to this file or ask the AI assistant for guidance.
