# Deployment Strategy //NOT IMPLEMENTED YET

This section outlines the deployment strategies for the Molitio Web Engine, focusing on a Kubernetes-first approach for all environments. Docker Compose is deprecated and no longer supported.

## Environments
- **Local Development:** Use [Minikube](https://minikube.sigs.k8s.io/docs/) to run a local Kubernetes cluster for all containerized apps and services. See [Local Development with Minikube](./LocalDevelopmentMinikube.md) for setup instructions.
- **Staging & Production:** Deploy to managed Kubernetes clusters (e.g., AWS EKS) using the same manifests and container images as local development.

## Documentation Structure
- **[Local Development with Minikube](./LocalDevelopmentMinikube.md):** Step-by-step guide for running all services locally in Kubernetes.
- **[Production Deployment on AWS EKS](./ProductionAWSEKS.md):** Overview and instructions for deploying to AWS Elastic Kubernetes Service.

## Key Points
- All apps (including `apps-ui` Next.js apps) are containerized and deployed via Kubernetes manifests.
- The same manifests and images are used for local, staging, and production environments, ensuring parity and reliability.
- For onboarding and setup, see [GettingStarted.md](../development/GettingStarted.md).

This documentation is the canonical source for deployment strategy and will be updated as infrastructure evolves.