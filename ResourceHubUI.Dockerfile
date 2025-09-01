# syntax=docker/dockerfile:1

ARG WORK_DIR="/usr/src/base"
ARG APP_DIR="/usr/src/app"
ARG WORKSPACE="apps-ui/sleeping-dragon-ui"
ARG PACKAGE_WORKSPACE="@molitio/mwe-sleeping-dragon-ui"
ARG APP_MODULES="packages-ui"

# --- Build Stage ---
FROM node:24-alpine AS builder
ARG WORK_DIR
ARG APP_DIR
ARG WORKSPACE

WORKDIR $WORK_DIR

# Copy all files
COPY . ./

# Copy all monorepo workspaces and root files
COPY package.json yarn.lock .yarnrc.yml .pnp.cjs .pnp.loader.mjs tsconfig.json README.md LICENSE./
COPY apps-ui/sleeping-dragon-ui ./apps-ui/sleeping-dragon-ui
COPY packages-ui/ui-core ./packages-ui/ui-core
COPY packages-ui/mwe-tailwindcss-config ./packages-ui/mwe-tailwindcss-config
# If prettier config is needed for build, uncomment below
# COPY packages-ui/mwe-prettier-config ./packages-ui/mwe-prettier-config

# Install dependencies and build the app
RUN yarn install
RUN yarn build-sleeping-dragon-ui

# --- Production Stage ---
FROM node:24-alpine
ARG WORK_DIR
ARG APP_DIR
ARG WORKSPACE

WORKDIR $APP_DIR

# Copy necessary files for production
COPY .pnp.cjs .pnp.loader.mjs .yarnrc.yml package.json tsconfig.json README.md LICENSE yarn.lock ./
COPY --from=builder $WORK_DIR/.yarn ./.yarn
COPY --from=builder $WORK_DIR/$WORKSPACE ./$WORKSPACE

# Set Yarn cache folder
ENV YARN_CACHE_FOLDER=/.yarn/cache

# Expose Next.js default port
EXPOSE 3000

# Install production dependencies for the workspace
RUN yarn workspaces focus --production @molitio/mwe-sleeping-dragon-ui

# Start the Next.js production server using yarn workspace
CMD ["yarn", "workspace", "@molitio/mwe-sleeping-dragon-ui", "next", "start"]
