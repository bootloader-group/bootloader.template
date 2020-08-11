#!/bin/bash
cd /var/www/<<<ENV_NAME>>>>/<<<PROJECT_NAME>>>/
git pull
composer install
composer update
cd /var/www/<<<ENV_NAME>>>>/<<<PROJECT_NAME>>>/config/
./install.sh
cd /var/www/<<<ENV_NAME>>>>/<<<PROJECT_NAME>>>/web/app/themes/bootloader-theme/react-src/
npm ci
npm run wpbuild
cd /var/www/<<<ENV_NAME>>>>/<<<PROJECT_NAME>>>/web/app/themes/bootloader-theme/
cp -r bootloader-theme/* ./

