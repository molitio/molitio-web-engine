# Resource Hub API Containerization and Deployment

## Introduction

This document outlines the strategy for containerizing the Resource Hub API for local development and deploying it to a production environment on AWS using Kubernetes. The goal is to provide a clear, maintainable, and scalable approach.

## Local Development with Docker Compose

For local development, we utilize Docker Compose to orchestrate the necessary services. This setup allows developers to easily spin up a consistent environment that mirrors the production setup closely.

### Overview

The local development environment consists of two main services defined in the `docker-compose.yml` file:

1.  `resource-hub-db`: This service runs the MongoDB database.
2.  `resource-hub-api`: This service runs the NestJS-based Resource Hub API application.

### Docker Compose Configuration (`docker-compose.yml`)

The `docker-compose.yml` file orchestrates the build and runtime configuration of these services.

Key aspects of the configuration:

*   **`resource-hub-db` service:**
    *   Uses the `ResourceHubDB.Dockerfile` to build the database image.
    *   Exposes port `27017` for database connections.
    *   Mounts a volume (`resource-hub-db-volume`) to persist database data.
    *   Initializes the database with a root user and password defined in the `.env` file.
*   **`resource-hub-api` service:**
    *   Depends on the `resource-hub-db` service, ensuring the database is running before the API starts.
    *   Uses the `ResourceHubApi.Dockerfile` to build the API image.
    *   Exposes port `4000` for API requests.
    *   Reads environment variables from the `.env` file for configuration (e.g., database connection strings, API keys).

### Dockerfiles

*   **`ResourceHubDB.Dockerfile`:**
    *   Based on the official `mongo:5.0.26` image.
    *   Copies an initialization script (`user-init.sh`) to `/docker-entrypoint-initdb.d/`. This script is executed when the container starts for the first time, setting up the necessary users and database schemas.

*   **`ResourceHubApi.Dockerfile`:**
    *   This is a multi-stage Dockerfile.
    *   **Builder Stage:**
        *   Uses a `node:current-alpine3.19` image as the base.
        *   Copies the entire project context.
        *   Installs dependencies using `yarn install`.
        *   Installs `@nestjs/cli` globally.
        *   Builds the Resource Hub API application using `yarn build-resource-hub`.
    *   **Runtime Stage:**
        *   Uses a `node:current-alpine3.19` image as the base.
        *   Copies necessary files from the host (e.g., `.pnp.cjs`, `package.json`, `tsconfig.json`).
        *   Copies the built application artifacts and `.yarn` directory from the `builder` stage.
        *   Sets the `YARN_CACHE_FOLDER` environment variable.
        *   The `CMD` instruction starts the API using `yarn workspace @molitio/resource-hub-api start`.

### Running Locally

To run the environment locally:

1.  Ensure Docker Desktop is installed and running.
2.  Ensure you have a `.env` file in the root of the `molitio-web-engine` directory with the required environment variables (e.g., `MONGO_DB`, `MONGO_INITDB_ROOT_USERNAME`, `MONGO_INITDB_ROOT_PASSWORD`).
3.  Navigate to the root of the `molitio-web-engine` directory in your terminal.
4.  Run the command: `docker-compose up -d --build`
    *   `up`: Creates and starts the containers.
    *   `-d`: Runs the containers in detached mode.
    *   `--build`: Forces a rebuild of the images if the Dockerfiles or their context have changed.

The API will be accessible at `http://localhost:4000`, and the database will be running on port `27017`.

## Production Deployment Strategy on AWS with Kubernetes

This section outlines the conceptual strategy for deploying the Resource Hub API to a production environment on AWS using Amazon Elastic Kubernetes Service (EKS).

### Overview

The production deployment will leverage Kubernetes for orchestration, scalability, and resilience. Key AWS services will be integrated for a robust and managed environment.

### Core Components

1.  **Amazon EKS (Elastic Kubernetes Service):**
    *   Managed Kubernetes service that simplifies running Kubernetes on AWS.
    *   Will host the Resource Hub API and potentially other related microservices.

