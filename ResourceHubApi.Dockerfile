ARG WORK_DIR="usr/src/base"
ARG APP_DIR="usr/src/app"
ARG WORKSPACE="apps-api/resource-hub-api"
ARG APP_MODULES="packages-api/resource-hub-modules"


FROM node:current-alpine3.19 AS builder
ARG WORK_DIR
ARG APP_DIR
ARG WORKSPACE

WORKDIR $WORK_DIR

COPY  . ./

RUN yarn install

RUN yarn add global @nestjs/cli
RUN yarn build-resource-hub

FROM node:current-alpine3.19
ARG WORK_DIR
ARG APP_DIR
ARG WORKSPACE

WORKDIR $APP_DIR

COPY  .pnp.cjs .pnp.loader.mjs .yarnrc.yml package.json tsconfig.json README.md LICENSE yarn.lock process.yml ./

COPY --from=builder $WORK_DIR/.yarn ./.yarn
COPY --from=builder $WORK_DIR/$WORKSPACE ./$WORKSPACE

ENV  YARN_CACHE_FOLDER=/.yarn/cache

CMD ["yarn", "workspace", "@molitio/resource-hub-api", "start"]