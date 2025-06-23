# Getting Started with Molitio Web Engine

Welcome to the Molitio Web Engine! This guide will help you set up your local development environment and understand the core concepts for contributing and deploying.

## Prerequisites
- **Linux/macOS recommended.** On Windows, use WSL 2 with Ubuntu.
- **Minikube** (for local Kubernetes development)
- **Yarn (v4+)** and **corepack**

## Repository Setup
1. **Clone the repository** into your development directory.
2. Enable corepack (one-time):
   ```sh
   corepack enable
   ```
3. Set Yarn version (one-time):
   ```sh
   yarn set version 4.1.1
   ```
4. Bootstrap the monorepo:
   ```sh
   yarn bootstrap
   ```
5. Install dependencies:
   ```sh
   yarn ci:install
   ```
6. Build the project:
   ```sh
   yarn build
   ```
7. Start the development server (with HMR):
   ```sh
   yarn dev
   ```

## Local Kubernetes (Minikube)
- To run services in a local Kubernetes cluster:
  1. Start Minikube:
     ```sh
     minikube start
     ```
  2. Deploy services. See [`/deployment/minikube/README.md`](../deployment/minikube/README.md) for full instructions.
  3. Use `kubectl` to manage and inspect pods/services.

## Useful Commands
- Install dependencies after changes:
  ```sh
  yarn i
  ```
- Run tests in watch mode:
  ```sh
  yarn test:watch
  ```

## Documentation References
- **Development workflow:** See [`development-workflow.md`](development-workflow.md)
- **Component plans:** See [`../design-system/`](../design-system/) for up-to-date component documentation.
- **Deployment:** See [`../deployment/`](../deployment/) for cloud and local deployment guides (Minikube for local, Kubernetes for staging/production).
- **Contribution guidelines:** See [`../../../CONTRIBUTING.md`](../../../CONTRIBUTING.md)

## Developer Certificate of Origin
Commit sign-off may be required in the future to ensure code provenance.

[Developer Certificate of Origin](DeveloperCertificateOfOrigin.md)

