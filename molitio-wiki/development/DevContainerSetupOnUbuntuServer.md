# Setting Up a Dev Container on Ubuntu Server

## Prerequisites
- An Ubuntu server with SSH access.
- A cloned repository.
- Root or sudo access.

## Steps

### 1. Install Docker
```bash
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo usermod -aG docker $USER
```

### 2. Install Essential Development Tools
```bash
sudo apt-get install -y git
```

### 3. Enable and Start Docker on Boot
```bash
sudo systemctl enable docker
sudo systemctl start docker
```

### 4. Set Up SSH for VS Code Remote Access
```bash
sudo apt-get install -y openssh-server
sudo systemctl enable ssh
sudo systemctl start ssh
```

---

## (Optional) Install Visual Studio Code on the Server
If you want to run VS Code directly on your Ubuntu server (for example, with a remote desktop or X11 forwarding), follow these steps:

#### Add the Microsoft GPG key and repository:
```bash
sudo apt-get install -y wget gpg
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" | sudo tee /etc/apt/sources.list.d/vscode.list > /dev/null
rm -f packages.microsoft.gpg
```

#### Update package cache and install VS Code:
```bash
sudo apt install apt-transport-https
sudo apt update
sudo apt install code
```


## 5. Connect from VS Code Using Remote - Containers
1. On your local machine, install these VS Code extensions:
   - Remote - SSH (ms-vscode-remote.remote-ssh)
   - Dev Containers (ms-vscode-remote.remote-containers)
2. Use the Command Palette (`Cmd+Shift+P` or `Ctrl+Shift+P`) and select `Remote-SSH: Connect to Host...`.
3. Open your project folder and follow prompts to reopen in a container if a `.devcontainer` folder exists.

---

> **Important for macOS Users:**
> 
> If you are using VS Code on macOS and cannot connect to your dev server, make sure to grant Visual Studio Code the **Local Network** permission:
> 1. Open **System Settings** > **Privacy & Security** > **Local Network**.
> 2. Enable the toggle for **Visual Studio Code**.
> 3. Restart VS Code and try connecting again.
>
> Without this permission, VS Code cannot access devices on your local network, even if SSH works in other terminals.

Your Ubuntu server is now ready to function as a Dev Container host for VS Code remote development, and can also run VS Code locally if needed.