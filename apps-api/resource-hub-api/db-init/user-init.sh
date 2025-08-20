#!/bin/bash
set -e

# Helper function for JS string escaping
_js_escape() {
	# Escapes a string for safe insertion into JS code
	printf '%s' "$1" | sed 's/\\/\\\\/g; s/\"/\\\"/g; s/\$/\\$/g; s/`/\\`/g'
}

# a default non-root role
MONGO_NON_ROOT_ROLE="${MONGO_NON_ROOT_ROLE:-readWrite}"

if [ -n "${MONGO_NON_ROOT_USERNAME:-}" ] && [ -n "${MONGO_NON_ROOT_PASSWORD:-}" ]; then
	mongosh --quiet "$MONGO_INITDB_DATABASE" <<EOJS
db.createUser({
	user: "$(_js_escape "$MONGO_NON_ROOT_USERNAME")",
	pwd: "$(_js_escape "$MONGO_NON_ROOT_PASSWORD")",
	roles: [ { role: "$(_js_escape "$MONGO_NON_ROOT_ROLE")", db: "$(_js_escape "$MONGO_INITDB_DATABASE")" } ]
})
EOJS
else
	echo "Warning: MONGO_NON_ROOT_USERNAME or MONGO_NON_ROOT_PASSWORD not set. User not created."
	exit 1
fi