2.  **Amazon DocumentDB (with MongoDB compatibility) or MongoDB Atlas on AWS:**
    *   For the production database, a managed NoSQL database service is preferred over a self-managed MongoDB instance on EC2.
    *   Amazon DocumentDB offers MongoDB compatibility and integrates well with other AWS services.
    *   Alternatively, MongoDB Atlas provides a managed MongoDB service that can be hosted on AWS.
    *   This choice will depend on specific requirements for MongoDB version compatibility, features, and operational preferences.

3.  **Amazon ECR (Elastic Container Registry):**
    *   Docker images for the `resource-hub-api` will be built by a CI/CD pipeline and pushed to ECR.
    *   Kubernetes will pull images from ECR to deploy the API.

4.  **AWS Load Balancer Controller (formerly ALB Ingress Controller):**
    *   Will be used to expose the Resource Hub API to the internet via an Application Load Balancer (ALB).
    *   Provides SSL termination, path-based routing, and integration with AWS WAF for security.

5.  **Kubernetes Deployments and Services:**
    *   **Deployment:** Manages the desired state of the API application, including the number of replicas (pods), update strategy, and image version.
    *   **Service:** Provides a stable internal IP address and DNS name for the API pods, enabling communication within the Kubernetes cluster.
    *   **Horizontal Pod Autoscaler (HPA):** Automatically scales the number of API pods based on CPU utilization or custom metrics.

6.  **Configuration Management:**
    *   Kubernetes ConfigMaps and Secrets will be used to manage application configuration and sensitive data (e.g., database credentials, API keys).
    *   These will be populated by the CI/CD pipeline or a secrets management system like AWS Secrets Manager or HashiCorp Vault.

7.  **Logging and Monitoring:**
    *   **Amazon CloudWatch:** For collecting logs from Kubernetes pods and monitoring application and infrastructure metrics.
    *   **Prometheus and Grafana:** Can be deployed within the EKS cluster for more detailed application performance monitoring (APM) and custom dashboards, potentially federated to Amazon Managed Service for Prometheus and Amazon Managed Grafana.

8.  **CI/CD Pipeline (e.g., AWS CodePipeline, Jenkins, GitHub Actions):**
    *   Automates the build, test, and deployment process.
    *   Triggered by code commits to the repository.
    *   Builds Docker images, pushes them to ECR, and updates the Kubernetes deployments.

### Deployment Workflow (Conceptual)

1.  Developer pushes code changes to the Git repository.
2.  CI/CD pipeline is triggered.
3.  **Build Stage:**
    *   Code is checked out.
    *   Unit and integration tests are run.
    *   The `resource-hub-api` Docker image is built using the `ResourceHubApi.Dockerfile`.
    *   The image is tagged and pushed to Amazon ECR.
4.  **Deploy Stage (to Staging/Production EKS Cluster):**
    *   The Kubernetes deployment manifest for the `resource-hub-api` is updated with the new image tag.
    *   `kubectl apply` or a GitOps tool (like ArgoCD or Flux) applies the changes to the EKS cluster.
    *   Kubernetes performs a rolling update to deploy the new version of the API.
    *   Health checks ensure the new pods are healthy before traffic is shifted.

### Security Considerations

*   **Network Security:**
    *   VPC configuration with public and private subnets.
    *   Security Groups and Network ACLs to control traffic flow.
    *   AWS WAF integrated with ALB for protection against common web exploits.
*   **IAM Roles for Service Accounts (IRSA):**
    *   Granting fine-grained permissions to Kubernetes pods to access AWS services (e.g., DocumentDB, S3, Secrets Manager) without needing to manage long-lived AWS credentials directly in the pods.
*   **Secrets Management:**
    *   Using AWS Secrets Manager or HashiCorp Vault for storing and injecting sensitive information.
*   **Image Scanning:**
    *   Scanning Docker images in ECR for vulnerabilities.

### Future Considerations (PoC and Beyond)

*   **Service Mesh (e.g., Istio, Linkerd):** For advanced traffic management, observability, and security between microservices.
*   **GitOps:** Using tools like ArgoCD or Flux for declarative, Git-based continuous delivery to Kubernetes.
*   **Cost Optimization:** Monitoring resource utilization and implementing strategies like EC2 Spot Instances for worker nodes (if applicable) or right-sizing instances.

This strategy provides a baseline for deploying the Resource Hub API to AWS using Kubernetes. It will evolve as the project matures and specific requirements become clearer.
