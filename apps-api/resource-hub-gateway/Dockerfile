#currently configured for dev environment
#TODO: configuration for public release
FROM nginx:stable-alpine3.17-slim
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
COPY security-headers.conf /etc/nginx/security-headers.conf
