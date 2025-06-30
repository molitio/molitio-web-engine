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

## Setting up SSH Key for GitHub
To securely connect to GitHub, you should generate an SSH key and add it to your SSH agent:

1. **Check for existing SSH keys:**
   ```sh
   ls -al ~/.ssh
   ```
   Look for files named `id_ed25519` or `id_rsa`. If you don't have one, continue below.

2. **Generate a new SSH key:**
   ```sh
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   - If you see an error about `ed25519` not being supported, use `-t rsa -b 4096` instead.
   - When prompted, you can press Enter to accept the default file location and optionally set a passphrase.

3. **Start the SSH agent in the background:**
   ```sh
   eval "$(ssh-agent -s)"
   ```

4. **Add your SSH private key to the agent:**
   ```sh
   ssh-add ~/.ssh/id_ed25519
   ```
   - If you used a different filename, adjust the path accordingly.

5. **Copy your public key to your clipboard:**
   ```sh
   pbcopy < ~/.ssh/id_ed25519.pub
   ```
   - If `pbcopy` is not available, open the file and copy its contents manually.

6. **Add the SSH key to your GitHub account:**
   - Go to [GitHub SSH keys settings](https://github.com/settings/keys)
   - Click **New SSH key**, paste your key, and save.

For more details, see the [GitHub SSH guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

## Documentation References
- **Development workflow:** See [`development-workflow.md`](development-workflow.md)
- **Component plans:** See [`../design-system/`](../design-system/) for up-to-date component documentation.
- **Deployment:** See [`../deployment/`](../deployment/) for cloud and local deployment guides (Minikube for local, Kubernetes for staging/production).
- **Contribution guidelines:** See [`../../../CONTRIBUTING.md`](../../../CONTRIBUTING.md)

## Developer Certificate of Origin
Commit sign-off may be required in the future to ensure code provenance.

[Developer Certificate of Origin](DeveloperCertificateOfOrigin.md)

