FROM mongo:7.0.5

COPY apps-api/resource-hub-api/db-init/user-init.sh /docker-entrypoint-initdb.d/
RUN chmod +x /docker-entrypoint-initdb.d/user-init.sh

USER mongodb
