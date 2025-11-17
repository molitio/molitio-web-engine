ARG MONOREPO_ROOT=/home/node/app

FROM mwe-resource-hub-builder AS builder

FROM nginx:stable AS transformer
ARG MONOREPO_ROOT
WORKDIR $MONOREPO_ROOT

ARG NGINX_PORT
ARG MWE_HOST
ARG MWE_RH_UI_PORT
ENV NGINX_PORT=${NGINX_PORT}
ENV MWE_HOST=${MWE_HOST}
ENV MWE_RH_UI_PORT=${MWE_RH_UI_PORT}

COPY --from=builder $MONOREPO_ROOT/apps-api/resource-hub-gateway/mime.types /etc/nginx/mime.types
COPY --from=builder $MONOREPO_ROOT/apps-api/resource-hub-gateway/security-headers.conf /etc/nginx/security-headers.conf
COPY --from=builder $MONOREPO_ROOT/apps-api/resource-hub-gateway/nginx.conf.template /etc/nginx/nginx.conf.template

COPY --from=builder $MONOREPO_ROOT/apps-api/resource-hub-gateway/entrypoint.sh /etc/nginx/entrypoint.sh
RUN chmod 755 /etc/nginx/entrypoint.sh && \
    /etc/nginx/entrypoint.sh

FROM nginx:stable AS production
ARG MONOREPO_ROOT

ARG NGINX_PORT
ARG MWE_HOST

ENV NGINX_PORT=${NGINX_PORT}
ENV MWE_HOST=${MWE_HOST}

COPY --from=transformer /etc/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=transformer /etc/nginx/mime.types /etc/nginx/mime.types
COPY --from=transformer /etc/nginx/security-headers.conf /etc/nginx/security-headers.conf
COPY --from=builder $MONOREPO_ROOT/apps-ui/mwe-friday-ui/dist /base/static

RUN mkdir -p /var/cache/nginx /var/log/nginx /var/run && \
    chown -R nginx:nginx /var/cache/nginx /var/log/nginx /var/run && \
    chmod -R 755 /var/cache/nginx /var/log/nginx /var/run

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
CMD  /bin/sh -c "curl -f http://${MWE_HOST}:${NGINX_PORT}/health || exit 1"

