FROM nginx:stable AS builder

ARG NGINX_PORT
ARG MWE_HOST
ENV NGINX_PORT=${NGINX_PORT}
ENV MWE_HOST=${MWE_HOST}

COPY apps-api/resource-hub-gateway/entrypoint.sh ./etc/nginx/entrypoint.sh
RUN chmod 755 ./etc/nginx/entrypoint.sh

COPY apps-api/resource-hub-gateway/nginx.conf.template ./etc/nginx/nginx.conf.template
COPY apps-api/resource-hub-gateway/mime.types ./etc/nginx/mime.types
COPY apps-api/resource-hub-gateway/security-headers.conf ./etc/nginx/security-headers.conf

RUN ./etc/nginx/entrypoint.sh

FROM macbre/nginx-http3:latest AS production

COPY --from=builder /etc/nginx/nginx.conf ./etc/nginx/nginx.conf
COPY --from=builder /etc/nginx/mime.types ./etc/nginx/mime.types
COPY --from=builder /etc/nginx/security-headers.conf ./etc/nginx/security-headers.conf
