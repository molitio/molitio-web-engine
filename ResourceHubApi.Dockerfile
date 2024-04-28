ARG WORK_DIR="usr/src/base"
ARG APP_DIR="usr/src/app"
ARG WORKSPACE="apps-api/resource-hub-api"
ARG APP_MODULES="packages-api/resource-hub-modules"


FROM node:current-alpine3.19 AS builder
ARG WORK_DIR
ARG APP_DIR
ARG WORKSPACE

WORKDIR $WORK_DIR

COPY .pnp.cjs .pnp.loader.mjs .yarnrc.yml package.json yarn.lock README.md LICENSE ./
COPY  .yarn .yarn
COPY $WORKSPACE $WORKSPACE/
COPY $APP_MODULES $APP_MODULES/

RUN corepack enable 
RUN yarn set version 4.1.1 
RUN --mount=type=cache,target=/.yarn/cache YARN_CACHE_FOLDER=/.yarn/cache yarn install --immutable --immutable-cache  

RUN yarn build-resource-hub

FROM node:current-alpine3.19
ARG WORK_DIR
ARG APP_DIR
ARG WORKSPACE

WORKDIR $APP_DIR

ENV PM2_PUBLIC_KEY=$PM2_PUBLIC_KEY
ENV PM2_SECRET_KEY=$PM2_SECRET_KEY

RUN npm install pm2 -g

COPY  .pnp.cjs .pnp.loader.mjs .yarnrc.yml package.json tsconfig.json README.md LICENSE yarn.lock process.yml ./

COPY --from=builder $WORK_DIR/$WORKSPACE $WORKSPACE

CMD ["pm2-runtime","--json", "process.yml", "--only", "resource-hub-api"]