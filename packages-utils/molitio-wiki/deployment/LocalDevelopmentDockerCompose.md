# Local Development with Docker Compose

This document describes how to set up and run the Resource Hub API and its dependencies locally using Docker Compose. This setup is intended for development and testing purposes.

## Overview

Docker Compose allows us to define and run multi-container Docker applications. Our local development environment will consist of the following services:

- **Resource Hub API**: The main NestJS application.
- **Resource Hub Database**: A MongoDB database instance for the API.
- **Resource Hub Gateway**: An Nginx instance acting as a reverse proxy for the API.

## Prerequisites

- Docker Desktop installed and running.

## Setup and Running

1.  **Navigate to the root of the `molitio-web-engine` repository.**
2.  **Examine the `docker-compose.yml` file:** This file defines the services, networks, and volumes for the local environment.
    *   It will specify how each service is built (referencing Dockerfiles like `ResourceHubApi.Dockerfile` and `ResourceHubDB.Dockerfile`) or which pre-built image to use.
    *   It will define environment variables, port mappings, and volume mounts necessary for each service to function correctly.
3.  **Build and start the containers:**
    ```bash
    docker-compose up --build
    ```
    The `--build` flag ensures that images are rebuilt if their Dockerfiles have changed.
4.  **Accessing Services:**
    *   The Resource Hub API will typically be accessible via the Resource Hub Gateway, e.g., `http://localhost:8080/api` (the exact port will be defined in `docker-compose.yml` and `nginx.conf`).
    *   The MongoDB database will be accessible to the API service on its internal Docker network name and port (e.g., `resource-hub-db:27017`).

## Dockerfiles

-   `ResourceHubApi.Dockerfile`: Defines the image for the Resource Hub API. It will typically:
    *   Start from a Node.js base image.
    *   Copy `package.json` and `package-lock.json` (or `yarn.lock`).
    *   Install dependencies.
    *   Copy the application source code.
    *   Build the application (e.g., `npm run build`).
    *   Expose the application port and define the command to start the application.
-   `ResourceHubDB.Dockerfile`: Defines the image for the PostgreSQL database. It may:
    *   Start from a official PostgreSQL image.
    *   Copy initialization scripts (like `db-init/user-init.sh`) to create users, databases, or schemas upon container startup.
-   The Resource Hub Gateway uses a standard Nginx image, configured via `nginx.conf` and potentially `security-headers.conf`, which are mounted into the container.

## Data Persistence

For the database, Docker volumes will be used to persist data across container restarts. This ensures that your development data is not lost when you stop and start the containers.

## Stopping the Environment

To stop the containers, run:

```bash
docker-compose down
```

This will stop and remove the containers. If you want to remove the volumes as well (deleting database data), you can use `docker-compose down -v`.

## Troubleshooting

-   Check container logs: `docker-compose logs <service_name>` (e.g., `docker-compose logs resource-hub-api`).
-   Ensure ports are not conflicting with other local services.
