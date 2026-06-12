---
sidebar_position: 5
tags: [itu-3, opu, tsp]
---
import ParamText from '@site/src/components/ParamText';
import ParamLink from '@site/src/components/ParamLink';

# De CoMapeo para o Explorer

Este guia é destinado aos operadores do Guardian Connector [(/reference/gc-toolkit/gc-scripts-hub/user-roles/#operator)] para que consigam criar um fluxo de dados de **CoMapeo** para um mapa e visualizações da galeria no **GuardianConnector Explorer**. Esse processo começa com a coleta de dados no CoMapeo e termina com visualizações personalizáveis de mapas e galerias.

O objetivo é preservar seus dados do CoMapeo e visualizá-los através de mapas interativos. Isso é útil para monitorar a coleta contínua de dados e criar visualizações claras para análise.

O fluxo de trabalho envolve as seguintes ferramentas:

- **[Comapeo](../../connected-aplicações/comapeo/)** – A aplicação de monitoramento e mapeamento territorial.
- **[Moinho](../../gc-toolkit/gc-scripts-hub/)** – Lida com a ingestão e o processamento de dados, transferindo-os do CoMapeo para o data warehouse.
- **PostgreSQL**: O banco de dados onde o Guardian Connector armazena e disponibiliza seus dados para análise.
- **[GuardianConnector Explorer](../../gc-toolkit/gc-explorer/)** – A ferramenta de visualização utilizada para criar vistas de mapa com base nos dados armazenados.

## 1. Coleta de Dados: Mapeamento

### Configuração única

É preciso fazer isso apenas uma vez para configurar a aplicação CoMapeo.

1.  **Instale o CoMapeo**

    Se você ainda não o tem, instale-o [na Google Play Store](https://play.google.com/store/apps/details?id=com.comapeo).

2.  **Configure sua conta**

    Abra o aplicativo e siga as instruções para configurar sua conta de usuário.

### Fluxo de coleta de dados

Nosso trabalho será seguir a documentação oficial da CoMapeo para obter instruções detalhadas sobre como criar projetos e coletar dados.
Em resumo, você precisa:

1.  **Crie um projeto CoMapeo**

    O projeto incluirá todas as suas observações, incluindo imagens, áudios, gravações e anotações. Ele permitirá que você colabore com outras pessoas na coleta de dados. Este projeto será usado para preservar os dados dentro do Guardian Connector.

2.  **Trocar os dados do projeto CoMapeo com o Guardian Connector**

Para trocar dados de um projeto com sua instância do Guardian Connector, você precisa configurar seu Servidor de Arquivo dentro do CoMapeo.
    - Acesse as configurações do seu projeto dentro do CoMapeo.
    - Add your archive server using the URL of your CoMapeo archive server within Guardian Connector: <ParamLink template="https://comapeo.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://comapeo.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>

Após o aplicativo CoMapeo confirmar que você adicionou com sucesso seu servidor de arquivo do CoMapeo, você poderá trocar seus dados com o servidor de arquivo na tela de troca do CoMapeo.

:::informação

**Não compartilhe** o endereço do seu servidor CoMapeo com ninguém em quem você não confie, pois ele fornece acesso a todos os dados coletados nos seus projetos CoMapeo.

:::

## 2. Processamento de Dados: Molino

Se você for o usuário **Windmill [Administrador](/referência/gc-toolkit/gc-scripts-hub/funções-do-usuário/#administrador)** dentro da sua instância do Guardian Connector, há um passo adicional que você precisa realizar **apenas uma vez por instância do Guardian Connector**.

Você precisa configurar seu script do Windmill para obter seus dados do servidor de arquivos do CoMapeo e armazená-los em seu data warehouse.

Acesse sua instância do Windmill em:

**<ParamLink template="https://windmill.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://windmill.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>**

No Windmill, você poderá agendar um script para buscar automaticamente novos dados do servidor CoMapeo Archive e carregá-los no seu data warehouse.

### Crie um recurso para credenciais de CoMapeo

Você precisará configurar um **Recurso** do tipo `comapeo_server`, com as seguintes informações:
- Server URL: **<ParamLink template="https://comapeo.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://comapeo.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>**
- Server Bearer Token: You can find this token in your Comapeo Archive Server's settings within Caprover in this link: **<ParamLink template="https://captain.{alias}.guardianconnector.net/#/apps/details/comapeo" paramName="alias" defaultValue="alias">https://captain.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/#/apps/details/comapeo</ParamLink>** , in the **App Configs** section, you will find the `SERVER_BEARER_TOKEN` Environment Variable.

### Crie um novo cronograma

Na página "**Horários**", crie um novo horário com os seguintes parâmetros:

| Parameter | Description |
|------------|-------------|
| **Resumo** | Breve descrição da tarefa (por exemplo, ``CoMapeo: fetch data``) |
| **Caminho** | `f/connectors/comapeo/fetch_data` |
| **Descrição** | Explicação detalhada (opcional) |
| **Cronograma** | Com que frequência a tarefa deve ser executada (você pode usar a interface do "Construtor Simplificado" para definir facilmente o cronograma) |
| Executável | Selecione "**Script**", e então escolha ``f/connectors/comapeo/comapeo_observations`` |
| **comapeo**| O recurso ``comapeo_server`` que você definiu anteriormente. |
| **prefixo\_da\_tabela\_de\_banco\_de\_dados** |  O nome da tabela do banco de dados para os dados importados terá este prefixo adicionado. |

Utilize o botão ``Save`` no canto superior direito para salvar sua programação.

### Verifique sua programação

1.  Abra a página "**Horários**" e localize seu novo horário.
2.  Você verá uma lista de corridas anteriores e um menu "**Mais opções**" (três pontos) à direita da sua programação.
3.  Clique no menu e selecione "**Executar agora**" para testar manualmente a programação.
4.  Você pode acessar a aba "**Executando**" para verificar se está funcionando corretamente.

Depois que o seu script Windmill estiver em execução, você terá seus dados disponíveis em uma tabela de banco de dados e os arquivos CoMapeo disponíveis no seu navegador de arquivos.

O nome da tabela seguirá o seguinte formato: `{db_table_prefix}_{mapeo project name}`.

## 3. Visualização de Dados: Explorador

Acesse sua instância do Explorer em:

**<ParamLink template="https://explorer.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://explorer.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>**

:::informação

Para configurar a visualização do seu Explorer, o usuário precisa ter acesso de administrador. Você pode solicitar ao administrador do seu Guardian Connector para definir seu papel.

:::

### Configurar a visualização do Explorador

1.  Faça login no Explorador

    Utilize suas credenciais de administrador para fazer login.

2.  **Configuração de Acesso**

    Após fazer o login, você encontrará um botão "**Configuração**" na parte superior da janela do Explorador para começar a configurar suas visualizações.

3.  **Crie suas novas visualizações**

    -   Clique no botão "**+ Adicionar nova tabela**" e selecione uma tabela na lista, depois clique em "**Confirmar**".
    -   Encontre a nova tabela disponível e acesse as configurações clicando no botão de menu ao lado dela.
        As configurações principais a serem configuradas são:

| Parameter | Description |
| :--- | :--- |
| Opiniões | Map, Gallery |
| **Estilo Mapbox** | Você precisará de uma conta Mapbox para acessar um estilo de mapa. Obtenha o URL do estilo no formato ``mapbox://styles/{username}/{styleId}`.` Você pode encontrar este URL na sua conta Mapbox Studio, na seção "**Estilos**". Clique no menu de opções para o estilo desejado e selecione a opção "**URL do Estilo**" para copiá-lo. |
| **Token de acesso do Mapbox** | Você pode obter isso na página da sua conta do Mapbox. Vá para a seção **Tokens** e clique em **+ Criar um token**. Dê um nome significativo ao token, clique em **Criar token**, e então copie o token gerado para usar no Explorador. |
| **Nível de zoom** | O nível de zoom para a visualização do mapa (de 0 a 22). |
| **Latitude do centro** | A latitude do ponto central para a visualização do mapa. |
| **Longitude do centro** | A latitude do ponto central para a visualização do mapa. |
| **Caminho base para mídia** | This is the URL used to share images and audio files downloaded from CoMapeo. To get this URL, go to your Filebrowser at **<ParamLink template="https://filebrowser.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://filebrowser.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>**, locate the folder configured in your Windmill instance, and click the **Share** button. Please see the [Filebrowser: generating share links](/reference/gc-toolkit/filebrowser/#generating-share-links) section for more guidance on how to format the share link for use in GC Explorer. |

:::informação

Para determinar parâmetros de mapa, como o nível de zoom e a latitude/longitude do centro, você pode se beneficiar da ferramenta "[Assistente de Localização da Mapbox](https://labs.mapbox.com/location-helper/)" da Mapbox.

:::

5.  **Publique as Opiniões**

Depois de salvar, seus novos mapas e visualizações da galeria estarão visíveis para os usuários que acessam a instância do Explorer.

---

✅ **Você concluiu todo o processo!**

Seus dados do CoMapeo agora fluem automaticamente de CoMapeo → Windmill → PostgreSQL → Explorer, estando prontos para visualização e análise.