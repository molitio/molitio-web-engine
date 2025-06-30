# Local Development with Minikube (Kubernetes)

This guide describes how to set up and run the Molitio Web Engine—including all containerized apps and services—locally using Minikube and Kubernetes. This is the canonical approach for local development and testing.

## Overview

Minikube provides a local Kubernetes cluster for running all Molitio services, including:
- **Resource Hub API** (NestJS)
- **Resource Hub Database** (MongoDB)
- **Resource Hub Gateway** (Nginx)
- **All `apps-ui` applications** (containerized Next.js apps)

## Prerequisites
- [Minikube](https://minikube.sigs.k8s.io/docs/) installed and running
- [kubectl](https://kubernetes.io/docs/tasks/tools/) installed
- Yarn, corepack, and other repo prerequisites (see [GettingStarted.md](../development/GettingStarted.md))

## Recommended Minikube Start Command

For Apple Silicon or Intel Mac, to limit resource usage and avoid Docker Desktop:

```sh
minikube start --container-runtime=containerd --driver=qemu --disk-size=12g --memory=4096 --namespace=dev
```
- `--disk-size=12g` sets the VM disk to 12GB
- `--memory=4096` sets the VM RAM to 4GB
- `--driver=qemu` avoids Docker Desktop and uses a lightweight VM
- `--namespace=dev` sets the default namespace to dev

## Setup Steps

1. **Start Minikube:**
   (see above for recommended command)
2. **Build Docker images for all services:**
   - Use Minikube's image build (no Docker Desktop required):
     ```sh
     minikube image build -t resource-hub-ui:dev -f ResourceHubUI.Dockerfile .
     ```
     # For other images, repeat as needed, changing the tag and Dockerfile as appropriate.
     # This command works with Minikube using the QEMU driver and containerd runtime.
     # The image will be available directly to your Minikube cluster.
3. **Apply Kubernetes manifests:**

   - Create the dev namespace if it doesn't exist:
     ```sh
     kubectl create namespace dev
     ```
   - Apply all manifests:
     ```sh    
     kubectl apply -k k8s/overlays/dev
     # or for all manifests in a directory
     kubectl apply -f deployment/k8s/
     ```
4. **Accessing Services:**
   - Use `kubectl get svc` to find service URLs.
   - For NodePort services, use `minikube service <service-name>` to open in your browser.
   - UI apps and APIs will be available at the ports/services defined in the manifests (e.g., Resource Hub UI at `http://<minikube-ip>:30080`).

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
- Ensure all images are built and available in the Minikube image store.
- For more, see [Kubernetes troubleshooting docs](https://kubernetes.io/docs/tasks/debug/).

## References
- [Getting Started](../development/GettingStarted.md)
- [Deployment Directory](../deployment/)
- [CONTRIBUTING.md](../../../CONTRIBUTING.md)
- [Resource Hub UI Minikube Dev Guide](../../../k8s/README-dev-minikube.md)

---

## Environment Separation in Kubernetes

To support different environments (development, staging, production), Kubernetes provides several mechanisms:

### 1. Namespaces
- Use separate namespaces for each environment.
- Example:
  ```sh
  kubectl create namespace dev
  kubectl create namespace prod
  ```
- Deploy resources into the appropriate namespace using `-n <namespace>` or by specifying `namespace:` in your manifests.

### 2. ConfigMaps and Secrets
- Store environment-specific configuration in `ConfigMap` and `Secret` resources.
- Example `ConfigMap` for dev:
  ```yaml
  apiVersion: v1
  kind: ConfigMap
  metadata:
    name: resource-hub-ui-config
    namespace: dev
  data:
    NODE_ENV: development
    API_URL: http://dev-api:3000
  ```
- Reference these in your Deployment:
  ```yaml
  envFrom:
    - configMapRef:
        name: resource-hub-ui-config
  ```

### 3. Kustomize Structure Example
Organize overlays for each environment:
```
k8s/
  base/
    deployment.yaml
    service.yaml
    configmap.yaml
  overlays/
    dev/
      kustomization.yaml
      configmap-dev.yaml
    prod/
      kustomization.yaml
      configmap-prod.yaml
```
- Use `kubectl apply -k k8s/overlays/dev` for dev, and `k8s/overlays/prod` for prod.

### 4. Helm Structure Example
Organize values for each environment:
```
helm/
  resource-hub-ui/
    Chart.yaml
    templates/
      deployment.yaml
      service.yaml
      configmap.yaml
    values.yaml
    values-dev.yaml
    values-prod.yaml
```
- Install with `helm install ... -f values-dev.yaml` for dev, or `-f values-prod.yaml` for prod.

### 5. Documentation Best Practices
- Clearly document which manifests, mounts, and settings are for dev (hot reload, code mounts) and which are for prod (static build, no mounts).
- Use comments and README sections to highlight environment-specific instructions.

---

## Kustomize Directory Structure and Usage

The `k8s` directory uses Kustomize overlays for environment separation (dev, staging, prod):

- `base/` contains common deployment, service, and configmap files.
- `overlays/dev/`, `overlays/staging/`, and `overlays/prod/` each have their own `kustomization.yaml` and environment-specific patches.

**Important:**
- Always run Kustomize commands from the `k8s` directory so that relative paths resolve correctly:
  ```sh
  cd k8s
  kubectl apply -k overlays/dev
  # or overlays/staging, overlays/prod
  ```
- The overlays use the new `patches` syntax for compatibility with recent Kustomize versions.
- If you see a deprecation warning for `patchesStrategicMerge`, update your overlays as shown above.

---

This approach ensures clean separation between environments and makes it easy to manage configuration and deployments for dev, staging, and production.

---

This is the canonical workflow for local development and testing of the Molitio Web Engine.
