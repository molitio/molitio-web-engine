



ARG MONOREPO_ROOT=/usr/src/app

FROM node:24-alpine AS builder
ARG MONOREPO_ROOT
WORKDIR $MONOREPO_ROOT
ENV YARN_ENABLE_IMMUTABLE_INSTALLS=true

COPY package.json yarn.lock .yarnrc.yml .pnp.cjs .pnp.loader.mjs tsconfig.json README.md LICENSE ./
COPY .yarn .yarn
COPY apps-api/resource-hub-gateway apps-api/resource-hub-gateway

RUN corepack enable
RUN corepack prepare yarn@4.9.2 --activate
RUN yarn install --immutable

FROM macbre/nginx-http3:latest AS production
ARG MONOREPO_ROOT
WORKDIR $MONOREPO_ROOT

# Copy only necessary config files for production
COPY --from=builder $MONOREPO_ROOT/apps-api/resource-hub-gateway/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder $MONOREPO_ROOT/apps-api/resource-hub-gateway/mime.types /etc/nginx/mime.types
COPY --from=builder $MONOREPO_ROOT/apps-api/resource-hub-gateway/security-headers.conf /etc/nginx/security-headers.conf
