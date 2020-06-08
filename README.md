# Pracownia-oto.pl
Make sure you pass requirements:
* nvm
* PHP 7.4
* Composer
* WP-CLI
* MySQL

## Checing if it's auto deployed
See what is returned by `crontab -l`. There should be all auto-deploys. If you want to remove jobs type `crontab -r` or edit config by `crontab -e`.

## Registering auto deploy
1. Use `deploy.template.sh` to prepare correct `deploy.sh` file.
``` console
cp deploy.template.sh deploy.sh
```

2. Edit template - change `<<<ENV_NAME>>>` to proper env.

3. Make `deploy.sh` executable:
``` console
chmod u+x deploy.sh
```
4. Open crontab:
``` console
crontab -e # Terminal can ask you for editor - choose as you wish, for example nano
```

5. Add following line at the end of the crontab, change path, username, then save.
```
@hourly exempel /absolut/path/to/deploy.sh
```