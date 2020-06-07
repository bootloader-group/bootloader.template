#!/bin/bash

read_var() {
    VAR=$(grep $1 $2 | xargs)
    IFS="=" read -ra VAR <<< "$VAR"
    echo ${VAR[1]}
}

get_var_from_log() {
    VAR=$(echo "$2" | grep "$1" | xargs)
    IFS=": " read -ra VAR <<< "$VAR"
    echo ${VAR[2]}
}

DB_NAME=$(read_var DB_NAME .env)
DB_USER=$(read_var DB_USER .env)
DB_PASSWORD=$(read_var DB_PASSWORD .env)
DB_HOST=$(read_var DB_HOST .env)
WP_HOME=$(read_var WP_HOME .env)
WP_SITEURL=$(read_var WP_SITEURL .env)
WP_TITLE=$(read_var WP_TITLE .env)
WP_ADMIN_EMAIL=$(read_var WP_ADMIN_EMAIL .env)
WP_ADMIN_PASSWORD=$(read_var WP_ADMIN_PASSWORD .env)

wp db clean --yes

wp core install --url=$WP_SITEURL --title=$WP_TITLE --admin_user=root --admin_email=$WP_ADMIN_EMAIL --admin_password=$WP_ADMIN_PASSWORD --skip-email

if [ -f "./migrations/steps.sh" ]; then
    bash ./migrations/steps.sh
fi

LATEST_DB=$(ls migrations/db-exports/ | head -n 1)

wp db import ./migrations/db-exports/$LATEST_DB