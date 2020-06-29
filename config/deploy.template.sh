#!/bin/bash
cd /var/www/<<<ENV_NAME>>>>/<<<PROJECT_NAME>>>/
git pull
composer install
composer update
./install.sh
./notify.sh