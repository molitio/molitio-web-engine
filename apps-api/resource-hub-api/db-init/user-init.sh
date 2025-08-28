#!/bin/bash
set -e

_js_escape() {
    printf '%s' "$1" | sed 's/\\/\\\\/g; s/\"/\\\"/g; s/\$/\\$/g; s/`/\\`/g'
}

MONGO_NON_ROOT_ROLE="${MONGO_NON_ROOT_ROLE:-readWrite}"



if [ -n "${MONGO_APP_USER_USERNAME:-}" ] && [ -n "${MONGO_APP_USER_PASSWORD:-}" ]; then
    # Create all users in resource-hub-db with roles for all target databases
    mongosh --quiet "resource-hub-db" <<EOJS
db.createUser({
    user: "$(_js_escape "$MONGO_APP_USER_USERNAME")",
    pwd: "$(_js_escape "$MONGO_APP_USER_PASSWORD")",
    roles: [
        { role: "readWrite", db: "resource" },
        { role: "readWrite", db: "user-private" },
        { role: "readWrite", db: "user-public" },
        { role: "readWrite", db: "specification-label" }
    ]
})
db.createUser({
    user: "$(_js_escape "$MONGO_ADMIN_USERNAME")",
    pwd: "$(_js_escape "$MONGO_ADMIN_PASSWORD")",
    roles: [
        { role: "dbAdmin", db: "resource" },
        { role: "userAdmin", db: "resource" },
        { role: "readWrite", db: "resource" },
        { role: "dbAdmin", db: "user-private" },
        { role: "userAdmin", db: "user-private" },
        { role: "readWrite", db: "user-private" },
        { role: "dbAdmin", db: "user-public" },
        { role: "userAdmin", db: "user-public" },
        { role: "readWrite", db: "user-public" },
        { role: "dbAdmin", db: "specification-label" },
        { role: "userAdmin", db: "specification-label" },
        { role: "readWrite", db: "specification-label" }
    ]
})
db.createUser({
    user: "$(_js_escape "$MONGO_READ_ONLY_USERNAME")",
    pwd: "$(_js_escape "$MONGO_READ_ONLY_PASSWORD")",
    roles: [
        { role: "read", db: "resource" },
        { role: "read", db: "user-private" },
        { role: "read", db: "user-public" },
        { role: "read", db: "specification-label" }
    ]
})
EOJS
    status=$?
    if [ $status -ne 0 ]; then
        echo "[ERROR] mongosh failed to create user(s) in resource-hub-db."
        exit $status
    fi
else
    echo "[ERROR] MONGO_APP_USER_USERNAME or MONGO_APP_USER_PASSWORD not set. User not created."
    exit 1
fi