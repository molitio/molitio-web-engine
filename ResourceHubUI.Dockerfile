# syntax=docker/dockerfile:1

ARG WORK_DIR="/usr/src/base"
ARG APP_DIR="/usr/src/app"
ARG WORKSPACE="apps-ui/sleeping-dragon-ui"
ARG PACKAGE_WORKSPACE="@molitio/mwe-sleeping-dragon-ui"
ARG PACKAGE_UI_CORE="packages-ui/ui-core"
ARG PACKAGE_TAILWIND_CONFIG="packages-ui/mwe-tailwindcss-config"

FROM node:24-alpine AS builder
ARG WORK_DIR
ARG APP_DIR
ARG WORKSPACE

WORKDIR $WORK_DIR

COPY package.json yarn.lock .yarnrc.yml .pnp.cjs .pnp.loader.mjs tsconfig.json README.md LICENSE ./
COPY $WORKSPACE ./$WORKSPACE
COPY $PACKAGE_UI_CORE ./$PACKAGE_UI_CORE
COPY $PACKAGE_TAILWIND_CONFIG ./$PACKAGE_TAILWIND_CONFIG

RUN yarn install
RUN yarn build-sleeping-dragon-ui

FROM node:24-alpine
ARG WORK_DIR
ARG APP_DIR
ARG WORKSPACE

WORKDIR $APP_DIR

COPY .pnp.cjs .pnp.loader.mjs .yarnrc.yml package.json tsconfig.json README.md LICENSE yarn.lock ./

COPY --from=builder $WORK_DIR/.yarn ./.yarn
COPY --from=builder $WORK_DIR/$WORKSPACE $WORK_DIR/$WORKSPACE
COPY --from=builder $WORK_DIR/$PACKAGE_TAILWIND_CONFIG $WORK_DIR/$PACKAGE_TAILWIND_CONFIG
COPY --from=builder $WORK_DIR/$PACKAGE_UI_CORE $WORK_DIR/$PACKAGE_UI_CORE

ENV YARN_CACHE_FOLDER=/.yarn/cache

EXPOSE 3000

CMD ["yarn", "workspace", "@molitio/mwe-sleeping-dragon-ui", "next", "start"]
