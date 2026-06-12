---
tags: [itu-3, opu, tsp]
---
# Passo 1: Preparação do sensor

Este guia descreve como preparar um sensor AudioMoth antes da sua instalação em campo.

## Requisitos

Baixe os seguintes aplicativos de [Open Acoustic Devices](https://www.openacousticdevices.info/applications):

-   **Aplicativo Flash** (para desktop) – atualizar o firmware

-   **Aplicativo de Configuração** (para desktop) – carregar o cronograma de gravação

-   **Aplicativo Time** (para desktop) – configure o relógio do dispositivo

-   **Aplicativo Chime** (para dispositivos móveis) – defina o relógio no local (a partir do aplicativo para iPhone)
    loja ou Google Play Store para dispositivos Android)

::: dica
Certifique-se de que todos os aplicativos estejam atualizados. Os aplicativos de firmware e de tempo geralmente não exigem atualizações frequentes.

## Prepare o cartão microSD

Os dispositivos AudioMoths exigem um cartão microSD para gravação. Os criadores do AudioMoth testaram várias opções e descobriram que os cartões com a capacidade de ``Sandisk Extreme UHS Speed Class 3 (U3) microSDXC`` são os mais eficientes em termos de consumo de energia. Consulte o [Guia para Cartões SD](https://www.openacousticdevices.info/sd-card-guide) para obter mais informações. 

1.  Insira o cartão microSD no seu computador (você precisará de um cartão microSD).
    (adaptador).

2.  Formate o cartão para o formato **EXFAT**.

::: Aviso
Isso apaga todos os dados do cartão.
:::

### Instruções de formatação para Windows {$CODEVAR[n]}

1.  Insira o cartão microSD no seu computador usando um adaptador de microSD para SD.
    Adaptador para cartão.

2.  Abra o **Explorador de Arquivos** e localize a placa na seção **Este Computador**.

3.  Clique com o botão direito no cartão microSD e selecione **Formatar...**

    ![Windows Drive Formater](/img/guides/guide-audiomoth/windows_card_formater.jpg)

4.  No menu suspenso "**Sistema de Arquivos**", selecione **exFAT**.

5.  Deixe a opção "**Tamanho da unidade de alocação**" definida como **Padrão**.

6.  Certifique-se de que a opção "**Formatação Rápida**" esteja marcada.

7.  Clique em **Iniciar**.

8.  Quando o diálogo de confirmação aparecer, confirme que todos os dados serão
    serem apagados.

9.  Após a formatação ser concluída, clique em **OK**.

Remova a memória com segurança.

## Prepare a unidade AudioMoth

1.  Remova o dispositivo de sua carcaça.

2.  Mova o interruptor para a posição **USB/Desligado**.

    ![image of the AudioMoth with the switch in the off
    position](/img/guides/guide-audiomoth/am_switch.jpg)

3.  Remova as baterias antigas e o cartão microSD.

4.  Insira **três novas pilhas AA** (da mesma marca e tipo).

5.  Insira o cartão microSD formatado recentemente.

6.  Conecte o AudioMoth ao computador através de um cabo USB que seja capaz de transferência de dados.

## Atualizar o firmware

Utilize a versão do firmware que seja a mais recente, a menos que você precise de uma versão antiga por algum motivo. As versões estarão listadas na seção "Aplicativo de Flash".

1.  Abra o aplicativo Flash.

    ![This screenshot has not detected a device and cannot be "flashed"
    until one is connected](/img/guides/guide-audiomoth/1_am_flash_app.jpg)

2.  Baixe o firmware mais recente.

3.  Clique em **Flash AudioMoth**.

4.  Aguarde a confirmação de que a operação de flash foi concluída.
