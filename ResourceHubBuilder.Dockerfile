ARG MONOREPO_ROOT=/home/node/app

FROM node:24-alpine AS resource-hub-builder
ARG MONOREPO_ROOT
WORKDIR $MONOREPO_ROOT

COPY package.json yarn.lock .yarnrc.yml .pnp.cjs .pnp.loader.mjs tsconfig.json README.md LICENSE ./
COPY .yarn .yarn

COPY apps-api ./apps-api
COPY apps-ui ./apps-ui
COPY packages-ui ./packages-ui
COPY molitio-wiki/mwe-docs ./molitio-wiki/mwe-docs

RUN chown -R node:node $MONOREPO_ROOT

RUN corepack enable
RUN corepack prepare yarn@4.9.2 --activate

USER node

RUN yarn install --immutable --check-cache

RUN yarn build

RUN yarn workspaces focus --production