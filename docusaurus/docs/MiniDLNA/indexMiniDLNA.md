---
#sidebar_label: ''
sidebar_position: 1
---

# Instalação e Configuração
### O MiniDLNA é leve e fácil de configurar:

```bash title="1. Instalação"
sudo apt install minidlna
```

```bash title="2. Edite o arquivo de configuração:"
sudo nano /etc/minidlna.conf
```

```bash title="3. Adicione a pasta onde estão os arquivos de vídeo:"
media_dir=V,/caminho/para/seus/videos
media_dir=A,/caminho/para/suas/musicas
```

```bash title="4. Salve e reinicie o serviço:"
sudo systemctl restart minidlna
```

#### Agora a TV deve detectar o servidor DLNA. Como o Firestick não suporta nativamente DLNA, use o VLC para acessar as mídias. 

# Outras Configurações
No MiniDLNA, você pode adicionar múltiplos diretórios para vídeos, músicas e imagens no arquivo de configuração. Basta incluir várias linhas media_dir no /etc/minidlna.conf, assim:

```bash title="Salve e reinicie o serviço:"
media_dir=V,/caminho/para/videos1
media_dir=V,/caminho/para/videos2
media_dir=A,/caminho/para/musicas
media_dir=P,/caminho/para/imagens
```
💡 Legenda dos tipos de mídia:

> V → Vídeos

> A → Áudio

> P → Imagens

Após editar o arquivo, recarregue o banco de dados de mídia para que as mudanças tenham efeito:

```bash title="Salve e reinicie o serviço:"
sudo systemctl restart minidlna
```
```bash  title="Salve e reinicie o serviço:"
sudo minidlna -R
```
Isso deve fazer com que sua TV reconheça todos os diretórios adicionados! 🚀😃