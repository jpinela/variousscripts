# NJEXTJS various scripts

repository for Git testing and saving some nextjs projects with multiple purposes

- [i8n](https://github.com/jpinela/variousscripts/tree/main/nextjs/i8n)
- [flex docker mainpage :80](https://github.com/jpinela/variousscripts/tree/main/nextjs/dockerhomepage)
- [error analysis frontend](https://github.com/jpinela/variousscripts/tree/main/nextjs/EAF)

GIT notes
então para update foi (com alterações remotas, os 1os dois são necessários)
- git pull https:... repo.git
- git stash
- git add nextjs/README.md
- git commit -m "changed readme"
- git push

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
to solve this [link](https://github.com/orgs/community/discussions/66838)
```
D:\tmp\nextjsgit\variousscripts>git config --global core.autocrlf true
```

