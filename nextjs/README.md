# NJEXTJS various scripts

repository for Git testing and saving some nextjs projects with multiple purposes

- [i8n](https://github.com/jpinela/variousscripts/tree/main/nextjs/i8n)
- [flex docker mainpage :80](https://github.com/jpinela/variousscripts/tree/main/nextjs/dockerhomepage)
- [error analysis frontend](https://github.com/jpinela/variousscripts/tree/main/nextjs/EAF)

GIT notes
então para update foi (com alterações remotas, os dois são necessários)
- git pull https:... repo.git
- git stash
- git add nextjs/README.md
- git commit -m "changed readme"
- git push

para adicionar varias paginas / files, sem edições em paralelo... usar 
```
git add .
git commit -m "mensagem qualquer"
git push
```


# NOTES

```
D:\tmp\nextjsgit\variousscripts>git add .
warning: in the working copy of 'nextjs/dockerhomepage/.gitignore', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'nextjs/dockerhomepage/README.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'nextjs/dockerhomepage/app/globals.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'nextjs/dockerhomepage/app/layout.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'nextjs/dockerhomepage/app/page.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'nextjs/dockerhomepage/app/page.module.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'nextjs/dockerhomepage/jsconfig.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'nextjs/dockerhomepage/next.config.mjs', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'nextjs/dockerhomepage/package.json', LF will be replaced by CRLF the next time Git touches it
```
to solve this, we can use the following  [link](https://github.com/orgs/community/discussions/66838)
```
D:\tmp\nextjsgit\variousscripts>git config --global core.autocrlf true
```

# Para load para o docker
## No VScode
next.config.mjs
```/** @type {import('next').NextConfig} */
//const nextConfig = {};

const nextConfig = {
  output: 'standalone',
}

export default nextConfig;
```
depois, npm run build

depois, copiei TUDO excepto o node_modules do folder ```standalone```
(https://github.com/jpinela/variousscripts/blob/a7b391af8361abf3a9d9b129b2988b76aba8cb22/nextjs/images/standalone.png)
estrutura raiz da pata do docker
```
.
├── Dockerfile
├── Dockerfile.prod
├── code
│   ├── .next
│   │   ├── BUILD_ID
│   │   ├── app-build-manifest.json
│   │   ├── app-path-routes-manifest.json
│   │   ├── build-manifest.json
│   │   ├── cache
│   │   │   └── config.json
│   │   ├── package.json
│   │   ├── prerender-manifest.json
│   │   ├── react-loadable-manifest.json
│   │   ├── required-server-files.json
│   │   ├── routes-manifest.json
│   │   ├── server
│   │   │   ├── app
│   │   │   │   ├── _not-found
│   │   │   │   │   ├── page.js
│   │   │   │   │   ├── page.js.nft.json
│   │   │   │   │   └── page_client-reference-manifest.js
│   │   │   │   ├── _not-found.html
│   │   │   │   ├── _not-found.meta
│   │   │   │   ├── _not-found.rsc
│   │   │   │   ├── favicon.ico
│   │   │   │   │   ├── route.js
│   │   │   │   │   └── route.js.nft.json
│   │   │   │   ├── favicon.ico.body
│   │   │   │   ├── favicon.ico.meta
│   │   │   │   ├── index.html
│   │   │   │   ├── index.meta
│   │   │   │   ├── index.rsc
│   │   │   │   ├── page.js
│   │   │   │   ├── page.js.nft.json
│   │   │   │   └── page_client-reference-manifest.js
│   │   │   ├── app-paths-manifest.json
│   │   │   ├── chunks
│   │   │   │   ├── 447.js
│   │   │   │   ├── 548.js
│   │   │   │   └── 769.js
│   │   │   ├── functions-config-manifest.json
│   │   │   ├── middleware-build-manifest.js
│   │   │   ├── middleware-manifest.json
│   │   │   ├── middleware-react-loadable-manifest.js
│   │   │   ├── next-font-manifest.js
│   │   │   ├── next-font-manifest.json
│   │   │   ├── pages
│   │   │   │   ├── 404.html
│   │   │   │   ├── 500.html
│   │   │   │   ├── _app.js
│   │   │   │   ├── _app.js.nft.json
│   │   │   │   ├── _document.js
│   │   │   │   ├── _document.js.nft.json
│   │   │   │   ├── _error.js
│   │   │   │   └── _error.js.nft.json
│   │   │   ├── pages-manifest.json
│   │   │   ├── server-reference-manifest.js
│   │   │   ├── server-reference-manifest.json
│   │   │   └── webpack-runtime.js
│   │   └── trace
│   ├── package.json
│   └── server.js
└── docker-compose.yml
```

```/Dockerfile```
```
FROM node:20-alpine

WORKDIR /app
COPY code/package*.json /.
RUN npm install

COPY . .
EXPOSE 3010
#CMD node .next/standalone/server.js
```

```/docker-compose.yml```
```
version: '3.8'

services:
  development:
    build:
      context: .
      dockerfile: Dockerfile
       #target: development  # Use the 'development' stage from Dockerfile.prod for development
    ports:
      - "3005:3000"
    volumes:
      - ./code:/app
    command: node server.js
```
Logica:
- quando faço build do dockerfile, copio só o package.json para instalar os modules, mas não arranco nada porque nao copiei ficheiros , nem montei directoria.
- isso é feito depois pelo compose.

e para acabar...
```
sudo docker-compose up
```
o que é certo é que funciona. bem ou mal.

(https://github.com/jpinela/variousscripts/blob/a7b391af8361abf3a9d9b129b2988b76aba8cb22/nextjs/images/homepage.png)