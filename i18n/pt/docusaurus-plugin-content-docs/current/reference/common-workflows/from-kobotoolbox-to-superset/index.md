---
sidebar_position: 4
tags: [itu-3, opu, tsp]
---

import ParamText from '@site/src/components/ParamText';
import ParamLink from '@site/src/components/ParamLink';

# De KoboToolbox para o Superset

This document describes how to download form submission data from **KoboToolbox** and visualize the data in **Superset**, using **Windmill** and the **PostgreSQL** data warehouse included in **Guardian Connector**.  
The goal is to preserve your survey data, and to visualize it through dashboards. This is useful for monitoring ongoing surveys and creating clear visualizations for completed ones.

O fluxo de trabalho envolve as seguintes ferramentas:

- **[KoboToolbox](../../connected-aplicações/kobotoolbox/)** – A ferramenta para coletar dados por meio de questionários. (Fluxos de trabalho semelhantes podem ser adaptados para outras ferramentas de coleta de dados, como ODK ou Survey123, mas aqui nos concentraremos no KoboToolbox.)
- **[Moinho](../../gc-toolkit/gc-scripts-hub/)** – Lida com a ingestão e o processamento de dados, transferindo-os do KoboToolbox para o data warehouse.  
- **PostgreSQL**: O banco de dados onde o Guardian Connector armazena e disponibiliza seus dados para análise.  
- **[Superset](../../gc-toolkit/superset/)** – A ferramenta de visualização utilizada para criar painéis e gráficos com base nos dados armazenados.

## 1. Coleta de Dados: KoboToolbox

### Configuração única

Você precisa fazer isso apenas uma vez por conta do KoboToolbox – você não precisará repetir o processo para cada projeto que criar dentro da conta.

