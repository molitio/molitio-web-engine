
# Molitio Web Engine - MVP Containerization and Deployment

## Overview

This document describes the MVP deployment strategy for the **Molitio Web Engine** using Docker Compose. The deployment targets a Virtual Private Cloud (VPC) environment and is automated via GitHub Actions. The focus is on a simple, production-ready stack for rapid delivery and validation.

## Services and Architecture

The MVP consists of the following services, all orchestrated by `docker-compose.yml`:

- **Resource Hub Database** (`resource-hub-db`): MongoDB database for data persistence.
- **Resource Hub API** (`resource-hub-api`): NestJS backend for business logic and data operations.
- **Sleeping Dragon UI** (`mwe-sleeping-dragon-ui`): Next.js server-side React application for the main user interface.
- **Friday UI** (`mwe-friday-ui`): Vite-based static site for the home page and static content.
- **Resource Hub Gateway** (`resource-hub-gateway`): NGINX-based application gateway that routes traffic to the appropriate UI and API services.

All services are defined and configured in the root `docker-compose.yml` file.

## Docker Compose Configuration

Key aspects of the configuration:

- **`resource-hub-db`**
    - Built from `ResourceHubDB.Dockerfile` (based on `mongo:7.0.5`).
    - Exposes port `27017`.
    - Persists data using a named Docker volume.
    - Initializes users and database via `user-init.sh`.

- **`resource-hub-api`**
    - Built from `ResourceHubApi.Dockerfile` (multi-stage Node.js build).
    - Exposes port `4000`.
    - Depends on the database service.
    - Uses environment variables from `.env` for configuration.

- **`mwe-sleeping-dragon-ui`**
    - Built from `ResourceHubUI.Dockerfile` (Next.js app).
    - Exposes port `3000`.
    - Depends on the API service.
    - Healthchecked via HTTP.

- **`mwe-friday-ui`**
    - Built from its own Vite app Dockerfile (not shown here, but referenced in the compose file as a static site build).
    - Output is mounted as a static volume for NGINX to serve.

- **`resource-hub-gateway`**
    - Built from `ResourceHubGateway.Dockerfile` (NGINX).
    - Exposes the public-facing port (configurable via `.env` as `NGINX_PORT`).
    - Routes traffic to the UIs and API, and serves static content from `mwe-friday-ui`.

## Environment Setup and Running

1. **Prerequisites:**
     - Docker and Docker Compose installed.
     - `.env` file in the project root with required variables (see `docker-compose.yml`).

2. **Build and Start Services:**
         - From the project root, you can use the provided npm scripts for convenience:
                 - **Incremental build and start:**
                     ```sh
                     yarn container-compose
                     ```
                     This will build only what has changed and start the containers in detached mode.
                 - **Full rebuild (clean and force recreate):**
                     ```sh
                     yarn container-rebuild
                     ```
                     This will stop and remove all containers, prune unused Docker resources, and fully rebuild and restart all services.

3. **Accessing Services:**
     - **API:** http://localhost:4000
     - **Sleeping Dragon UI:** http://localhost:3000
     - **Friday UI (static):** Served via the NGINX gateway on the configured port.
     - **Gateway:** http://localhost:${NGINX_PORT}

## CI/CD and Deployment

Deployment is automated using **GitHub Actions**. The workflow builds Docker images for all services and deploys them to a target VPC environment. The process includes:

## Summary

This MVP deployment strategy provides a simple, reproducible, and production-ready environment for the Molitio Web Engine using Docker Compose. It includes all core services, a static home page, and an NGINX gateway, and is fully automated via GitHub Actions for CI/CD. Kubernetes and other future infrastructure are out of scope for this MVP.
