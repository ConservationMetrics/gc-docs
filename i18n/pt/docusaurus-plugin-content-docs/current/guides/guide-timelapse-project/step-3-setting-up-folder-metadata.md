---
tags: [itu-3, opu, tsp]
---
# Passo 3: Configurando Metadados no Nível da Pasta

:::Nota

Por favor, consulte o [Guia de Metadados do Timelapse](https://timelapse.ucalgary.ca/wp-content/uploads/Guides/TimelapseMetadataGuide.pdf) para obter as informações mais recentes e precisas.

:::

O recurso de "timelapse" suporta metadados em nível de pasta, o que permite associar informações do projeto, estação ou implantação a todas as pastas de imagens. Isso ajuda a evitar a entrada repetitiva de dados e garante a consistência entre os arquivos de imagem relacionados.

![Folder-level metadata](/img/guides/guide-timelapse-project/folder-level-metadata.jpg)
_Example of Timelapse project folder-level metadata, using the practice image set._

:::dica

Antes de habilitar metadados em nível de pasta, pense na estrutura das suas pastas e nas convenções de nomenclatura. Alterações posteriores podem interromper os links entre dados e pastas, por isso é *importante* finalizar a sua estrutura primeiro.

:::

:::importante

Adicionar metadados em nível de pasta ao Timelapse é completamente opcional. Se você já possui um método mais avançado para coletar informações sobre estações e implantação, e essas informações já estiverem digitalizadas, não há necessidade de adicionar esses tipos de metadados diretamente ao Timelapse.

:::

## Como configurar os metadados de uma pasta

1. **Organize suas pastas** para refletir sua hierarquia de metadados. Veja [Passo 1: Organização de Imagens](step-1-organizing-imagery.md)

2. Inicie o software **Editor de Modelo de Time-Lapse**. (Este é o arquivo ``TimelapseTemplateEditor.exe`` na sua pasta de Time-Lapse.)

3. Defina os campos de metadados em nível de pasta no Editor de Modelos. Você pode criar vários níveis (como Projeto, Estação e Implantação) e atribuir campos específicos a cada um. Por exemplo:
   - _Projeto:_ Nome do projeto, pesquisador principal
   - \_Estação:\_ Coordenadas GPS, tipo de habitat
   - _Implantação_: modelo da câmera, data de início, equipe de campo

4. Abra seu conjunto de imagens no software Timelapse e navegue até a aba **Dados da Pasta**. Você verá abas para cada nível (por exemplo, Projeto, Estação, Implantação), com base na pasta onde sua imagem está localizada.

5. **Clique em "Editar dados para esta pasta"** para preencher os metadados. Cada aba de nível mostra apenas os campos relevantes para aquela pasta. Os campos podem incluir menus suspensos, números, áreas de texto livre ou opções de seleção múltipla.

6. **Os valores de metadados são aplicados automaticamente** a todas as imagens naquela pasta e podem ser visualizados enquanto você as revisa. Se você alternar entre pastas, os painéis de metadados serão atualizados de acordo.

7. **Exportar metadados da pasta** usando **Arquivo → Exportar todos os dados para CSV**. O Timelapse gera um arquivo CSV para cada nível de pasta (por exemplo, `Project.csv`, `Station.csv`, `Deployment.csv`), vinculando-os através dos caminhos das pastas. Isso facilita a combinação com os dados no nível da imagem posteriormente.

::: Aviso
O recurso de timelapse não possui a capacidade de definir validações de campos personalizados além do que já está disponível na interface do usuário. 

Por exemplo, para os campos de Latitude e Longitude, é possível configurá-los como campos Numéricos do tipo Decimal, permitindo coordenadas decimais positivas e negativas. No entanto, **não** é possível definir limites de 180 a -180 ou 90 a -90; portanto, _qualquer_ número decimal pode ser inserido. 

Portanto, é importante ter muito cuidado ao inserir dados no Timelapse para campos desse tipo.


Os metadados no nível da pasta são opcionais, mas permitem a criação de conjuntos de dados mais ricos e estruturados, especialmente quando se seguem padrões como:

* As recomendações da [GBIF para dados padronizados de armadilhas fotográficas](https://docs.gbif.org/camera-trap-guide/en/) (ver, em particular, a seção 3.4.1)
* O [Padrão de Metadados da Alberta](https://abmi.ca/publication/620.html) 
* [Camtrap DP](https://camtrap-dp.tdwg.org/metadata/)

## Como coletar metadados em nível de pasta para serem inseridos no Timelapse

O "timelapse" permite que você configure campos de metadados em nível de pasta e insira os dados, mas **não** fornece um método para coletar efetivamente essas informações no local.

A forma de coletar e gerenciar os metadados do projeto – como as coordenadas GPS das suas armadilhas fotográficas, o nome do local ou o fluxo de trabalho de recuperação da memória SD – é sua escolha. No entanto, recomendamos o uso de uma ferramenta padronizada baseada em formulários, como [KoboToolbox](/reference/connected-applications/kobotoolbox), ODK ou [CoMapeo](/reference/connected-applications/comapeo), para garantir a consistência e minimizar erros.

Exemplos de campos de metadados úteis podem incluir (mas você pode querer consultar os padrões de metadados linkados acima):

* ID da armadilha fotográfica
* Nome do Local ou Estação
* Latitude e longitude
* Altura da câmera
* Campo de visão da câmera
* Datas e horários de início e término da implantação
* Número do cartão SD
* Observações sobre a recuperação de cartão SD
* Nome do observador ou membro da equipe

Para ajudá-lo a começar, aqui está um modelo básico de XLSForm (\[link para o arquivo](./assets/basic\_camera\_trap\_xlsform.xlsx)) que você pode carregar no KoboToolbox ou ODK e adaptar às suas necessidades.