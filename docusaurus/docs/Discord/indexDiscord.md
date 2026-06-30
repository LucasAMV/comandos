---
sidebar_label: 'Linux - Wayland'
sidebar_position: 1
---

# Executar no Linux usando compositor Wayland

O problema acontece porque o aplicativo oficial do Discord (em Electron) ainda não suporta nativamente o protocolo WebRTC do Wayland para captura de tela via PipeWire sem alguns ajustes.

Verifique que está usando Wayland: ```echo $XDG_SESSION_TYPE```

Aqui estão as duas melhores soluções para resolver isso mantendo o Wayland ativo:

---

## Solução 1: Utilizar o Discord no Navegador (A mais estável)

A forma mais rápida e que funciona perfeitamente com o Wayland é utilizar o Discord através de um navegador baseado em Chromium (como **Google Chrome**, **Brave**, **Microsoft Edge** ou o próprio **Chromium**).

Para que o navegador consiga compartilhar a tela no Wayland, você só precisa ativar uma flag interna:

1. Abra o Chrome (ou Brave/Edge).
2. Digite na barra de endereços: `chrome://flags/#enable-webrtc-pipewire-capturer`
3. Mude a opção **WebRTC PipeWire support** para **Enabled**.
4. Reinicie o navegador.

Ao acessar o Discord Web, o Ubuntu abrirá uma janela do sistema perguntando exatamente qual tela ou janela você deseja compartilhar de forma segura.

---

## Solução 2: Forçar o App do Discord (Deb/Flatpak) a usar Wayland e PipeWire

Se você faz questão de usar o aplicativo instalado, o "truque" consiste em passar parâmetros para o Electron (o motor do app) entender que deve rodar nativamente no Wayland e usar o PipeWire para capturar a tela.

### Se você usa a versão Flatpak (Recomendado para Wayland)

A versão em Flatpak costuma lidar melhor com permissões de sandbox no Wayland. Abra o terminal e execute o seguinte comando para dar permissão de acesso ao PipeWire e forçar o modo Wayland:

```bash
flatpak override --user --socket=wayland --filesystem=xdg-run/pipewire com.discordapp.Discord

```

Depois, para abrir o Discord com suporte à captura de tela, você deve iniciá-lo passando as flags do Electron:

```bash
flatpak run com.discordapp.Discord --enable-features=UseOzonePlatform --ozone-platform=wayland --enable-features=WebRTCPipeWireCapturer

```

### Se você usa a versão `.deb` tradicional

Você precisará editar o lançador do Discord para que ele sempre abra com essas flags.

1. Copie o arquivo `.desktop` para sua pasta local:
```bash
cp /usr/share/applications/discord.desktop ~/.local/share/applications/

```


2. Abra o arquivo para edição:
```bash
nano ~/.local/share/applications/discord.desktop

```


3. Procure a linha que começa com `Exec=` e adicione as flags de Wayland e PipeWire ao final do comando. Ela deve ficar parecida com isso:
```text
Exec=/usr/share/discord/Discord --enable-features=UseOzonePlatform --ozone-platform=wayland --enable-features=WebRTCPipeWireCapturer

```


4. Salve (`Ctrl+O`, `Enter`) e saia (`Ctrl+X`).

---

## Verificação Importante (Caso ainda não funcione)

Para que o compartilhamento funcione no Wayland, o Ubuntu precisa dos pacotes de "portal" ativos. No Ubuntu 24.04 eles já vêm por padrão, mas certifique-se de que estão instalados:

```bash
sudo apt install xdg-desktop-portal xdg-desktop-portal-gnome

```

Após instalar ou configurar qualquer uma das opções acima, **reinicie a sua sessão** (faça Log Out e Log In) para garantir que todas as permissões do Wayland e do PipeWire sejam aplicadas corretamente.