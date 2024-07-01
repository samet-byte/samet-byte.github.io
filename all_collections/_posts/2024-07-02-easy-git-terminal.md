---
layout: post
title: "Single Line Git (Add, Commit, Push)"
date: 2024-07-02
categories: [git, terminal]
---

```bash
# Description: Quick commit and push all changes in the current repository

# Steps:
# touch qc.sh
# chmod +x qc.sh
# nano qc.sh or vim qc.sh or code qc.sh or pico qc.sh
# mv qc.sh /usr/local/bin
# cd /usr/local/bin or where you want to use this command
# ./qc.sh

cd /Users/sametbayat/github_sametbayat/s || exit
npm run build

echo "What is the commit message? "
read message

# Default message
if [ -z "$message" ]; then
    message="Updated @$(date +'%Y-%m-%d %H:%M:%S')"
fi

echo "Committing as '$message'"

git add .
git commit -m "$message"
git push
```

