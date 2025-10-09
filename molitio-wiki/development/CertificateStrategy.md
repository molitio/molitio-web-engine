## Certificate Strategy for HTTPS & mTLS

This document outlines how to enable secure communication (HTTPS and mutual TLS) for Next.js, NestJS, NGINX, and MongoDB containers in both development and production environments.

---

### 1. Certificate Strategy

#### Development
- Use self-signed certificates.
- Generate a local CA, then sign server/client certs with it.
- Store certs in a local directory, mount into containers via volumes.

#### Production
- Use certificates from a trusted CA (e.g., Let's Encrypt for public endpoints, or your org’s internal CA for internal services).
- Store certs securely (e.g., secrets manager, or Docker secrets).
- Automate renewal (e.g., certbot for Let's Encrypt).

---

### 2. Certificate Creation

#### Local CA & Certs (Dev Example, ECC Recommended)

ECC (ECDSA) is more efficient and recommended for new systems. The following uses the prime256v1 (P-256) curve, which is widely supported and secure.

```bash
# Create ECC CA key and certificate
openssl ecparam -name prime256v1 -genkey -noout -out ca.key
openssl req -x509 -new -key ca.key -sha256 -days 3650 -out ca.crt -subj "/CN=LocalDevCA"

# Server cert (e.g., for NGINX)
openssl ecparam -name prime256v1 -genkey -noout -out server.key
openssl req -new -key server.key -out server.csr -subj "/CN=localhost"
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 365 -sha256

# Client cert (for mTLS)
openssl ecparam -name prime256v1 -genkey -noout -out client.key
openssl req -new -key client.key -out client.csr -subj "/CN=client"
openssl x509 -req -in client.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out client.crt -days 365 -sha256
```

You may also use the secp384r1 (P-384) curve for even stronger security:
```bash
openssl ecparam -name secp384r1 -genkey -noout -out ca.key
```
and repeat the above steps for server and client keys.

---

### 3. Handling Certificates

- **Dev:** Store in a `certs/` folder, mount into containers.
- **Prod:** Use Docker secrets, or mount from a secure location.
- **Never commit private keys to git.**

---

### 4. Container Configuration

#### NGINX
- Configure for HTTPS and mTLS:
		- `ssl_certificate`, `ssl_certificate_key`
		- `ssl_client_certificate` (for mTLS)
		- `ssl_verify_client on;`
- Example volume mount:
		```yaml
		volumes:
			- ./certs/nginx:/etc/nginx/certs:ro
		```

#### NestJS & Next.js
- Use HTTPS server (pass cert/key).
- For mTLS, verify client certs (optional, usually handled by NGINX).
- Example (NestJS):
		```typescript
		// ...existing code...
		httpsOptions: {
			key: fs.readFileSync('/path/to/server.key'),
			cert: fs.readFileSync('/path/to/server.crt'),
			ca: fs.readFileSync('/path/to/ca.crt'), // for mTLS
			requestCert: true,
			rejectUnauthorized: true,
		}
		// ...existing code...
		```

#### MongoDB
- Enable TLS in config.
- Use `--tlsMode`, `--tlsCertificateKeyFile`, `--tlsCAFile`.
- For mTLS, require client certs.

---

### 5. Production Grade Checklist

- Use strong, trusted certs.
- Rotate/renew certs regularly.
- Store secrets securely.
- Use secure ciphers.
- Restrict access to private keys.
- Automate deployment of certs (CI/CD).
- Monitor for expired/expiring certs.

---

### 6. References

- [NGINX SSL docs](https://nginx.org/en/docs/http/configuring_https_servers.html)
- [MongoDB TLS docs](https://docs.mongodb.com/manual/tutorial/configure-ssl/)
- [NestJS HTTPS](https://docs.nestjs.com/techniques/https)
- [Next.js HTTPS](https://nextjs.org/docs/advanced-features/custom-server)

---

**Summary:**  
Generate a CA, sign certs for each service, configure containers to use them, automate and secure cert handling. For production, use trusted CA and secure storage. NGINX can terminate TLS and enforce mTLS for all backend services.

