#!/bin/bash
cd /var/www/<<<ENV_NAME>>>>/pracownia-oto/
git pull
cd front
npm ci
npm run build
cd ../backend
composer install
./install.sh
cd ../
./notify.sh