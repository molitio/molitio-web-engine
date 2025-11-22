# Usefull Git commands to aid development

## Clean origin references from local git repository:

```bash
git fetch --prune origin
```

## Find local branches that track deleted remote branches:

```bash
git branch -vv | grep ': gone]'
```

## Delete those local branches:

```bash
git branch -d <branch-name>
```

Replace `<branch-name>` with the actual branch name you want to delete. Repeat the last command for each branch that tracks a deleted remote branch.

## If you have many branches, consider scripting this

```bash
git branch -vv | grep ': gone]' | awk '{print $1}' | xargs git branch -d
```

- Replace `bash git branch -d ` with `bash git branch -D ` if you want to force delete branches that haven't been merged.
- Always verify before deleting to avoid losing work.
- Run git branch -a to see all branches before and after.
