---
#sidebar_label: ''
sidebar_position: 1
---

# Instalação e Configuração

Na página oficial da Checkpoint
https://support.checkpoint.com/results/download/22824

Também está disponível na versão web da VPN.


Guia de Instalação:
https://devopslite.com/how-to-install-check-point-vpn-client-in-linux/

Primeiro instalar cshell_install.sh depois snx_install.sh



📁 Onde o SNX guarda dados temporários?
Embora o certificado não seja salvo, o SNX pode criar arquivos temporários ou de configuração em:

/usr/bin/snx → binário principal

/etc/snx/ → pode conter configurações (se existir)

/tmp/ → arquivos temporários durante a execução

~/.snx/ → em algumas versões, pode conter cache ou logs (raro)







Remover cache antigo e forçar nova validação

sudo rm -rf ~/.snx
sudo rm -rf /tmp/snx*








O arquivo root.db criado em /etc/snx/ quando você conecta como root é um banco de dados local usado pelo SNX para armazenar informações da conexão VPN, incluindo:

📦 O que contém o root.db
Certificado do gateway VPN que você aceitou

Fingerprint (impressão digital) do certificado

Informações de sessão como IP, porta, e parâmetros de conexão

Possivelmente credenciais temporárias ou tokens de autenticação (dependendo da configuração do gateway)





⚠️ Implicações
Se você tentar conectar como usuário normal, o SNX não consegue criar ou acessar esse arquivo, o que pode causar falha na conexão ou travamento.

O uso de sudo contorna isso, mas não é ideal para automação ou segurança.





🛠️ Solução alternativa
Você pode tentar criar um banco de dados para seu usuário, copiando o root.db e ajustando permissões:

bash
sudo cp /etc/snx/root.db ~/.snx/devcansado.db
sudo chown $USER:$USER ~/.snx/devcansado.db
Depois, edite o SNX para usar esse arquivo (se possível via parâmetro ou configuração). Infelizmente, o SNX não documenta bem essa parte, então pode exigir testes.

Não foi preciso dar permissão ao arquivo mas acabei setando o owner como meu usuário para evitar erros:
sudo chown devcansado:devcansado devcansado.db