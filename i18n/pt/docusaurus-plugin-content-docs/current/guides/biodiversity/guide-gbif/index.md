---
sidebar_position: 4
tags: [itu-3, opu, tsp]
---

# GBIF: Descobrindo e Publicando Registos de Biodiversidade

[GBIF](https://www.gbif.org/) — a Global Biodiversity Information Facility — é uma rede internacional e infraestrutura de dados abertos para registos de ocorrência de biodiversidade. Museus, herbários, agências governamentais, projetos de pesquisa e plataformas de ciência cidadã publicam conjuntos de dados no GBIF para que qualquer pessoa possa pesquisar, mapear e fazer download de informações sobre *onde* e *quando* as espécies foram documentadas em todo o mundo.

Para organizações comunitárias, o GBIF é frequentemente o índice público mais abrangente de registos de biodiversidade que podem estar relacionados com um território: não apenas a monitorização comunitária recente, mas também coleções históricas de espécimes, dados de inquéritos e observações contribuídas por investigadores e instituições externas ao longo de muitas décadas.

:::info

Para uma visão geral concisa da missão e rede do GBIF, consulte [O que é o GBIF?](https://www.gbif.org/what-is-gbif) no site do GBIF.

:::

Os dados do GBIF são poderosos, mas também são agregados de muitas fontes externas. As comunidades devem tratá-los primeiro como uma **ferramenta de descoberta e inventário** — uma forma de aprender o que existe nos arquivos públicos — em vez de conhecimento territorial autoritário por si só. O GBIF estabeleceu um [grupo de trabalho sobre governança de dados Indígenas](https://www.gbif.org/news/1Ke3Gk2USgdIW5OgDlBIKY/open-data-for-people-and-purpose-gbif-establishes-task-group-on-indigenous-data-governance), buscando implementar os [Princípios CARE para a Governança de Dados Indígenas](https://www.gida-global.org/care) na forma como o GBIF opera e apoia o uso responsável de dados.

## Como o GBIF agrega dados?

O GBIF não recolhe dados de campo por si mesmo. Em vez disso, os **publicadores** — instituições, projetos e plataformas — registam **conjuntos de dados** e partilham registos de ocorrência padronizados através da rede do GBIF. Cada registo tipicamente inclui um nome de espécie (ou táxon superior), uma data, uma localização e metadados sobre como o registo foi recolhido (por exemplo, se é um espécime preservado, uma observação humana ou uma observação de máquina).

Os dados chegam ao GBIF através de muitos canais, incluindo:

- **Coleções de história natural** — registos de espécimes de museus e herbários
- **Portais nacionais e regionais de biodiversidade** — programas de monitorização governamentais e de ONGs
- **Projetos de pesquisa** — levantamentos de campo, estudos ecológicos e redes de monitorização
- **Plataformas de ciência cidadã** — incluindo [iNaturalist](/guides/biodiversity/guide-inaturalist/), que exporta observações elegíveis de Grau de Pesquisa para o GBIF regularmente

Como o GBIF normaliza registos de tantas fontes, uma única pesquisa sobre o seu território pode revelar conjuntos de dados que talvez não conhecesse — juntamente com informações sobre **quem os publicou**, **quando** as observações foram feitas e **que tipo de evidência** cada registo representa.

:::note

Os registos no GBIF refletem o que os publicadores escolheram partilhar sob as suas próprias políticas e licenças de dados. Podem estar incompletos, duplicados em vários conjuntos de dados, georreferenciados de forma imprecisa ou incluir localizações de espécies culturalmente sensíveis. Interprete sempre os resultados do GBIF no contexto da comunidade e em conjunto com os seus próprios quadros de governação.

:::

## Por que as organizações comunitárias podem querer dados do GBIF?

O GBIF é mais útil quando uma comunidade quer compreender o **registo público existente** de documentação da biodiversidade dentro ou perto do seu território, antes de decidir se solicita dados, contacta publicadores ou importa registos para uma análise mais profunda.

### 🔍 Inventário e descoberta

Antes de descarregar registos de ocorrência individuais, é útil ver o que o GBIF já sabe sobre o seu território — quem publicou dados, que espécies aparecem e em que período de tempo. O CMI disponibiliza uma ferramenta de navegador gratuita que torna esse resumo rápido e fácil:

:::important GBIF Map Search

**[Abrir a ferramenta →](https://conservationmetrics.github.io/gbif-map-search/)** 

Desenhe uma caixa ou solte um limite GeoJSON de uma área comunitária para resumir ocorrências, espécies, conjuntos de dados, publicadores, anos e base de registo. Funciona no seu navegador e não é necessária uma conta GBIF. Para ver e descarregar registos completos, clique no botão "Ver no GBIF" após a consulta.

:::

Esse resumo ajuda a responder a perguntas como:

- Quem recolheu dados aqui e quando?
- Que espécies estavam a documentar?
- Que instituições possuem espécimes ou observações do nosso território?
- Espécies culturalmente sensíveis estão a ser publicadas?
- Existem conjuntos de dados que não conhecíamos?
- Os registos sobre o nosso território são precisos?

Exporte as tabelas de resumo para o formato de planilha para partilhar os resultados numa reunião ou anexá-los a uma revisão de governação de dados.

### 📥 Importação de dados

Quando uma comunidade precisa dos registos subjacentes — e não apenas das contagens — a [API de Downloads](https://techdocs.gbif.org/en/data-use/api-downloads) do GBIF pode recuperar todos os dados de ocorrência dentro de um polígono territorial (ou outro filtro), sujeitos aos termos de uso do GBIF e às licenças de cada conjunto de dados. Os downloads são tipicamente entregues como Darwin Core Archive (DwC-A) ou formatos tabulares semelhantes, adequados para mapeamento e análise em GIS ou ferramentas de base de dados.

Possíveis casos de uso incluem:

1. **Mapeamento de registos de ocorrência** — por exemplo, filtrar um download para ver onde os registos de onça-pintada (*Panthera onca*) caem em relação aos limites da comunidade, áreas protegidas ou locais de monitorização recentes.
2. **Comparar com programas comunitários atuais** — em princípio, os registos GBIF importados poderiam ser sobrepostos com conjuntos de dados recentes do Guardian Connector ou de parceiros para ver se os registos públicos históricos se alinham com o esforço de campo atual. Na prática, os registos GBIF mais antigos são muitas vezes escassos, inconsistente identificados ou mal georreferenciados, pelo que esta comparação é exploratória em vez de uma linha de base rigorosa.
3. **Explorar padrões amplos** — listas de espécies por ano, detalhamentos por tipo de registo (espécime vs. observação) ou contribuições de publicadores, num espírito semelhante à exploração de tendências no iNaturalist — embora o GBIF agregue muitos tipos de conjuntos de dados e períodos de tempo, pelo que os padrões refletem o arquivo público combinado em vez de um único projeto comunitário.

:::tip Como descarregar dados do GBIF

Use a ferramenta [GBIF Map Search](https://conservationmetrics.github.io/gbif-map-search/) para pesquisar o GBIF para a sua área de interesse e, em seguida, pressione o botão "Ver no GBIF" para descarregar os registos completos.

Também temos um conector para dados do GBIF disponível no [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/), que pode ser agendado para execução regular.

:::

## Por que as organizações comunitárias quereriam (ou não) partilhar com o GBIF?

Se as observações da sua comunidade devem aparecer no GBIF, por exemplo, através do uso do [iNaturalist](/guides/biodiversity/guide-inaturalist/), é uma escolha de governação, não um requisito técnico. Ambos os resultados são válidos dependendo dos seus objetivos.

#### Razões para manter dados de observação fora do GBIF:

- **Privacidade e dados da comunidade.** Alguns registos documentam espécies ou locais culturalmente sensíveis, ligados a direitos de colheita, ou destinados a permanecer dentro da comunidade. Por exemplo, um programa de guardiões pode registar localizações de plantas úteis sem querer que as coordenadas precisas sejam descobertas em todo o mundo. Uma licença de observação restritiva (por exemplo, Todos os Direitos Reservados) mantém os dados disponíveis para o seu projeto iNaturalist enquanto os exclui da exportação para o GBIF.
- **Gestão territorial.** Uma nação ou comunidade pode preferir que o conhecimento da biodiversidade do seu território seja acedido através do seu próprio protocolo — não agrupado globalmente sem consentimento. Manter os dados fora do GBIF pode alinhar-se com os princípios da [soberania de dados Indígenas](/guides/data-sovereignty/guide-data-sovereignty-and-protocols/) enquanto ainda usa o iNaturalist para mapeamento interno, formação e relatórios.

#### Razões para partilhar dados de observação através do GBIF:

- **Reconhecimento na pesquisa global.** Quando deseja que a biodiversidade do seu território seja documentada na literatura científica, modelos de distribuição de espécies ou avaliações de conservação, o GBIF torna os seus registos citáveis e detetáveis. Por exemplo, observações comunitárias de uma orquídea raramente registada ou uma extensão de área de ocorrência para uma ave migratória podem preencher lacunas que os investigadores usam em revisões da Lista Vermelha da IUCN ou estudos revistos por pares.
- **Visibilidade em processos globais.** Governos e ONGs recorrem ao GBIF para relatórios da Convenção sobre a Diversidade Biológica (CBD), planeamento de áreas protegidas e monitorização de espécies invasoras. Contribuir com observações de Grau de Pesquisa sob uma licença aberta ajuda a garantir que o esforço de monitorização da sua comunidade seja contabilizado nos conjuntos de dados que moldam as decisões de conservação regional e internacional — não apenas no iNaturalist.

:::tip

O GBIF tem um guia útil sobre [como publicar dados de biodiversidade no GBIF](https://ipt.gbif.org/manual/en/ipt/latest/how-to-publish) com planilhas exemplares para diferentes tipos de dados. Conforme observado, por exemplo, na [página de dados de ocorrência](https://ipt.gbif.org/manual/en/ipt/latest/occurrence-data), o GBIF recomenda usar o modelo do Excel e usá-lo para carregar os seus dados para o GBIF:

> Por fim, os seus dados precisam de ser transformados numa estrutura de tabela usando nomes de termos Darwin Core (DwC) como nomes de colunas.
>
> Tente inserir os seus dados no [modelo Excel](https://ipt.gbif.org/manual/en/ipt/latest/occurrence-data#templates), que inclui todos os [campos DwC obrigatórios](https://ipt.gbif.org/manual/en/ipt/latest/occurrence-data#Required%20DwC%20Fields) e [campos DwC recomendados](https://ipt.gbif.org/manual/en/ipt/latest/occurrence-data#Recommended%20DwC%20Fields).

Se isto se estiver a revelar difícil ou moroso, por favor contacte-nos com o seu caso de uso; poderíamos considerar a criação de uma ferramenta [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/) que mapeie os campos DwC do GBIF para os dados que possui no seu próprio sistema. Mas primeiro, por favor, experimente o modelo Excel e veja se funciona para si.

:::

## 📚 Leitura adicional

- [GBIF Piloto Usando os Rótulos TK e BC](https://localcontexts.org/gbif-pilot-using-tk-and-bc-labels/)
- Pankararu, C.J., Teixidor-Toneu, I., Odonne, G. et al. [A global biodiversity use data infrastructure acknowledging indigenous and local knowledge.](https://www.nature.com/articles/s44185-026-00121-0) npj biodivers 5, 7 (2026). https://doi.org/10.1038/s44185-026-00121-0
- [Guia de Referência Rápida do Darwin Core Archive](https://dwc.tdwg.org/terms/)
