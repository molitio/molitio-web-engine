ARG MONOREPO_ROOT=/home/node/app

FROM mwe-resource-hub-builder AS builder

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

ENV PORT=3301

RUN yarn workspaces focus --production @molitio/mwe-sleeping-dragon-ui

CMD ["yarn", "workspace", "@molitio/mwe-sleeping-dragon-ui", "next", "start", "-H", "0.0.0.0", "-p", "3301"]
