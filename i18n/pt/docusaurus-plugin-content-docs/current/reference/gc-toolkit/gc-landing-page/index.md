---
sidebar_position: 1
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---

import ParamText from '@site/src/components/ParamText';
import ParamLink from '@site/src/components/ParamLink';

# Página Inicial do GC

A Landing Page do Guardian Connector é a **página inicial** do Guardian Connector da sua comunidade: a porta de entrada que você acessa após fazer login. Ela reúne tudo em um só lugar, para que você não precise lembrar endereços da web ou procurar pela ferramenta certa.

Na Landing Page você pode:

- Abra os **serviços** que sua comunidade usa (como Explorer, Superset, Windmill ou File Browser) com um único clique.
- Saiba mais sobre as **ferramentas que você pode usar com o Guardian Connector** para coletar e importar dados (como CoMapeo, KoboToolbox e mais).
- Se você é um administrador, pode gerenciar **contas e papéis de usuário**, configurar **definições de tema** e adicionar **aplicativos personalizados** para sua comunidade.

## 🔑 Entrar

Ao visitar a Landing Page pela primeira vez, você pode ser solicitado a se cadastrar ou fazer login. Após o cadastro, um membro da sua comunidade com acesso de administrador precisa **aprovar sua conta** e atribuir um papel antes que você possa ver os serviços. Até que isso aconteça, você não conseguirá acessar o Guardian Connector.

**O que você vê na Landing Page depende do seu papel.** Pessoas diferentes precisam de ferramentas diferentes, então a página mostra apenas os serviços que você tem permissão para usar. Se um serviço que você espera estiver faltando, ele pode não estar ativado para sua comunidade, ou seu papel pode ainda não incluir acesso a ele — entre em contato com o administrador da sua comunidade.

### 👤 Identificação do Usuário {#user-identification}

Uma vez logado, o centro do cabeçalho superior exibe seu endereço de e-mail. Isso ajuda você a confirmar rapidamente qual conta está ativa — particularmente ao trabalhar em computadores compartilhados.

## 🧭 Navegando na Landing Page

### 🎓 Tour Guiado {#guided-tour}

Ao abrir a Landing Page pela primeira vez, um **tour guiado** interativo usa marcações passo a passo para guiá-lo pela página. O tour se adapta ao seu papel e idioma localizado, apresentando:

- Cada cartão de serviço disponível (Explorer, Superset, File Browser, Windmill e quaisquer aplicativos personalizados)
- Ferramentas de coleta de dados que se conectam ao Guardian Connector
- Controles do cabeçalho para modo de exibição, idioma e logout
- Controles de administrador (Aplicativos Personalizados, Configurações de Tema e Gerenciamento de Usuários) se você estiver logado como **Admin**

O estado do seu tour é salvo no armazenamento local do seu navegador para que o tour não se repita automaticamente em futuras visitas. Você pode **pular** o tour a qualquer momento, ou **reproduzi-lo** quando quiser clicando no botão **?** no cabeçalho superior direito.

### 🌙 Modo Claro e Escuro {#dark-mode}

A Landing Page inclui suporte nativo para **modo claro** e **modo escuro**. Clique no ícone de exibição de lua/sol no cabeçalho superior direito para alternar entre os temas claro e escuro para corresponder à sua preferência ou ambiente de trabalho.

### 🌐 Seleção de Idioma

Clique no ícone de globo no cabeçalho superior direito para mudar o idioma de exibição usado em toda a Landing Page, incluindo o tour guiado.

## 🚀 Serviços Disponíveis

Esses são os serviços padrão do Guardian Connector que sua comunidade pode vincular a partir da Landing Page. Cada um aparece como um cartão que você pode clicar para abri-lo em uma nova aba.

![Guardian Connector Landing Page](/img/reference/gc-toolkit/gc-landing-page/landing-page-1.jpg)

- **[Explorer](/reference/gc-toolkit/gc-explorer/)**: Veja os dados da sua comunidade como mapas interativos, galerias de mídia e um painel de alertas.
- **[Superset](/reference/gc-toolkit/superset/)**: Crie e explore gráficos, painéis e visualizações a partir dos seus dados.
- **Windmill**: Execute e agende os fluxos de trabalho de automação que coletam e processam seus dados (consulte o [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/)).
- **[File Browser](/reference/gc-toolkit/filebrowser/)**: Navegue, baixe e gerencie os arquivos brutos e arquivos da sua comunidade.

Nem todos veem todos os serviços. Em geral, quanto mais avançada ou sensível for uma ferramenta, maior o papel necessário para abri-la — por exemplo, o Explorer está disponível para a maioria dos usuários logados, enquanto o Windmill é reservado para administradores.

