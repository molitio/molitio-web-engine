# Production Deployment on AWS EKS //NOT IMPLEMENTED YET

This document outlines the strategy for deploying the Resource Hub API and related services to a production environment on AWS Elastic Kubernetes Service (EKS).

## Overview

Kubernetes (K8s) is an open-source system for automating deployment, scaling, and management of containerized applications. AWS EKS is a managed Kubernetes service that makes it easier to run Kubernetes on AWS without needing to install and operate your own Kubernetes control plane.

Our production deployment strategy focuses on:

- **High Availability**: Ensuring the application remains operational even if some components fail.
- **Scalability**: Allowing the application to handle varying loads by scaling resources up or down.
- **Security**: Implementing best practices for securing the application and infrastructure.
- **Observability**: Providing mechanisms for monitoring, logging, and tracing.
- **CI/CD**: Automating the build, test, and deployment process.

## Core Components in EKS

1.  **EKS Cluster**: The foundation of our Kubernetes environment on AWS.
2.  **Worker Nodes**: EC2 instances that run our application Pods. We'll use managed node groups for easier management and auto-scaling.
3.  **Pods**: The smallest deployable units in Kubernetes, hosting our application containers (Resource Hub API, Gateway).
4.  **Deployments**: Manage stateless applications like the Resource Hub API and Gateway, handling rolling updates and rollbacks.
5.  **StatefulSets**: Manage stateful applications like our PostgreSQL database (though for production, AWS RDS is often preferred for managed database services).
6.  **Services**: Provide stable network endpoints (IP addresses and DNS names) to access Pods (e.g., LoadBalancer Service for external access, ClusterIP for internal communication).
7.  **Ingress**: Manages external access to the services in the cluster, typically HTTP and HTTPS. We'll use an AWS Load Balancer Controller (formerly ALB Ingress Controller) to provision Application Load Balancers (ALBs).
8.  **ConfigMaps & Secrets**: Manage application configuration and sensitive data.
9.  **Persistent Volumes (PVs) & Persistent Volume Claims (PVCs)**: Manage persistent storage, likely using Amazon EBS for database storage if not using RDS.
10. **Container Registry**: Amazon Elastic Container Registry (ECR) to store our Docker images.

## Deployment Strategy Steps (Conceptual)

1.  **Containerization**: Docker images for the Resource Hub API, Gateway, and potentially a custom database image (if not using RDS) are built and pushed to ECR.
    - API Image: Optimized for production (e.g., multi-stage builds, non-root user).
    - Gateway Image: Nginx configured for production traffic, SSL termination (potentially at the ALB level).

2.  **Infrastructure as Code (IaC)**: Tools like Terraform or AWS CloudFormation will be used to define and provision the EKS cluster, VPC, subnets, IAM roles, security groups, and other AWS resources.

3.  **Kubernetes Manifests**: YAML files defining all K8s resources (Deployments, StatefulSets, Services, Ingress, ConfigMaps, Secrets, etc.). These will be version-controlled.
    - **Resource Hub API Deployment**: Defines replicas, update strategy, container image from ECR, environment variables (from ConfigMaps/Secrets), resource requests/limits, readiness/liveness probes.
    - **Database**: If self-managed, a StatefulSet for PostgreSQL with PVCs for persistent storage. **Recommendation**: Use Amazon RDS for PostgreSQL for better manageability, backups, and HA in production.
    - **Gateway Deployment**: Nginx deployment, configured to route traffic to the API service.
    - **Services**: ClusterIP services for internal communication (e.g., API to DB), and a LoadBalancer or NodePort service exposed via Ingress for external traffic.
    - **Ingress**: Configured with AWS Load Balancer Controller to create an ALB, manage SSL certificates (via AWS Certificate Manager - ACM), and route traffic to the Gateway service.

4.  **Configuration Management**:
    - **ConfigMaps**: For non-sensitive configuration (e.g., API URLs, logging levels).
    - **Secrets**: For sensitive data (e.g., database credentials, API keys). Kubernetes Secrets should be integrated with a secrets management solution like AWS Secrets Manager or HashiCorp Vault for enhanced security.

5.  **Networking**:
    - VPC configured with public and private subnets for the EKS cluster.
    - Security Groups to control traffic flow between components (e.g., ALB to Gateway Pods, API Pods to RDS).
    - ALB for ingress, handling SSL termination and path-based routing.

6.  **Scalability**:
    - **Horizontal Pod Autoscaler (HPA)**: Automatically scales the number of API and Gateway Pods based on CPU/memory utilization or custom metrics.
    - **Cluster Autoscaler**: Automatically adjusts the number of worker nodes in the EKS cluster.

7.  **Observability**:
    - **Logging**: Fluentd or Fluent Bit to collect logs from containers and send them to Amazon CloudWatch Logs or an ELK stack (Elasticsearch, Logstash, Kibana).
    - **Monitoring**: Prometheus and Grafana for metrics collection and visualization, or Amazon CloudWatch Container Insights.
    - **Tracing**: AWS X-Ray or Jaeger for distributed tracing to understand request flows.

8.  **CI/CD Pipeline**: (e.g., Jenkins, GitLab CI, AWS CodePipeline/CodeBuild/CodeDeploy)
    - Triggered on code commits.
    - Builds Docker images and pushes them to ECR.
    - Updates Kubernetes manifests (e.g., image tags).
    - Applies manifests to the EKS cluster using `kubectl apply` or a GitOps tool like ArgoCD or Flux.
    - Runs automated tests.

## Security Considerations

- **IAM Roles for Service Accounts (IRSA)**: Assign fine-grained IAM permissions to Pods.
- **Network Policies**: Control traffic flow between Pods within the cluster.
- **Image Scanning**: Scan container images for vulnerabilities (e.g., Amazon ECR scanning, Trivy).
- **Regular Updates**: Keep Kubernetes versions, worker node AMIs, and container images updated.
- **Secrets Management**: Securely manage and inject secrets.

## Future Considerations / PoC Sandbox

- **Service Mesh (e.g., Istio, Linkerd)**: For advanced traffic management, security, and observability.
- **GitOps**: Using Git as the single source of truth for declarative infrastructure and applications.
- **Cost Optimization**: Right-sizing instances, using Spot Instances for worker nodes where appropriate.

This strategy provides a robust foundation for deploying the Resource Hub API to production on AWS EKS. The PoC sandbox will focus on implementing a subset of these components to validate the approach and gather learnings before a full-scale production rollout.
