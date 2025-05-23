---
#sidebar_label: ''
sidebar_position: 1
---

# Comandos do dia-a-dia

```bash title="Limpa a working tree e resincroniza o projeto com o remote."
git fetch origin && git reset --hard origin/NOME_BRANCH && git clean -f -d
```

```bash title="Mostra um Git graph com os ramos de branch"
git log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all
```

```bash title="Salva as modificações locais e novos arquivos untracked para o Stash."
 git stash push -u -m "[Task-17918] Commit inicial"
```

```bash title="Criar branch baseada na develop"  
git checkout -b task-123456 develop
```

```bash title="Criar branch baseada na develop - sendo mais específico"
git checkout -b task-123456 develop^0 --
```
```develop^0``` → Refere-se ao commit exato da branch develop, garantindo que a nova branch seja baseada no commit direto e não em um possível "merge commit".

```--``` → Indica que develop^0 é uma referência de branch e não um arquivo.

```bash title="Enviar para o repositório remoto"
git push --set-upstream origin task-123456
```