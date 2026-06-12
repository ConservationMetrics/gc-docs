---
tags: [idm, opu, tsp]
---

# Pilares da Soberania de Dados no Guardian Connector

:::informação
Os seguintes pilares são a base da soberania de dados no Guardian Connector. Atualmente, estamos em processo de implementação desses pilares, e vários deles ainda estão em fase de planejamento.

:::nota
Consulte também nosso guia sobre os protocolos de compartilhamento de dados baseados na soberania de dados indígena: [/guias/guia-sobre-soberania-de-dados-e-protocolos/.
:::

## 1. Controle da Infraestrutura

* **Tenha o controle da infraestrutura e das decisões de hospedagem** – as organizações comunitárias escolhem os servidores (locais, regionais ou na nuvem) e mantêm o controle.  
* **Software não proprietário** – o código de código aberto evita a dependência de um único fornecedor e garante a transparência.  
* **Prioridade para arquivos, formatos abertos** – sempre que possível, os dados são armazenados em arquivos e esquemas duráveis ​​e bem estruturados (CSV, JSON, GeoJSON, GPX, KML) para garantir que permaneçam portáteis e utilizáveis fora da plataforma. Os dados também são organizados em um banco de dados PostgreSQL, facilitando que organizações comunitárias consultem, visualizem e trabalhem com seus dados diariamente.  
* **Produto digital durável** – uma plataforma projetada para permanecer funcional e relevante além dos ciclos de financiamento, à medida que projetos e ferramentas de dados surgem e desaparecem.  
* **Direito de saída** – total capacidade de remover, baixar e transferir dados a qualquer momento.

## 2. Segurança e Resiliência

* **Proteção do banco de dados**: criptografia em repouso e durante a transmissão, verificações de integridade e acesso controlado.  
* **Resiliência em segurança cibernética** – varredura de vulnerabilidades, aplicação de patches e atualizações automatizadas, e protocolos de resposta.  
* **Replicação e cópias de segurança** – Cópias de segurança controladas pela comunidade para evitar a perda ou exclusão acidental.  
* **Rastreabilidade** – capacidade de rastrear a origem dos dados, as transformações e o histórico de acesso.  
* **Compatibilidade fora de linha** – alguns aplicativos integrados funcionam sem conexão e sincronizam posteriormente, embora nem todas as funcionalidades sejam compatíveis com o modo offline.

## 3. Governança e Direitos

* **Por padrão, privado; compartilhamento opcional –** todos os dados são privados por padrão, e as organizações da comunidade decidem se, quando e como compartilhar conjuntos de dados publicamente. O compartilhamento pode ser feito em seus próprios termos, seja para colaboração, defesa ou contribuição para objetivos mais amplos.  
* **Permissões baseadas em função** – acesso alinhado com as regras e funções da comunidade ou organização.  
* **Transparência das pipelines de dados:** todo o código relacionado à extração, carregamento e transformação (ETL) e ao processamento é de código aberto (FOSS), permitindo que as comunidades auditem, compreendam e adaptem os fluxos de trabalho conforme necessário.  
* **Diretrizes legais e éticas** – protocolos de dados complementares e modelos de acordo de uso de terceiros são fornecidos para ajudar a proteger contra o uso exploratório ou não autorizado.

## 4. Facilidade de uso e capacidade

* **Interoperabilidade** – compatível com ferramentas que as comunidades já utilizam, e foi projetada para permitir a integração fácil de novas ferramentas, caso ainda não sejam suportadas.  
* **Acessibilidade** – as interfaces e os fluxos de trabalho são projetados ou selecionados com base nas personas de usuário específicas identificadas em cada organização comunitária, para que as ferramentas correspondam a funções e capacidades reais.  
* **Facilidade de localização e catalogação** – os dados são organizados com estruturas claras, metadados e ferramentas de pesquisa, para que os usuários possam encontrar e compreender seus conjuntos de dados rapidamente, sem depender do suporte técnico.  
* **Localização** – suporte para idiomas locais, categorias e categorias culturais.  
* **Fortalecimento de capacidades** – materiais de documentação, guias passo a passo e recursos para uso próprio, fornecidos para capacitar as organizações comunitárias a gerenciar e analisar seus próprios dados de forma sustentável.