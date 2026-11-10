## Como atualizar o projeto
### 1. Novas páginas
Devem ser criadas no diretório docusaurus/docs
```sh
cd docusaurus
```

### 2. Recompile usando 
```sh
npm run build
```


### 4. Teste com 
```sh
npm run start --watch
```

### 3. Push 
#### 3.1 Para preparar o projeto para fazer push para origin apague da raiz as pastas:
   - assets
   - blog
   - docs
   - img
   - markdown-page
```sh
rm -rf ../assets/ ../blog/ ../docs/ ../img/ ../markdown-page/
```

#### 3.2 Copie o conteúdo da pasta docusaurus/build para a raiz do projeto sobrescrevendo quando perguntado.
```sh
mv build/* ../
```

#### 3.3 Pronto para fazer push.
```sh
git push origin
```