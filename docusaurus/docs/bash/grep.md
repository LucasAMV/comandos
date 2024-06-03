# grep

[Manual grep](https://www.man7.org/linux/man-pages/man1/grep.1.html)

[ExplainShell](https://explainshell.com/)


```bash title="Pesquisa dentro de arquivos:"
grep -rin --regexp='microdnf ' ./
```

```bash title="Pesquisa dentro de arquivos cujo nome contém 'Dockerfile':"
grep -rin --regexp='microdnf ' --include="*Dockerfile*" ./
```

```bash title="Imprime apenas o conteúdo encontrado, com 2 linhas antes e depois:"
grep -ri -A 2 -B 2 --no-filename --regexp='microdnf ' ./
```