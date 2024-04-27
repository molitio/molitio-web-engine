ARG WORK_DIR="usr/src/base"
ARG APP_DIR="usr/src/app"
ARG WORKSPACE="apps-api/resource-hub-api"

FROM node:current-alpine3.19 AS builder
ARG WORK_DIR
ARG APP_DIR
ARG WORKSPACE

WORKDIR $WORK_DIR

RUN mkdir .yarn

COPY . .

RUN corepack enable \
  && yarn set version 4.1.1 \
  && yarn install 

RUN yarn build-resource-hub

FROM node:current-alpine3.19
ARG WORK_DIR
ARG APP_DIR
ARG WORKSPACE

WORKDIR $APP_DIR

RUN npm install pm2 -g

COPY --from=builder $WORK_DIR/$WORKSPACE/package.json .
COPY --from=builder $WORK_DIR/$WORKSPACE/package.json .
COPY --from=builder $WORK_DIR/$WORKSPACE/tsconfig.json .
COPY --from=builder $WORK_DIR/$WORKSPACE/README.md .
COPY --from=builder $WORK_DIR/$WORKSPACE/dist .

CMD ["pm2-runtime", "start", "main.js"]