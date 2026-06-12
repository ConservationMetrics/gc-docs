---
sidebar_position: 1
---

# Toolkit do Guardian Connector

Cada instância do Guardian Connector está equipada com um conjunto de ferramentas projetadas para ajudar as comunidades a gerenciar seus dados e fluxos de trabalho:

### 🏢 Armazém de dados privado 

O Guardian Connector fornece um repositório de dados seguro e dedicado para cada usuário, utilizando um banco de dados relacional PostgreSQL e armazenamento de arquivos privado. Todos os dados são isolados, garantindo que apenas o usuário tenha acesso – nenhum outro dado é armazenado ou acessível no mesmo ambiente.

### 🤖 Central de scripts do GC

O [GC Scripts Hub](./gc-scripts-hub/) é uma coleção de scripts de automação projetados para ajudar as comunidades a proteger e gerenciar suas terras por meio da integração de dados e da automação de fluxos de trabalho. Construído na plataforma [Windmill](https://www.windmill.dev/), esses scripts capacitam as comunidades a conectar diferentes ferramentas, automatizar a coleta de dados e otimizar seus fluxos de trabalho de conservação, sem exigir um conhecimento técnico profundo.

### 🗺️ Explorador do GC

O [GC Explorer](./gc-explorer/) é uma ferramenta de visualização de dados baseada na web que transforma os seus dados tabulares da comunidade em mapas interativos, galerias e painéis. Projetado especificamente para o Guardian Connector, ele se conecta diretamente ao seu banco de dados PostgreSQL para exibir os dados coletados a partir de ferramentas como CoMapeo, KoboToolbox e outras plataformas de coleta de dados.

### 📊 Superset

[Apache Superset](./superset/) é uma plataforma moderna de inteligência de negócios, pronta para uso em grandes empresas, que oferece recursos avançados de visualização e exploração de dados. Suporta uma ampla variedade de visualizações, desde gráficos simples até complexos, e permite que os usuários criem painéis interativos. O Superset foi projetado para ser intuitivo tanto para usuários técnicos quanto não técnicos, tornando-o ideal para compartilhar informações com diversos grupos de partes interessadas.

### 🗂️ Navegador de arquivos

[Filebrowser](./filebrowser/) é um gerenciador de arquivos baseado na web que permite aos usuários visualizar, enviar, baixar e compartilhar arquivos da instância do seu Guardian Connector.


### 🛠️ Outras Ferramentas

Conforme necessário, você pode adicionar ferramentas adicionais a uma instância do Guardian Connector. Por exemplo, se você estiver utilizando o [CoMapeo](/reference/connected-applications/comapeo/) para coletar dados, pode adicionar um servidor de arquivos CoMapeo à sua instância do Guardian Connector para permitir que os usuários sincronizem seus dados com o servidor de arquivos CoMapeo e para que o Guardian Connector acesse a API desse servidor para recuperar e armazenar os dados no data warehouse privado.

## 🌐 Hospedagem e Custos

Oferecemos orientação técnica para a implantação e hospedagem da infraestrutura do Guardian Connector, de acordo com os requisitos de soberania de dados da sua comunidade, incluindo:
 
- Opções de hospedagem e requisitos
- Considerações sobre a infraestrutura em nuvem
- Estimativas de custos e recursos para planejamento
- Considerações sobre segurança e soberania de dados
- Procedimentos de manutenção e atualização

## Serviços Hospedados Externamente

O Guardian Connector também depende de vários serviços de terceiros (que não são hospedados em uma instância) para fornecer funcionalidades adicionais:

- [Auth0](./externamente-hospedado/auth0/) – Plataforma de autenticação e autorização
- [Mapbox](./externamente-hospedado/mapbox/) - Plataforma para mapeamento e visualização de dados geográficos.
- [Twilio](./externamente-hospedado/twilio/) – Plataforma de comunicação por SMS e voz
- [Uptime Robot](./externamente-hospedado/uptime-robot/) - Monitoramento de sites e rastreamento da disponibilidade