# Deployment Strategy

This section outlines the deployment strategies for the Molitio Web Engine components, focusing on orchestrating a local development environment via Docker Compose, while concurrently conceptualizing a Kubernetes deployment strategy. The Kubernetes strategy will include two environments: **staging-sandbox** and **production**. While much of the infrastructure is not implemented yet, this documentation provides the conceptual framework for these environments.

## Documentation Structure

- **[Local Development with Docker Compose](./LocalDevelopmentDockerCompose.md)**: Detailed guide on setting up and running the services locally using Docker Compose.
- **[Production Deployment on AWS EKS](./ProductionAWSEKS.md)**: Overview of the strategy for deploying to a Kubernetes cluster on AWS Elastic Kubernetes Service (EKS).

This documentation serves as a baseline and will be updated as our infrastructure evolves.