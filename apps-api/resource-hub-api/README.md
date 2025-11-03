# Resource Hub API

**Work in Progress – API and documentation are actively evolving.**

## Overview

Resource Hub API is a backend service for the Molitio Web Engine, built with [NestJS](https://nestjs.com/) and TypeScript. It provides business logic and data operations for the platform, exposing endpoints for data management and retrieval. The API communicates with a MongoDB database and is designed for scalable, containerized deployment.

## Features

- RESTful and gRPC endpoints for resource management
- MongoDB integration for data persistence
- Modular, scalable architecture
- Containerized for local development and production
- Designed for Kubernetes deployment on AWS (EKS)

## Project Status

This service is under active development. Features, endpoints, and deployment strategies may change. See [ResourceHubApi.md](../../molitio-wiki/development/ResourceHubApi.md) for the latest architecture and deployment details.

## Local Development

Local development uses Docker Compose to orchestrate the API, database, and (planned) UI services. See the root [`docker-compose.yml`](../../docker-compose.yml) for configuration.

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- `.env` file in the project root with required environment variables:
    - `MONGO_DB`, `MONGO_INITDB_ROOT_USERNAME`, `MONGO_INITDB_ROOT_PASSWORD`, etc.

### Start Services

```bash
docker-compose up -d --build
```

API: [http://localhost:4000](http://localhost:4000)
MongoDB: `localhost:27017`

## Production Deployment

Production deployment targets AWS EKS (Kubernetes). Key components:

- **Amazon EKS**: Managed Kubernetes cluster
- **Amazon DocumentDB** or **MongoDB Atlas**: Managed database
- **Amazon ECR**: Container registry for Docker images
- **AWS Load Balancer Controller**: Ingress and SSL termination
- **ConfigMaps/Secrets**: Configuration and sensitive data management
- **CloudWatch, Prometheus, Grafana**: Logging and monitoring
- **CI/CD Pipeline**: Automated build, test, and deployment

See [ResourceHubApi.md](../../molitio-wiki/development/ResourceHubApi.md) for a detailed deployment strategy.

## Testing

Run unit and e2e tests:

```bash
yarn test
yarn test:e2e
yarn test:cov
```

## Contributing

Contributions are welcome! See [`CONTRIBUTING.md`](../../CONTRIBUTING.md) for guidelines.

## License

This project is [MIT licensed](../../LICENSE).
