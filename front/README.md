# UMB

## Requirements:
- **Node** v. >=12.x.x
- **NPM** v. >=6.x.x
- **Cup of tea/coffee**

## Update:
1) Make sure there is no no commited changes and you are on master, then pull
**`git checkout . && git pull`** 
2) Make sure You are in front app directory:
**`cd <<<PROJECT_PATH>>>/front`**
3) Install dependencies 
**`npm ci`**
4) Build app for production
**`npm run build`**
5) Point server to built files
**`<<<PROJECT_PATH>>>/build`** with *index.html* beeing entry file.


## Deploy on the new stageing
TODO: describe it, but do not forget about:
Copy env file to `./public/config.json`
**`cp ./umb-front-config/${enviroment}.config.json ./public/config.json`**