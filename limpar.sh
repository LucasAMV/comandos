#!/bin/bash

# Garante que o script mude para o diretório onde ele próprio está localizado
cd "$(dirname "$0")" || exit 1

# Arrays com as pastas e arquivos que devem ser apagados
PASTAS=(
    "assets"
    "blog"
    "docs"
    "img"
    "markdown-page"
)

ARQUIVOS=(
    ".nojekyll"
    "404.html"
    "index.html"
    "sitemap.xml"
)

echo "==========================================="
echo " 1. Iniciando a limpeza do diretório..."
echo "==========================================="

# Removendo as pastas (e seus conteúdos) se elas existirem
for pasta in "${PASTAS[@]}"; do
    if [ -d "$pasta" ]; then
        rm -rf "$pasta"
        echo "[Pasta] Removida: $pasta"
    fi
done

# Removendo os arquivos se eles existirem
for arquivo in "${ARQUIVOS[@]}"; do
    if [ -f "$arquivo" ]; then
        rm -f "$arquivo"
        echo "[Arquivo] Removido: $arquivo"
    fi
done

echo ""
echo "==========================================="
echo " 2. Copiando novos arquivos do Build..."
echo "==========================================="

ORIGEM="./docusaurus/build"

# Verifica se a pasta de build do Docusaurus existe antes de copiar
if [ -d "$ORIGEM" ]; then
    # Copia todo o conteúdo (-r recursivo, -p preserva atributos) para o diretório atual (.)
    cp -rp "$ORIGEM"/. .
    echo "[Sucesso] Conteúdo de '$ORIGEM' copiado para a raiz!"
else
    echo "[Erro] A pasta de origem '$ORIGEM' não foi encontrada."
    echo "Certifique-se de rodar o build do Docusaurus antes deste script."
    exit 1
fi

echo ""
echo "Processo concluído com sucesso!"