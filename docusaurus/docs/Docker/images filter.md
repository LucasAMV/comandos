---
sidebar_label: 'images --filter'
sidebar_position: 1
---

# images --filter

Sim, o comando `docker images` possui o parâmetro `--filter`, que permite filtrar a lista de imagens com base em determinados critérios. Aqui estão alguns dos filtros disponíveis e como usá-los:

### Filtros Disponíveis:
1. **dangling**: Imagens que não possuem tags associadas.
   ```bash
   docker images --filter "dangling=true"
   ```

2. **label**: Filtra imagens com base nas etiquetas (labels) atribuídas.
   ```bash
   docker images --filter "label=<key>=<value>"
   ```

3. **before**: Imagens criadas antes de uma determinada imagem.
   ```bash
   docker images --filter "before=<image>:<tag>"
   ```

4. **since**: Imagens criadas desde uma determinada imagem.
   ```bash
   docker images --filter "since=<image>:<tag>"
   ```

5. **reference**: Filtra imagens com base no nome do repositório ou tag.
   ```bash
   docker images --filter "reference=<repository>:<tag>"
   ```

### Exemplos de Uso:

1. **Listar Imagens Dangling**:
   ```bash
   docker images --filter "dangling=true"
   ```

2. **Listar Imagens com uma Etiqueta Específica**:
   Suponha que você tenha uma imagem com a etiqueta `version=1.0`.
   ```bash
   docker images --filter "label=version=1.0"
   ```

3. **Listar Imagens Criadas Antes de uma Imagem Específica**:
   Suponha que você tenha uma imagem `myrepo/myimage:latest` e deseja listar imagens criadas antes dela.
   ```bash
   docker images --filter "before=myrepo/myimage:latest"
   ```

4. **Listar Imagens Criadas Desde uma Imagem Específica**:
   Suponha que você tenha uma imagem `myrepo/myimage:latest` e deseja listar imagens criadas desde ela.
   ```bash
   docker images --filter "since=myrepo/myimage:latest"
   ```

5. **Listar Imagens de um Repositório Específico**:
   Suponha que você queira listar imagens do repositório `myrepo/myimage`.
   ```bash
   docker images --filter "reference=myrepo/myimage"
   ```

### Combinando Filtros:
Você também pode combinar múltiplos filtros para refinar ainda mais a lista de imagens:

```bash
docker images --filter "dangling=false" --filter "label=version=1.0"
```

### Comando Formatado para Mostrar Apenas IDs:
Para listar apenas os IDs das imagens de um repositório específico usando o filtro `reference`:

```bash
docker images --filter "reference=<repository>:<tag>" --format "{{.ID}}"
```

**Exemplo**:
```bash
docker images --filter "reference=myrepo/myimage" --format "{{.ID}}"
```

Isso retornará uma lista dos IDs das imagens do repositório `myrepo/myimage`.

Essas opções de filtro permitem que você refine a lista de imagens de acordo com suas necessidades específicas. Se precisar de mais alguma coisa ou tiver outras dúvidas, estou aqui para ajudar! 😊
