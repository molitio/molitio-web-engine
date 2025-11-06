# syntax=docker/dockerfile:1

ARG MONOREPO_ROOT=/home/node/app

FROM node:24-alpine AS builder
ARG MONOREPO_ROOT
WORKDIR $MONOREPO_ROOT

COPY package.json yarn.lock .yarnrc.yml .pnp.cjs .pnp.loader.mjs tsconfig.json README.md LICENSE ./
COPY .yarn .yarn
COPY apps-ui/sleeping-dragon-ui apps-ui/sleeping-dragon-ui
COPY packages-ui/mwe-ui-core packages-ui/mwe-ui-core
COPY packages-ui/mwe-tailwindcss-config packages-ui/mwe-tailwindcss-config

RUN chown -R node:node $MONOREPO_ROOT

RUN corepack enable
RUN corepack prepare yarn@4.9.2 --activate

USER node

RUN yarn install
RUN yarn workspace @molitio/mwe-sleeping-dragon-ui build

FROM node:24-alpine AS production
ARG MONOREPO_ROOT
WORKDIR $MONOREPO_ROOT

RUN apk add --no-cache curl

COPY --from=builder $MONOREPO_ROOT/package.json ./
COPY --from=builder $MONOREPO_ROOT/yarn.lock ./
COPY --from=builder $MONOREPO_ROOT/.yarnrc.yml ./
COPY --from=builder $MONOREPO_ROOT/.pnp.cjs ./
COPY --from=builder $MONOREPO_ROOT/.pnp.loader.mjs ./
COPY --from=builder $MONOREPO_ROOT/tsconfig.json ./
COPY --from=builder $MONOREPO_ROOT/README.md ./
COPY --from=builder $MONOREPO_ROOT/LICENSE ./
COPY --from=builder $MONOREPO_ROOT/.yarn ./.yarn
COPY --from=builder $MONOREPO_ROOT/apps-ui/sleeping-dragon-ui apps-ui/sleeping-dragon-ui
COPY --from=builder $MONOREPO_ROOT/packages-ui/mwe-ui-core packages-ui/mwe-ui-core
COPY --from=builder $MONOREPO_ROOT/packages-ui/mwe-tailwindcss-config packages-ui/mwe-tailwindcss-config

ENV YARN_CACHE_FOLDER=$MONOREPO_ROOT/.yarn/cache

RUN chown -R node:node $MONOREPO_ROOT

RUN corepack enable
RUN corepack prepare yarn@4.9.2 --activate

USER node

RUN yarn workspaces focus --production @molitio/mwe-sleeping-dragon-ui

CMD ["yarn", "workspace", "@molitio/mwe-sleeping-dragon-ui", "next", "start", "-H", "0.0.0.0"]
