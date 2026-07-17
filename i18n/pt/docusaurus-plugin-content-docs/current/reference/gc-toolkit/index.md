---
sidebar_position: 1
---

# Kit de Ferramentas do Guardian Connector

Cada instância do Guardian Connector está equipada com um conjunto de ferramentas projetadas para ajudar as comunidades a gerir os seus dados e fluxos de trabalho:

### 🗄️ Armazém de Dados Privado 

O Guardian Connector fornece um armazenamento de dados seguro e dedicado para cada utilizador, utilizando uma base de dados relacional PostgreSQL e armazenamento de ficheiros privado. Todos os dados são isolados, garantindo que apenas o utilizador tenha acesso — nenhum dado de terceiros é armazenado ou acessível no mesmo ambiente.

### 🤖 GC Scripts Hub

O [GC Scripts Hub](./gc-scripts-hub/) é uma coleção de scripts de automação projetados para ajudar comunidades a proteger e gerir as suas terras através da integração de dados e automação de fluxos de trabalho. Construídos na plataforma [Windmill](https://www.windmill.dev/), estes scripts capacitam as comunidades a conectar diferentes ferramentas, automatizar a recolha de dados e otimizar os seus fluxos de trabalho de conservação sem exigir um conhecimento técnico aprofundado.

### 🗺️ GC Explorer

O [GC Explorer](./gc-explorer/) é uma ferramenta de visualização de dados baseada na web que transforma os dados tabulares da sua comunidade em mapas interativos, galerias e dashboards. Construído especificamente para o Guardian Connector, conecta-se diretamente à sua base de dados PostgreSQL para exibir dados recolhidos de ferramentas como CoMapeo, KoboToolbox e outras plataformas de recolha de dados.

### 📊 Superset

[Apache Superset](./superset/) é uma plataforma de business intelligence moderna e pronta para empresas que oferece ricas capacidades de visualização e exploração de dados. Suporta uma grande variedade de visualizações, desde gráficos simples a complexos, e permite aos utilizadores criar dashboards interativos. O Superset é projetado para ser intuitivo tanto para utilizadores técnicos quanto não técnicos, tornando-o ideal para partilhar insights entre diversos grupos de stakeholders.

### 🗂️ Filebrowser

[Filebrowser](./filebrowser/) é um gestor de ficheiros baseado na web que permite aos utilizadores navegar, carregar, descarregar e partilhar ficheiros da sua instância do Guardian Connector.


### 🔧 Outras Ferramentas

Conforme necessário, pode adicionar ferramentas adicionais a uma instância do Guardian Connector. Por exemplo, pode adicionar um servidor HTTP personalizado para servir conteúdo estático do data lake. Consulte [Outras Ferramentas](/reference/gc-toolkit/other-tools/) para mais informações.

## Serviços Hospedados Externamente

O Guardian Connector também depende de vários serviços de terceiros (que não estão hospedados numa instância) para fornecer funcionalidade adicional:

- [Auth0](./externally-hosted/auth0/) - Plataforma de autenticação e autorização
- [Mapbox](./externally-hosted/mapbox/) - Plataforma de mapeamento e visualização de dados geoespaciais
- [Twilio](./externally-hosted/twilio/) - Plataforma de comunicação SMS e voz
- [Uptime Robot](./externally-hosted/uptime-robot/) - Monitorização de websites e acompanhamento de tempo de atividade