1. **Crie uma conta no KoboToolbox**  

   Se você ainda não tem um, siga a documentação oficial do KoboToolbox para [criar uma conta](https://support.kobotoolbox.org/quick_start.html#creating-an-account-and-signing-in).

:::informação

Certifique-se de criar uma conta no Kobotoolbox que você deseja utilizar para sua instância do Guardian Connector, pois o Guardian Connector terá acesso a todos os projetos da conta. Além disso, certifique-se de manter as credenciais da conta em segurança.

:::
   

2. Defina as variáveis do moinho de vento para o KoboToolbox

O Windmill será utilizado para obter os dados do Kobotoolbox e armazená-los no seu data warehouse.

   Você precisará compartilhar as seguintes informações com o seu administrador do **Windmill**:
   - Seu servidor KoboToolbox: Ou ``kc.kobotoolbox.org`` ou ``kf.kobotoolbox.org``.
   - Sua chave de API da conta: Você pode encontrá-la na aba ``Account Settings` → `Security` → `API Key`, e clicando no botão ``DISPLAY`` ao lado dessa etiqueta.

:::informação


### Apenas para administradores do Windmill

Se você é um **administrador do Windmill [Admin](/referência/gc-toolkit/gc-scripts-hub/papéis-de-usuário/#administrador)**, usará esses dados para configurar a conta no Windmill.

Isso é feito criando um **Recurso** no Windmill, que armazena as informações necessárias para acessar sua conta do KoboToolbox.

Para configurá-lo, você precisa:
1. Acesse sua instância do Windmill, conforme descrito abaixo em [Processamento de Dados: Windmill](#2-processamento-de-dados-windmill).
2. Vá para a seção "**Recursos**" no menu de navegação à esquerda.
3. Crie um novo Recurso com o botão ``+ New Resource`` no canto superior direito da página e adicione as seguintes informações no formulário:
   

   | Parameter | Value |
   |------------|-------------|
   | **Tipo de recurso**|  KoboToolbox |
   | **Caminho** | `f/connectors/kobotoolbox` |
   | **Descrição** | Explicação detalhada (opcional) |
   | **URL do servidor** | `https://kf.kobotoolbox.org` or `https://kc.kobotoolbox.org` |
   | **chave_de_api** | A chave de API obtida|

:::

### Fluxo de coleta de dados

1. **Crie um projeto no KoboToolbox**  
   
   Siga as instruções do KoboToolbox para [criar um projeto](https://support.kobotoolbox.org/quick_start.html#creating-your-first-project).

2. Adicione a conta que será utilizada com o Guardian Connector.  

Caso o proprietário do projeto não seja a mesma conta utilizada para o Guardian Connector, conforme definido na configuração, adicione-a ao projeto no KoboToolbox. (Consulte a [documentação sobre compartilhamento de projetos](https://support.kobotoolbox.org/managing_permissions.html)).
Certifique-se de conceder as permissões ``Manage project`` para que ele possa acessar os dados.
Esta conta será utilizada pelo Guardian Connector para baixar seus dados.

3. **Reúna os detalhes do projeto**  

   Você precisará das seguintes informações na etapa seguinte:
   - **Instância do KoboToolbox**: ou ``kf.kobotoolbox.org`` ou ``kc.kobotoolbox.org``
   - **ID do Projeto:** Você pode encontrar o ID do Projeto na página de resumo do seu projeto no KoboToolbox, que está disponível no URL.
   Por exemplo, para uma URL como ``https://kf.kobotoolbox.org/#/forms/a26w95BYpDoxBJbxDAaSbH/summary``, o ID do Projeto pode ser encontrado entre "forms/" e "/summary". Neste caso, seria: ``a26w95BYpDoxBJbxDAaSbH``

Depois de obter essas informações, prossiga para a configuração do moinho de vento.

## 2. Processamento de Dados: Molino

Acesse sua instância do Windmill em:

**<ParamLink template="https://windmill.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://windmill.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>**

No Windmill, os **agendamentos** são tarefas automatizadas que são executadas em intervalos específicos – por exemplo, a coleta regular de novos dados do KoboToolbox.

### Crie um novo cronograma

Configure um novo cronograma com os seguintes parâmetros:

| Parameter | Description |
|------------|-------------|
| **Resumo** | Descrição breve da tarefa |
| **Caminho** | `/f/connectors/kobotoolbox/...` |
| **Descrição** | Explicação detalhada (opcional) |
| **Cronograma** | Com que frequência a tarefa deve ser executada (você pode usar a interface do "Construtor Simplificado" para definir facilmente o cronograma) |
| Executável | Selecione "**Script**", e então escolha ``f/connectors/kobotoolbox/kobotoolbox_responses`` |
| **Kobotoolbox** | Um par de chaves de servidor e API já configurado pelo administrador do seu Windmill. |
| **id\_do\_formulário** | Seu identificador de formulário Kobo |
| **nome\_da\_tabela\_do\_banco\_de\_dados** | O nome da tabela no banco de dados para os dados importados |

:::dica

If you use a `db_table_name` that already exists, new rows and columns will be appended to that table.  
To avoid conflicts, we recommend using your formTitle as a base for your naming scheme, and respecting these nameing conventions:
- deve começar com uma letra
- pode incluir letras, sublinhado, números ou o símbolo de dólar ($).
- O seu comprimento máximo é de 63 caracteres.

:::

:::informação

Existem algumas convenções que consideramos úteis para manter sua instância do Windmill organizada:
- **Resumo**: ``Kobotoolbox: formTitle``, onde `formTitle` é o título do formulário no KoboToolbox.
- **Caminho:** `/f/connectors/kobotoolbox/formTitle`, com o mesmo título de formulário encontrado no resumo.
- **Agenda:** você pode usar o botão ``simplified builder``, que facilita a criação da configuração da agenda.

:::

Após salvar, você poderá ver sua programação na página "**Programações**".

### Verifique sua programação

1. Abra a página "**Horários**" e encontre seu novo horário (use a barra de pesquisa, se necessário).  
2. Você verá:
   - Um **gráfico dos resultados anteriores** (verde = sucesso, vermelho = erro)
   - Uma **lista de corridas** com registros detalhados.
   - Um menu "**Mais opções**" com um botão ``Run now``.
3. Clique em **Executar agora** para testar o agendamento manualmente.  
   - Uma notificação será exibida para confirmar que a execução foi agendada.  
   - Clique em "**Ir para a página de execução**" para visualizar o progresso e os registros.

Após a execução bem-sucedida do script agendado, seus dados estarão disponíveis no banco de dados PostgreSQL do Guardian Connector.

## 3. Visualização de Dados: Superset

Acesse sua instância do Superset em:

**<ParamLink template="https://superset.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://superset.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>**

Após fazer login, você pode criar conjuntos de dados, gráficos e painéis de controle usando o botão ``+`` no canto superior direito.

### Criar um conjunto de dados

1. Clique no botão ``+`` → **Dados** → **Criar conjunto de dados**  
2. Escolha:
   - **Banco de dados:** `Warehouse`  
   - **Esquema:** `public`  
   - **Tabela:** o mesmo nome que você definiu em ``db_table_name`` no Windmill  
3. O Superset exibirá os nomes das colunas da tabela para que você possa confirmar sua seleção.  
4. Se estiver correto, clique em **CRIAÇÃO DO GRANDE DADOS E CRIAÇÃO DE GRÁFICO**.

Você será redirecionado para a tela de criação do gráfico.

### Criar um Gráfico

1. Na página inicial do Superset, clique no botão ``+`` → **Gráfico**.  
2. Selecione um conjunto de dados (o que você acabou de criar).  
3. Selecione um tipo de gráfico – por exemplo, **Gráfico com Números Grandes**.  
4. Clique em **CRIAR GRÁFICO NOVO**.

No editor de gráficos:

- **Nome:** Escolha como o gráfico aparecerá nas listas de resultados.  
- **Métrica:** Define quais dados o gráfico exibe.  
  Para um gráfico de grande número, utilize a métrica ``COUNT(*)`` arrastando-a do campo *Fonte do gráfico* para o campo *Métrica* na seção **DADOS**.  

You can further customize your chart in the **DATA** and **CUSTOMIZE** tabs.  
When done, click **CREATE CHART**, then **SAVE** in the top-right corner.

### Crie um painel de controle

1. Clique no botão ``+`` → **Painel**.  
2. Você verá uma tela em branco onde poderá adicionar gráficos e elementos de layout.  
3. Arraste os gráficos da barra lateral direita para a área de trabalho do painel.  
4. Ajuste sua posição e tamanho conforme necessário.  
5. Dê um nome ao seu painel de controle (canto superior esquerdo) e clique em **SALVAR** (canto superior direito).

By default, the dashboard is saved as a **draft**.  
To publish it for your team:

- Clique no rótulo "**Rascunho**" ao lado do título → ele muda para "**Publicado**".  
- O painel agora aparecerá na seção "**Painéis**" do seu ambiente Superset.

:::dica

Para obter mais detalhes sobre como criar gráficos e painéis, você pode consultar a documentação específica do Superset: \[documentação específica do Superset] (link para o repositório).

---

✅ **Você concluiu todo o processo!**
  
Os dados da sua pesquisa agora fluem automaticamente de `$CODEVAR[KoboToolbox]` para `Windmill` e depois para `PostgreSQL`, pronto para visualização e análise.
