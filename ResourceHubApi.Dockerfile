
ARG MONOREPO_ROOT=/home/node/app

FROM node:24-alpine AS builder
ARG MONOREPO_ROOT
WORKDIR $MONOREPO_ROOT

COPY .yarn .yarn
COPY package.json yarn.lock .yarnrc.yml .pnp.cjs .pnp.loader.mjs tsconfig.json README.md LICENSE ./
COPY apps-api/resource-hub-api apps-api/resource-hub-api

RUN chown -R node:node $MONOREPO_ROOT

RUN corepack enable
RUN corepack prepare yarn@4.9.2 --activate

USER node

RUN yarn install
RUN yarn add global @nestjs/cli
RUN yarn workspaces focus --production @molitio/mwe-resource-hub-api

FROM node:24-alpine AS production
ARG MONOREPO_ROOT
WORKDIR $MONOREPO_ROOT

COPY --from=builder $MONOREPO_ROOT/package.json ./
COPY --from=builder $MONOREPO_ROOT/yarn.lock ./
COPY --from=builder $MONOREPO_ROOT/.yarnrc.yml ./
COPY --from=builder $MONOREPO_ROOT/.pnp.cjs ./
COPY --from=builder $MONOREPO_ROOT/.pnp.loader.mjs ./
COPY --from=builder $MONOREPO_ROOT/tsconfig.json ./
COPY --from=builder $MONOREPO_ROOT/README.md ./
COPY --from=builder $MONOREPO_ROOT/LICENSE ./
COPY --from=builder $MONOREPO_ROOT/.yarn ./.yarn
COPY --from=builder $MONOREPO_ROOT/apps-api/resource-hub-api apps-api/resource-hub-api

ENV YARN_CACHE_FOLDER=$MONOREPO_ROOT/.yarn/cache

RUN chown -R node:node $MONOREPO_ROOT

RUN corepack enable
RUN corepack prepare yarn@4.9.2 --activate

USER node

RUN yarn workspaces focus --production @molitio/mwe-resource-hub-api


CMD ["yarn", "workspace", "@molitio/mwe-resource-hub-api", "start"]