---
sidebar_position: 1
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---

# CoMapeo

[CoMapeo](https://www.comapeo.app/) é uma ferramenta de mapeamento e coleta de dados projetada para comunidades indígenas e organizações locais, com foco no uso offline. Desenvolvida com ênfase na soberania dos dados e no controle da comunidade, o CoMapeo permite que as comunidades mapeiem seus territórios, documentem mudanças ambientais e coletem evidências de impactos ambientais sem depender de infraestrutura de internet externa.

## Por que o CoMapeo é integrado com o Guardian Connector

- **Soberania de Dados:** Permite que as comunidades tenham controle total sobre seus dados e processos de mapeamento.
- **Design "Primeiramente Offline"**: Funciona completamente sem conexão com a internet, sendo essencial para áreas remotas sem acesso à rede.
- **Mapeamento de Territórios**: Permite que as comunidades mapeiem seus territórios tradicionais e registrem os padrões de uso da terra.
- **Documentação Ambiental**: Permite a documentação de mudanças ambientais, desmatamento e impactos ecológicos.
- **Coleta de Evidências:** Facilita a coleta de provas para fins de defesa e processos legais.
- **Preservação Cultural:** Permite que as comunidades registrem o conhecimento ecológico tradicional e os locais culturais.
- **Sincronização Ponto a Ponto:** Permite o compartilhamento de dados entre dispositivos, sem a necessidade de servidores centrais.
- **Servidor de Arquivo:** Um servidor de arquivo CoMapeo (também conhecido como Comapeo Cloud) pode ser implantado para sincronizar dados entre dispositivos e fornece uma API para se conectar ao Guardian Connector.
- **Personalizável:** Suporta categorias e estruturas de dados específicas da comunidade.

## Coleções por Categoria

* Para coleções de categorias prontas para uso, veja a seção [Coleções de Categorias](./templates.md).

## Servidor de Arquivo CoMapeo

O Servidor de Arquivo CoMapeo atua tanto como um ponto de acesso dentro de um projeto CoMapeo e também como um endpoint API centralizado para acessar dados de projetos sincronizados. O Guardian Connector se integra diretamente com o Servidor de Arquivo para suportar a ingestão, visualização e armazenamento de longo prazo de observações e arquivos de mídia do CoMapeo de forma automatizada.

Dentro do Guardian Connector, o servidor de arquivos pode ser hospedado diretamente como parte de uma implantação. O Guardian Connector também fornece um script no [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub) que se conecta à API do Servidor de Arquivos, recupera os dados do projeto e os salva no data warehouse PostgreSQL do Guardian Connector.

Esta integração torna possível:

* Sincronize automaticamente as observações do CoMapeo no Guardian Connector.
* Armazene os dados do CoMapeo em um repositório centralizado para análise e visualização.
* Utilize o GC Explorer, painéis de controle e ferramentas externas de SIG (Sistema de Informações Geográficas) com dados da CoMapeo.
* Mantenha os dados e anexos do projeto para acesso a longo prazo e fluxos de trabalho de backup.

::: Nota: Verificar o status da sincronização

O script de acesso ao servidor de arquivos do CoMapeo, presente no hub de scripts do GC, retorna estatísticas úteis de sincronização, incluindo:

* O número total de projetos descobertos
* O número de observações importadas por projeto.
* Uma lista de anexos que não foram enviados com sucesso

Anexos mal sucedidos são tipicamente arquivos de mídia que foram referenciados em observações, mas não foram transferidos com sucesso entre os dispositivos locais CoMapeo e o Servidor de Arquivo. Isso pode ocorrer por várias razões, incluindo interrupções na conectividade, falhas na sincronização ou problemas de latência durante a troca ponto a ponto.

Esses dados estatísticos podem ajudar os administradores a verificar se todos os dados e anexos de mídia esperados do CoMapeo foram sincronizados com sucesso para o Servidor de Arquivo.

:::

:::Dica: Campos adequados para visualização

O script de recuperação de dados do CoMapeo também gera vários campos adicionais que são especialmente úteis para visualização em ferramentas como o [GC Explorer](/reference/gc-toolkit/gc-explorer).

Isso inclui:

* **``category``**: A categoria atribuída a cada observação no CoMapeo. Isso pode ser útil para filtrar e organizar as observações em mapas, painéis e galerias.
* **`color`**: Um valor de cor em formato hexadecimal associado à categoria de observação. Isso pode ser usado para aplicar estilos consistentes aos pontos em diferentes mapas e visualizações.
* **`category_icon`**: O nome do arquivo associado ao tipo de observação. No [GC Explorer](/referência/gc-toolkit/gc-explorer), isso pode ser usado para exibir as observações como ícones específicos por categoria no mapa.
* **`created_at`**: Um carimbo de tempo que representa quando a observação foi originalmente criada. Isso pode ser útil para filtragem e análise temporal, incluindo no [GC Explorer](/referência/gc-toolkit/gc-explorer), que permite filtrar dados do mapa por tempo.

Esses campos gerados ajudam a preservar a organização visual e a estrutura de categorização originalmente definida no CoMapeo.

:::


## Outras fontes de informação

- [Plugin para Planilha de Configuração do CoMapeo](https://github.com/digidem/comapeo-config-spreadsheet-plugin) - Gere a configuração do CoMapeo diretamente da planilha do Google.
- [MapPacker](https://github.com/conservationmetrics/mappacker) - Gere mapas offline no formato de pacote de mapa estilizado (`.smp`) para uso no CoMapeo (OBSERVAÇÃO: A CMI mantém o MapPacker e disponibiliza um servidor para nossos usuários)
- [Gerador de Ícones para CoMapeo](https://icons.earthdefenderstoolkit.com/) - Gere ícones para as categorias do CoMapeo
- [Gerador de KML do CoMapeo](https://rudokemper.github.io/comapeo-kml-generator/) - Gere um arquivo KML (com imagens) a partir das publicações do WhatsApp do CoMapeo
- [Plugin QGIS SMP](https://github.com/digidem/qgis-smp-plugin) - Um plugin para o QGIS que gera um pacote de mapas estilizados (``.smp``) para uso no CoMapeo.