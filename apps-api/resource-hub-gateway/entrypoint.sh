#!/bin/sh
set -e
# Substitute environment variables in the template and generate nginx.conf
echo "NGINX_PORT: $NGINX_PORT"
echo "MWE_HOST: $MWE_HOST"
envsubst '${NGINX_PORT} ${MWE_HOST} ${MWE_RH_UI_PORT} ${MWE_RH_UI_HOST}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
