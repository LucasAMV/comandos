# top

Monitorar processos Linux

```bash
top -d 0.5 -e g -E g -o +%CPU
```

> -d = Tempo de refresh em segundos

> -e e -E = Unidade de medida em K|M|G...

> -o = Campo de ordenação, + = Descrescente, - = Crescente.