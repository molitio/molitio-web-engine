


ARG WORK_DIR="/usr/src/base"
ARG APP_DIR="/usr/src/app"
ARG WORKSPACE="apps-api/resource-hub-gateway"

FROM macbre/nginx-http3:latest AS builder
ARG WORK_DIR
ARG APP_DIR
ARG WORKSPACE

WORKDIR $WORK_DIR

# Copy all files (monorepo root)
COPY . ./

# Copy only gateway workspace files and config
COPY apps-api/resource-hub-gateway ./apps-api/resource-hub-gateway

FROM macbre/nginx-http3:latest
ARG WORK_DIR
ARG APP_DIR
ARG WORKSPACE

WORKDIR $APP_DIR

# Copy only necessary config files for production
COPY --from=builder $WORK_DIR/$WORKSPACE/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder $WORK_DIR/$WORKSPACE/mime.types /etc/nginx/mime.types
COPY --from=builder $WORK_DIR/$WORKSPACE/security-headers.conf /etc/nginx/security-headers.conf
