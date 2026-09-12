---
sidebar_position: 1
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---

# Página Inicial do GC

A Página Inicial do Guardian Connector é a **página inicial** do Guardian Connector da sua comunidade: a porta de entrada para onde você chega depois de fazer login. Ela reúne tudo em um só lugar, então você não precisa memorizar endereços da web ou procurar pela ferramenta certa.

Na Página Inicial, você pode:

- Abra os **serviços** que sua comunidade usa (como Explorer, Superset, Windmill ou File Browser) com um único clique.
- Saiba mais sobre as **ferramentas que você pode usar com o Guardian Connector** para coletar e inserir dados (como CoMapeo, KoboToolbox e mais).
- Se você é um administrador, pode gerenciar **contas e papéis de usuário**, configurar **definições de tema** e adicionar **aplicativos personalizados** para sua comunidade.

## 🔑 Entrando

Ao visitar a Página Inicial pela primeira vez, pode ser solicitado que você se registre ou faça login. Após o registro, um membro da sua comunidade com acesso de administrador precisa **aprovar sua conta** e atribuir-lhe um papel antes que você possa ver os serviços. Até que isso aconteça, você não conseguirá acessar o Guardian Connector.

**O que você vê na Página Inicial depende do seu papel.** Pessoas diferentes precisam de ferramentas diferentes, então a página mostra apenas os serviços que você tem permissão para usar. Se um serviço que você espera está faltando, ele pode não estar ativado para sua comunidade, ou seu papel pode ainda não incluir acesso a ele — entre em contato com o administrador da sua comunidade.

## 🚀 Serviços Disponíveis

Estes são os serviços padrão do Guardian Connector aos quais sua comunidade pode se conectar a partir da Página Inicial. Cada um aparece como um cartão em que você pode clicar para abri-lo em uma nova guia.

![Guardian Connector Landing Page](/img/reference/gc-toolkit/gc-landing-page/landing-page-1.jpg)

- **[Explorer](/reference/gc-toolkit/gc-explorer/)**: Visualize os dados da sua comunidade como mapas interativos, galerias de mídia e um painel de alertas.
- **[Superset](/reference/gc-toolkit/superset/)**: Crie e explore gráficos, painéis e visualizações a partir dos seus dados.
- **Windmill**: Execute e agende os fluxos de trabalho de automação que coletam e processam seus dados (consulte o [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/)).
- **[File Browser](/reference/gc-toolkit/filebrowser/)**: Navegue, baixe e gerencie os arquivos brutos e arquivos da sua comunidade.

Nem todos veem todos os serviços. Em geral, quanto mais avançada ou sensível for uma ferramenta, maior o papel necessário para abri-la — por exemplo, o Explorer está disponível para a maioria dos usuários logados, enquanto o Windmill é reservado para administradores.

Também é possível configurar a Página Inicial para mostrar aplicativos personalizados, que são aplicativos que não fazem parte do conjunto padrão do Guardian Connector. Consulte [⚙️ Configurando Aplicativos Personalizados](#configuring-custom-apps) para mais informações.

## 🌐 Ferramentas que você pode usar com o Guardian Connector

A Página Inicial também apresenta as ferramentas de campo e plataformas que funcionam com o Guardian Connector. Estes são os aplicativos que sua comunidade pode usar para **coletar dados em campo** — dados que fluem para o Guardian Connector para visualização e análise.

![Guardian Connector Landing Page](/img/reference/gc-toolkit/gc-landing-page/landing-page-2.jpg)

- **[CoMapeo](/reference/core-integrations/comapeo/)**: Mapeamento e monitoramento mobile, com prioridade offline.
- **[KoboToolbox](/reference/core-integrations/kobotoolbox/)** e **ODK**: Formulários e pesquisas que funcionam online e offline.
- **[Timelapse](/reference/core-integrations/timelapse/)**: Revisão e anotação de imagens de armadilhas fotográficas para monitoramento da biodiversidade.

O Guardian Connector também se conecta com outras ferramentas como **ArcGIS Survey123**, **Locus Map**, **Global Forest Watch**, **SMART** e mais. Para saber tudo o que pode ser conectado, veja o [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/).

## 🔧 Para Administradores

### 👥 Gerenciamento de Usuários {#user-management}

Se você é um **administrador**, a Página Inicial oferece uma área de Gerenciamento de Usuários para controlar quem pode acessar o Guardian Connector da sua comunidade e o que eles podem fazer.

A partir daqui, você pode:

- **Pesquisar** pessoas por nome ou e-mail.
- Veja o **status** de cada pessoa — se sua conta está *Aprovada* ou ainda *Pendente* — juntamente com seu papel e quando ela fez o último login.
- **Aprovar (ou desaprovar) uma conta.** Somente usuários aprovados podem acessar os serviços.
- **Atribua um papel** que decide quais serviços cada pessoa pode abrir.
- **Excluir uma conta** se ela não deve mais ter acesso.

Os papéis atualmente disponíveis, do menor para o maior acesso, são:

- **Logado**: Logado, mas sem acesso aos serviços ainda.
- **Convidado**: Acesso limitado, adequado para visitantes ou parceiros.
- **Membro**: Acesso diário para membros da comunidade.
- **Administrador**: Acesso total, incluindo esta área de Gerenciamento de Usuários.

Quando você aprova alguém e lhe atribui o papel certo, os serviços que essa pessoa tem permissão para usar aparecerão em sua Página Inicial na próxima vez que ela fizer login.

### 🎨 Configurações de Tema

As Configurações de Tema permitem personalizar a marca da sua comunidade na Página Inicial.

A partir daqui, você pode adicionar:

- Uma **URL de logotipo**, que aparece na página inicial.
- Uma **URL de imagem de fundo**, que é usada como plano de fundo na tela de login.

### ⚙️ Configurando Aplicativos Personalizados {#configuring-custom-apps}

Se sua comunidade tem outros aplicativos rodando no Guardian Connector, a página de **Aplicativos Personalizados** permite criar cartões semelhantes aos serviços padrão — como Explorer, Superset e File Browser. Cada cartão abre em seu próprio subdomínio, para que as pessoas possam acessar seus aplicativos personalizados a partir da Página Inicial da mesma forma que abrem os aplicativos integrados.

Para cada aplicativo personalizado, você pode adicionar um nome, subdomínio, descrição, ícone e tags.

