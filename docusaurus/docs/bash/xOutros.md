# Outros comandos

[ExplainShell](https://explainshell.com/)

[Manual do comando lsof](https://man7.org/linux/man-pages/man8/lsof.8.html)
```bash title="Lista portas TCP abertas"
sudo lsof -iTCP -iUDP -sTCP:LISTEN -P
```