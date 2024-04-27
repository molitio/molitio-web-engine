FROM node:current-alpine3.19 AS builder

WORKDIR /base

RUN mkdir .yarn

COPY ../../package.json \
  ../../yarn.lock \
  ../../.yarnrc.yml \
  ../../.pnp.cjs \
  ../../.pnp.loader.mjs \
  ../../tsconfig.json \
  ./

COPY ../../.yarn/ ./.yarn

COPY . .

RUN cd /base && corepack enable \
  && yarn set version 4.1.1 \
  && yarn install \
  && yarn build-resource-hub

FROM node:current-alpine3.19

WORKDIR /app

COPY --from=builder ./base/dist/* ./dist