---
#sidebar_label: ''
sidebar_position: 1
---

# Instalação do Samba

[Tutorial oficial do Ubuntu](https://ubuntu.com/tutorials/install-and-configure-samba#2-installing-samba)

```bash title="Para instalar:"
sudo apt install samba
```

```bash title="Para checar que está instalado:"
whereis samba
```

# Configuração

```bash title="Crie um diretório para compartilhar:"
mkdir /home/<username>/sambashare/
```

```bash title="Para adicionar um novo diretório, edite o arquivo de configuração do Samba:"
sudo nano /etc/samba/smb.conf
```

```bash title="Adicione no final do arquivo:"
[SambaShare]
comment = Samba on Ubuntu
path = /home/lucas/SambaShare
read only = no
browsable = yes
```

```bash title="Após ter salvo o arquivo, reinicie o serviço"
sudo service smbd restart
```

```bash title="Libere o Samba no firewall"
sudo ufw allow samba
```