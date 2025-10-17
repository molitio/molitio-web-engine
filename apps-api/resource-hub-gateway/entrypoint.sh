#!/bin/sh
set -e
# Substitute environment variables in the template and start nginx
echo "NGINX_PORT: $NGINX_PORT"
echo "MWE_HOST: $MWE_HOST"
envsubst '${NGINX_PORT} ${MWE_HOST}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
