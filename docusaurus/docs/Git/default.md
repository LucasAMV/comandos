# Git

Limpa a working tree e resincroniza o projeto com o remote.

```bash
git fetch origin && git reset --hard origin/NOME_BRANCH && git clean -f -d
```

Mostra um Git graph com os ramos de branch
```bash
git log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all
```

Salva as modificações locais e novos arquivos untracked para o Stash.
```bash
 git stash push -u -m "[Task-17918] Commit inicial"
```