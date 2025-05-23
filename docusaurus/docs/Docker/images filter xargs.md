---
sidebar_label: 'images --filter | xargs'
#sidebar_position: 3
---

# images --filter | xargs

Você pode encadear o comando `docker rmi` com o resultado do comando `docker images --filter "dangling=true" --format "{{.ID}}"` usando o comando `xargs`. O `xargs` pega a saída do comando anterior e a usa como argumento para o comando seguinte.

### Comando Completo:
```bash
docker images --filter "dangling=true" --format "{{.ID}}" | xargs docker rmi
```

### Explicação:
Lista as IDs das imagens dangling (imagens não tagueadas).
```bash docker images --filter "dangling=true" --format "{{.ID}}"**: ``` 
- **|**: O pipe (`|`) passa a saída do comando anterior como entrada para o próximo comando.
- **xargs docker rmi**: O comando `xargs` usa a saída anterior (IDs das imagens) como argumento para o comando `docker rmi`, removendo essas imagens.

### Passos:
1. **Liste as imagens dangling**:
   ```bash
   docker images --filter "dangling=true" --format "{{.ID}}"
   ```

2. **Remova essas imagens com `docker rmi` usando `xargs`**:
   ```bash
   docker images --filter "dangling=true" --format "{{.ID}}" | xargs docker rmi
   ```

Esse comando combinado removerá todas as imagens dangling do seu repositório Docker.

Para garantir que o comando `xargs` seja executado apenas se o primeiro comando retornar algum resultado, você pode usar a estrutura `if` junto com o comando `test` ou `[` no shell.

### Comando Completo:
```bash
if [ -n "$(docker images --filter "dangling=true" --format "{{.ID}}")" ]; then
  docker images --filter "dangling=true" --format "{{.ID}}" | xargs docker rmi
else
  echo "Nenhuma imagem dangling encontrada."
fi
```

### Explicação:
```bash **if [ -n "$(docker images --filter "dangling=true" --format "{{.ID}}")" ]**```: Verifica se o comando `docker images --filter "dangling=true" --format "{{.ID}}"` retorna algum resultado. O `-n` verifica se a string não está vazia.
- **then**: Se o comando retornar algum resultado (a string não estiver vazia), executa o comando `docker rmi`.
- **else**: Se o comando não retornar nenhum resultado (a string estiver vazia), exibe uma mensagem informando que nenhuma imagem dangling foi encontrada.
- **fi**: Fecha a estrutura `if`.

Essa abordagem garante que o comando `xargs docker rmi` só será executado se houver imagens dangling para remover.

Se precisar de mais alguma coisa ou tiver outras dúvidas, estou aqui para ajudar! 😊