Também é possível configurar a Landing Page para mostrar aplicativos personalizados, que são aplicativos que não fazem parte do conjunto padrão do Guardian Connector. Consulte [⚙️ Configurando Aplicativos Personalizados](#configuring-custom-apps) para mais informações.

## 🌐 Ferramentas que Você Pode Usar com o Guardian Connector

A Landing Page também apresenta as ferramentas de campo e plataformas que funcionam com o Guardian Connector. Esses são os aplicativos que sua comunidade pode usar para **coletar dados em campo** — dados que então fluem para o Guardian Connector para visualização e análise.

![Guardian Connector Landing Page](/img/reference/gc-toolkit/gc-landing-page/landing-page-2.jpg)

- **[CoMapeo](/reference/core-integrations/comapeo/)**: Mapeamento e monitoramento offline em um dispositivo móvel.
- **[KoboToolbox](/reference/core-integrations/kobotoolbox/)** e **ODK**: Formulários e pesquisas que funcionam online e offline.
- **[Timelapse](/reference/core-integrations/timelapse/)**: Revisão e anotação de imagens de armadilhas fotográficas para monitoramento da biodiversidade.

O Guardian Connector também se conecta com outras ferramentas como **ArcGIS Survey123**, **Locus Map**, **Global Forest Watch**, **SMART** e muito mais. Para saber tudo o que pode ser conectado, consulte o [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/).

## 🔧 Para Administradores

### 👥 Gerenciamento de Usuários {#user-management}

Se você é um **administrador**, a Landing Page oferece uma área de Gerenciamento de Usuários para controlar quem pode acessar o Guardian Connector da sua comunidade e o que eles podem fazer.

A partir daqui você pode:

- **Pesquisar** pessoas por nome ou e-mail.
- Veja o **status** de cada pessoa — se sua conta está *Aprovada* ou ainda *Pendente* — junto com seu papel e a última vez que fez login.
- **Aprovar (ou desaprovar) uma conta.** Somente usuários aprovados podem acessar os serviços.
- **Atribuir um papel** que decide quais serviços cada pessoa pode abrir.
- **Excluir uma conta** se não deveriam mais ter acesso.

Os papéis atualmente disponíveis, do menor para o maior acesso, são:

- **Logado**: Logado, mas ainda sem acesso a serviços restritos. Pode acessar apenas visualizações de conjuntos de dados públicos no [GC Explorer](/reference/gc-toolkit/gc-explorer/#dataset-visibility-control).
- **Convidado**: Acesso limitado, adequado para visitantes ou parceiros. Pode acessar visualizações de conjuntos de dados compartilhados com convidados no GC Explorer, e mapeia para o papel de **Gamma** no [Superset](/reference/gc-toolkit/superset/user-roles/).
- **Membro**: Acesso diário para membros da comunidade. Pode acessar visualizações de conjuntos de dados para membros no GC Explorer, e mapeia para o papel de **Alpha** no Superset.
- **Admin**: Acesso total a tudo — incluindo Windmill, todas as visualizações de conjuntos de dados, configurações e esta área de Gerenciamento de Usuários — e mapeia para o papel de **Admin** no Superset.

Quando você aprova alguém e atribui o papel correto, os serviços que essa pessoa tem permissão para usar aparecerão na sua Landing Page e suas permissões no [GC Explorer](/reference/gc-toolkit/gc-explorer/#dataset-visibility-control) e [Superset](/reference/gc-toolkit/superset/user-roles/) serão atualizadas no seu próximo login.

### 🎨 Configurações de Tema

As Configurações de Tema permitem personalizar a marca da sua comunidade na Landing Page.

A partir daqui, você pode adicionar:

- Um **URL do logotipo**, que aparece na página inicial.
- Um **URL de imagem de fundo**, que é usado como fundo na tela de login.

### ⚙️ Configurando Aplicativos Personalizados {#configuring-custom-apps}

Se a sua comunidade tem outros aplicativos rodando no Guardian Connector, a página de **Aplicativos Personalizados** permite criar cartões semelhantes aos serviços padrão — como Explorer, Superset e File Browser. Cada cartão abre em seu próprio subdomínio, para que as pessoas possam acessar seus aplicativos personalizados da Landing Page da mesma forma que abrem os aplicativos integrados.

Para cada aplicativo personalizado que você pode adicionar, um nome, subdomínio, descrição, ícone e tags.

## ℹ️ Qual Versão do Aplicativo Estou Usando?

If you ever need to know which version of the Landing Page you are using — for example, when reporting a problem — open the `/_info` endpoint on the app. Add `/_info` to the end of the Landing Page address in your browser (for example, <ParamLink template="https://{alias}.guardianconnector.net/_info" paramName="alias" defaultValue="alias">https://<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/_info</ParamLink>). You do not need to sign in.

Parecerá assim:

```json
{
  "tag": "20261012-189",
  "commit": "1234567890abcdef1234567890abcdef12345678",
  "buildId": "abcdef1234567890abcdef1234567890abcdef12",
  "startedAt": "2026-10-12T12:00:00.000Z"
}
```

A resposta identifica a construção em execução:

- **tag**: a versão implantada, escrita como uma data e número de compilação (`YYYYMMDD-<run>`).
- **commit**: o commit de origem a partir do qual essa versão foi construída.
- **startedAt**: a data e hora em que o aplicativo foi iniciado.
