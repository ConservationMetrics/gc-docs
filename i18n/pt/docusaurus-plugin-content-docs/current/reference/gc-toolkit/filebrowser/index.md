---
sidebar_position: 4
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---

# Filebrowser

[Filebrowser](https://filebrowser.org/) é um gerenciador de arquivos baseado na web que permite aos usuários navegar, fazer upload, baixar e compartilhar arquivos da instância do seu Guardian Connector.

## Como o Filebrowser é utilizado no Guardian Connector

O Filebrowser oferece funcionalidades essenciais de gerenciamento de arquivos para implantações do Guardian Connector:

- **Upload e download de arquivos** – Os usuários podem facilmente enviar arquivos para sua instância do Guardian Connector e baixar os recursos armazenados.
- **Geração de links compartilháveis** – Crie links que podem ser compartilhados para arquivos, permitindo a incorporação de recursos como imagens em páginas da web e o acesso ao [GC Explorer](/reference/gc-toolkit/gc-explorer/).

### Gerar links para compartilhamento

1. Com o arquivo ou diretório selecionado, clique no ícone "Compartilhar".

   ![Location of the Share icon](/img/reference/gc-toolkit/filebrowser/filebrowser-1.jpg)

2. Na janela que aparece, clique em "Compartilhar". (Observação: se não especificar a duração do compartilhamento, o link permanecerá válido indefinidamente).


   ![Share modal](/img/reference/gc-toolkit/filebrowser/filebrowser-2.jpg)

   :::important
   If you plan to embed media content e.g. in a GC Explorer view, do not enter a password, as embedding media will not work with a password set.
   :::

3. O modo fornecerá um "hash" único e um link para copiar, específico para o seu arquivo/diretório. O link terá o formato ``https://files.<community_alias>.guardianconnector.net/share/<hash>``.

   ![Hash link shown in the share modal](/img/reference/gc-toolkit/filebrowser/filebrowser-3.jpg)

4. Agora você pode compartilhar o link com outras pessoas, permitindo que elas acessem o arquivo ou a pasta.

:::dica
Para usar o link de compartilhamento em uma visualização do GC Explorer onde você deseja incorporar mídia (como imagens ou áudio), você precisará formatar o link de forma diferente. 

Em vez do link de compartilhamento mostrado acima, utilize o seguinte formato: ``https://files.<community_alias>.guardianconnector.net/api/public/dl/<hash>``

::: Aviso
Quando você gera um link de compartilhamento no Filebrowser, o link incluirá a palavra-chave única da sua comunidade (o "alias") na URL (por exemplo, ``https://files.<community_alias>.guardianconnector.net/share/<hash>``). Se você compartilhar este link publicamente (por exemplo, incorporando uma foto em um blog), o alias da sua comunidade se tornará visível para qualquer pessoa que tenha acesso ao link.

Para a maioria dos serviços do Guardian Connector, isso **não** permite que pessoas externas acessem seus projetos ou dados existentes — elas ainda precisariam ser convidadas para um projeto ou possuir um token de acesso. No entanto, para alguns serviços (como o CoMapeo), conhecer o alias pode permitir que alguém crie um novo projeto no seu servidor de arquivos, o que poderia ser explorado por um agente malicioso (embora isso seja considerado muito improvável).

**Recomendação:**  
- Compartilhe apenas os links do Filebrowser com pessoas de confiança.
- Se você estiver hospedando um servidor de arquivos CoMapeo, esteja ciente desse risco e considere medidas adicionais, como definir um limite máximo para o número de projetos que podem ser criados.
:::

## Documentation

Para obter informações detalhadas sobre como usar o Filebrowser, visite a [documentação oficial do Filebrowser](https://filebrowser.org/index.html).

:::Nota
O "Filebrowser" está atualmente em modo de manutenção. Estamos acompanhando o futuro dessa ferramenta e podemos decidir usar uma alternativa caso o desenvolvimento e a manutenção do "Filebrowser" estagnem.