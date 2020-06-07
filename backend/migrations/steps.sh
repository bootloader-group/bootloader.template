#!/bin/bash
echo "Running migrations!"
wp user create exempel exempel2@exempel.com --role=administrator --user_pass=exempel
wp plugin activate advanced-custom-fields-pro
wp plugin activate acf-to-rest-api
wp plugin activate advanced-custom-fields-wpcli
wp acf import --json_file=migrations/acf-json-schema/*.json --all
