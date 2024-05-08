ARG BUILD_CONTEXT="resource-hub-gateway"

FROM nginx:stable-alpine3.17-slim as base

WORKDIR /base

COPY apps-api/${BUID_CONTEXT}/package.json ./
COPY apps-api/${BUID_CONTEXT}/nginx.conf ../etc/nginx/nginx.conf
COPY apps-api/${BUID_CONTEXT}/mime.types ../etc/nginx/mime.types
COPY apps-api/${BUID_CONTEXT}/security-headers.conf ../etc/nginx/security-headers.conf


FROM nginx:stable-alpine3.17-slim

WORKDIR /base/apps-api/${BUILD_CONTEXT}

COPY --from=base apps-api/${BUID_CONTEXT}/ ./





