#!/bin/bash
set -e

_js_escape() {
    printf '%s' "$1" | sed 's/\\/\\\\/g; s/\"/\\\"/g; s/\$/\\$/g; s/`/\\`/g'
}

MONGO_NON_ROOT_ROLE="${MONGO_NON_ROOT_ROLE:-readWrite}"

if [ -n "${MONGO_NON_ROOT_USERNAME:-}" ] && [ -n "${MONGO_NON_ROOT_PASSWORD:-}" ]; then
    mongosh --quiet "$MONGO_INITDB_DATABASE" <<EOJS
db.createUser({
    user: "$(_js_escape "$MONGO_NON_ROOT_USERNAME")",
    pwd: "$(_js_escape "$MONGO_NON_ROOT_PASSWORD")",
    roles: [ { role: "$(_js_escape "$MONGO_NON_ROOT_ROLE")", db: "$(_js_escape "$MONGO_INITDB_DATABASE")" } ]
})
EOJS
    status=$?
    if [ $status -ne 0 ]; then
        echo "[ERROR] mongosh failed to create user."
        exit $status
    fi
else
    echo "[ERROR] MONGO_NON_ROOT_USERNAME or MONGO_NON_ROOT_PASSWORD not set. User not created."
    exit 1
fi