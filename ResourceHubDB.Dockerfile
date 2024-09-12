FROM mongo:5.0.26
COPY apps-api/resource-hub-api/db-init/user-init.sh /docker-entrypoint-initdb.d/