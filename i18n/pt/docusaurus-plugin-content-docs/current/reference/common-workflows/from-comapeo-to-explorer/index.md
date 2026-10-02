---
sidebar_position: 5
tags: [itu-3, opu, tsp]
---
import ParamText from '@site/src/components/ParamText';
import ParamLink from '@site/src/components/ParamLink';

# De CoMapeo para Explorer

Este guia é para [operadores](/reference/gc-toolkit/gc-scripts-hub/user-roles/#operator) do Guardian Connector criarem um fluxo de trabalho de dados do **CoMapeo** para visualizações de mapa e galeria do **Guardian Connector Explorer**. Este processo começa com a coleta de dados do CoMapeo e termina com um mapa e visualizações de galeria configuráveis.
O objetivo é preservar seus dados do CoMapeo e visualizá-los por meio de mapas interativos. Isso é útil para monitorar a coleta de dados em andamento e criar visualizações claras para análise.

O fluxo de trabalho envolve as seguintes ferramentas:

- **[CoMapeo](../../core-integrations/comapeo/)** – O aplicativo de monitoramento e mapeamento de território.
- **[Windmill](../../gc-toolkit/gc-scripts-hub/)** – Lida com a ingestão e processamento de dados, transferindo-os do CoMapeo para o data warehouse.
- **PostgreSQL** – O banco de dados onde o Guardian Connector armazena e disponibiliza seus dados para análise.
- **[Guardian Connector Explorer](../../gc-toolkit/gc-explorer/)** – A ferramenta de visualização usada para criar visualizações de mapa baseadas nos dados armazenados.

## 1. Coleta de Dados: CoMapeo

### Configuração única

Você só precisa fazer isso uma vez para configurar o aplicativo CoMapeo.

1.  **Instalar CoMapeo**

    Se você ainda não o tem, instale-o [na Play Store](https://play.google.com/store/apps/details?id=com.comapeo).

2.  **Inicialize sua conta**

    Abra o aplicativo e siga as instruções para configurar sua conta de usuário.

### Fluxo de trabalho de Coleta de Dados

Nós nos referiremos à documentação oficial do CoMapeo para instruções detalhadas sobre como criar projetos e coletar dados.
Em resumo, você precisa:

1.  **Criar um projeto CoMapeo**

    O projeto conterá todas as suas observações, incluindo imagens, áudios, trilhas e pontos. Ele permitirá que você colabore com outras pessoas na coleta de dados. Este projeto será usado para preservar os dados dentro do Guardian Connector.

2.  **Trocar dados do projeto CoMapeo com o Guardian Connector**

Para trocar dados de um projeto com sua instância do Guardian Connector, você precisa configurar seu Servidor de Arquivo dentro do CoMapeo.
    - Vá para as configurações do seu projeto dentro do CoMapeo.
    - Add your archive server using the URL of your CoMapeo archive server within Guardian Connector: <ParamLink template="https://comapeo.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://comapeo.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>

Assim que o aplicativo CoMapeo confirmar que você adicionou com sucesso seu servidor de arquivo CoMapeo, você poderá trocar seus dados com o servidor de arquivo na tela de troca do CoMapeo.

:::info

**Não compartilhe** o URL do seu CoMapeo Archive Server com ninguém em quem você não confia, pois ele fornece acesso a todos os dados coletados nos seus projetos CoMapeo.

:::

## 2. Processamento de Dados: Windmill

Se você é o **Windmill [Admin](/reference/gc-toolkit/gc-scripts-hub/user-roles/#administrator)** em sua instância do Guardian Connector, há uma etapa extra que você precisa fazer **uma única vez por instância do Guardian Connector**.

Você precisa configurar seu script Windmill para obter seus dados do servidor de arquivo CoMapeo para seu data warehouse.

Acesse sua instância Windmill em:

**<ParamLink template="https://windmill.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://windmill.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>**

No Windmill, você agendará um script para buscar automaticamente novos dados do CoMapeo Archive Server e carregá-los em seu data warehouse.

### Criar um Recurso para credenciais CoMapeo

Você precisará configurar um **Resource** do tipo `comapeo_server` com:
- Server URL: **<ParamLink template="https://comapeo.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://comapeo.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>**
- Server Bearer Token: You can find this token in your Comapeo Archive Server's settings within Caprover in this link: **<ParamLink template="https://captain.{alias}.guardianconnector.net/#/apps/details/comapeo" paramName="alias" defaultValue="alias">https://captain.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/#/apps/details/comapeo</ParamLink>** , in the **App Configs** section, you will find the `SERVER_BEARER_TOKEN` Environment Variable.

### Criar uma nova programação

Na página **Schedules**, crie uma nova programação com os seguintes parâmetros:

| Parameter | Description |
|------------|-------------|
| **Resumo** | Breve descrição da tarefa (ex: `CoMapeo: fetch data`) |
| **Caminho** | `f/connectors/comapeo/fetch_data` |
| **Descrição** | Explicação detalhada opcional |
| **Programação** | Com que frequência a tarefa deve ser executada (você pode usar a interface de usuário "Simplified Builder" para definir facilmente a programação) |
| **Executável** | Escolha **Script**, então selecione `f/connectors/comapeo/comapeo_observations` |
| **comapeo**| O recurso `comapeo_server` que você definiu anteriormente |
| **db_table_prefix** |  O nome da tabela do banco de dados para os dados importados terá este prefixo adicionado. |

Usando o botão `Save` no canto superior direito para salvar sua programação.

### Testar sua programação

1.  Abra a página **Schedules** e localize sua nova programação.
2.  Você verá uma lista de execuções anteriores e um menu **More options** (três pontos) à direita da sua programação.
3.  Clique no menu e selecione **Run now** para testar manualmente a programação.
4.  Você pode ir para a aba **Runs** para vê-lo executando com sucesso.

Assim que seu script Windmill estiver em execução, você terá seus dados disponíveis em uma tabela de banco de dados e seus arquivos CoMapeo disponíveis em seu navegador de arquivos.

O nome da tabela estará no formato: `{db_table_prefix}_{mapeo project name}`.

## 3. Visualização de Dados: Explorer

Acesse sua instância do Explorer em:

**<ParamLink template="https://explorer.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://explorer.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>**

:::info

Para configurar sua visualização do Explorer, seu usuário precisa ter acesso de administrador. Você pode pedir ao seu administrador do Guardian Connector para definir sua função.

:::

### Configurar Visualização do Explorer

1.  **Fazer login no Explorer**

    Use suas credenciais de administrador para fazer login.

2.  **Acessar Configuração**

    Depois de fazer login, você encontrará um botão **Configuration** na parte superior da janela do Explorer para começar a configurar suas visualizações.

3.  **Crie suas novas Visualizações**

    -   Clique no botão **+ Add new table** e escolha uma tabela da lista, depois clique em **Confirm**.
    -   Localize sua nova tabela disponível e entre na configuração clicando no botão de menu à direita dela.
        As principais configurações a serem definidas são:

| Parameter | Description |
| :--- | :--- |
| **Visualizações** | Map, Gallery |
| **Estilo do Mapbox** | Você precisará de uma conta Mapbox para acessar um Map Style. Obtenha o Style URL no formato `mapbox://styles/{username}/{styleId}`. Você pode encontrar este URL em sua conta Mapbox Studio, na seção **Styles**. Clique no menu de opções do estilo desejado e selecione a opção **Style URL** para copiá-lo. |
| **Mapbox Access Token** | Você pode obtê-lo na página da sua conta Mapbox. Vá para a seção **Tokens** e clique em **+ Create a token**. Dê um nome significativo, clique em **Create token** e, em seguida, copie o token gerado para usar no Explorer. |
| **Nível de zoom** | O nível de zoom para a visualização do mapa (0-22). |
| **Latitude central** | A latitude do ponto central para a visualização do mapa. |
| **Longitude central** | A longitude do ponto central para a visualização do mapa. |
| **Caminho base para mídia** | This is the URL used to share images and audio files downloaded from CoMapeo. To get this URL, go to your File Browser at **<ParamLink template="https://files.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://files.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>**, locate the folder configured in your Windmill instance, and click the **Share** button. Please see the [File Browser: generating share links](/reference/gc-toolkit/filebrowser/#generating-share-links) section for more guidance on how to format the share link for use in GC Explorer. |

:::info

Para determinar parâmetros de mapa como o nível de zoom e a latitude/longitude central, você pode se beneficiar do uso da ferramenta [Mapbox's Location Helper](https://labs.mapbox.com/location-helper/).

:::

5.  **Publicar as Visualizações**

Uma vez salvas, suas novas visualizações de mapa e galeria estarão visíveis para os usuários que acessarem a instância do Explorer.

---

✅ **Você completou o fluxo de trabalho completo!**

Seus dados do CoMapeo agora fluem automaticamente de CoMapeo → Windmill → PostgreSQL → Explorer, prontos para visualização e análise.