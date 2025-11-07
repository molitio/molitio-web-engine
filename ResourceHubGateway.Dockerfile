FROM nginx:stable AS builder

ARG NGINX_PORT
ARG MWE_HOST
ENV NGINX_PORT=${NGINX_PORT}
ENV MWE_HOST=${MWE_HOST}

# Copy configuration files
COPY apps-api/resource-hub-gateway/mime.types /etc/nginx/mime.types
COPY apps-api/resource-hub-gateway/security-headers.conf /etc/nginx/security-headers.conf
COPY apps-api/resource-hub-gateway/nginx.conf.template /etc/nginx/nginx.conf.template

# Copy and run entrypoint script to generate config at build time
COPY apps-api/resource-hub-gateway/entrypoint.sh /etc/nginx/entrypoint.sh
RUN chmod 755 /etc/nginx/entrypoint.sh && \
    /etc/nginx/entrypoint.sh

FROM nginx:stable AS production

# Copy generated configuration and other files
COPY --from=builder /etc/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /etc/nginx/mime.types /etc/nginx/mime.types
COPY --from=builder /etc/nginx/security-headers.conf /etc/nginx/security-headers.conf

# Create necessary directories with proper permissions
RUN mkdir -p /var/cache/nginx /var/log/nginx /var/run && \
    chown -R nginx:nginx /var/cache/nginx /var/log/nginx /var/run && \
    chmod -R 755 /var/cache/nginx /var/log/nginx /var/run

# Expose port
EXPOSE ${NGINX_PORT}

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:${NGINX_PORT}/health || exit 1

