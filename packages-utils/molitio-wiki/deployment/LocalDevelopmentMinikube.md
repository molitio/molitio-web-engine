# Local Development with Minikube (Kubernetes)

This guide describes how to set up and run the Molitio Web Engine—including all containerized apps and services—locally using Minikube and Kubernetes. This is the canonical approach for local development and testing.

## Overview

Minikube provides a local Kubernetes cluster for running all Molitio services, including:
- **Resource Hub API** (NestJS)
- **Resource Hub Database** (MongoDB)
- **Resource Hub Gateway** (Nginx)
- **All `apps-ui` applications** (containerized Next.js apps)

> **Note:** Docker Compose is deprecated and should not be used for local development.

## Prerequisites
- [Minikube](https://minikube.sigs.k8s.io/docs/) installed and running
- [kubectl](https://kubernetes.io/docs/tasks/tools/) installed
- Docker (for building images, if not using Minikube's Docker)
- Yarn, corepack, and other repo prerequisites (see [GettingStarted.md](../development/GettingStarted.md))

## Setup Steps

1. **Start Minikube:**
   ```sh
   minikube start
   ```
2. **Build Docker images for all services:**
   - Use Minikube's Docker daemon:
     ```sh
     eval $(minikube docker-env)
     ```
   - Build images for all backend and frontend apps (see each app's README or use a monorepo build script):
     ```sh
     # Example for Resource Hub API
     docker build -f ResourceHubApi.Dockerfile -t resource-hub-api:dev .
     # Example for a UI app
     docker build -f apps-ui/john-glenn-ui/Dockerfile -t john-glenn-ui:dev ./apps-ui/john-glenn-ui
     # Repeat for all apps
     ```
3. **Apply Kubernetes manifests:**
   - Navigate to the deployment manifests (see `/deployment/minikube/` or `/deployment/k8s/`).
   - Apply all manifests:
     ```sh
     kubectl apply -f deployment/minikube/
     # or for all manifests in a directory
     kubectl apply -f deployment/k8s/
     ```
4. **Accessing Services:**
   - Use `kubectl get svc` to find service URLs.
   - For NodePort services, use `minikube service <service-name>` to open in your browser.
   - UI apps and APIs will be available at the ports/services defined in the manifests.

## Stopping and Cleaning Up
To stop Minikube:
```sh
minikube stop
```
To delete the cluster:
```sh
minikube delete
```

## Troubleshooting
- Use `kubectl get pods`, `kubectl logs <pod>`, and `kubectl describe <pod>` for debugging.
- Ensure all images are built and available in the Minikube Docker environment.
- For more, see [Kubernetes troubleshooting docs](https://kubernetes.io/docs/tasks/debug/).

## References
- [Getting Started](../development/GettingStarted.md)
- [Deployment Directory](../deployment/)
- [CONTRIBUTING.md](../../../CONTRIBUTING.md)

---

This is the canonical workflow for local development and testing of the Molitio Web Engine.
