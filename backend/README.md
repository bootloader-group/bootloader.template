# backend.bootloader.template
This repository is a starting point to every bootloader backend template. Based on [bedrock](https://roots.io/bedrock/). Requires:
* PHP 7.4
* Composer
* WP-CLI
* MySQL

## Installation

1. Clone repository to desired destination.

2. Copy environment files:
``` console
cp .env.example .env
```
3. Fill your .env file with database, metadata and root user params.

4. Setup your server config:

### NGINX
Use `nginx.conf.example` as template, create your config locally, fill params and link it to main configs:

``` console
cp nginx.conf.example nginx.conf
nano nginx.conf # Change `<<<PROJECT_URL>>>` and `<<<PROJECT_PATH>>>`. Make sure you linked right php sock.
sudo ln -s ./nginx.conf /etc/nginx/sites-enabled/<<<PROJECT_URL>>> # Use desired site url instead of <<<PROJECT_URL>>>
sudo service nginx reload
```

### XAMPP
TBD

5. Install dependencies:
``` console
composer install
```
6. Run installation:
```
./install.sh
```

## Update
1. Pull desired revision:
``` console
git pull
```

2. Install dependencies:
``` console
composer install
```

3. Run migrations:
``` console
./install.sh
```

## Usage
1. To modify wordpress instance add `wp cli` commands to `./migrations/steps.sh` and commit changes to git.

2. After each modification of ACF schema save it via command line and commit changes to git:
``` console
wp acf export --export_path=migrations/acf-json-schema/ --all
```

3. After each modification of posts/users/config/dynamic data in general - export db via cli and commit changes to git:
``` console
wp db export migrations/db-exports/$(date +%Y-%m-%d-%H-%M-%S).sql
```