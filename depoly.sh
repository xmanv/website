#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'docs.xmanv.com' > CNAME

git init
git add -A
git commit -m 'depoly脚本更新'

# git config user.name xmanv
# git config user.email xmanvcom@gmail.com

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:xmanv/blog.git master:gh-pages
git push -f https://github.com/xmanv/website.git master:gh-pages
cd -