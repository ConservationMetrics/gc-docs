---
tags: [opu, tsp]
sidebar_position: 2
---

# Download e Reconstrução de Blocos Vetoriais

O Guardian Connector inclui um script conector (`mapbox_download_vector_tiles`) que baixa **blocos vetoriais do Mapbox** para uma caixa delimitadora em um cache local e os converte em uma única **GeoJSON FeatureCollection** no data lake da sua implantação. Ele é executado no [Windmill](/reference/gc-toolkit/gc-scripts-hub/) e pode, opcionalmente, reconstruir feições que foram cortadas através das bordas dos blocos.

Quando é executado, o script:

1. planeja a grade de blocos para a caixa delimitadora e o nível de zoom solicitados (com um limite de zoom para segurança de cota),
2. se `dry_run` estiver habilitado, retorna o plano de download e para sem fazer requisições de rede, e
3. caso contrário, baixa os blocos não armazenados em cache, converte os blocos vetoriais armazenados em cache (`.pbf`) para GeoJSON (opcionalmente reconstruindo as feições cortadas) e escreve o resultado no data lake.

## Quando usá-lo

Use este script quando precisar de feições vetoriais de um conjunto de tiles do Mapbox como GeoJSON para análise, arquivamento, recuperação de dados ou um fluxo de trabalho downstream no Guardian Connector:

- **Recuperação de dados de conjuntos de tiles** — extraia feições GeoJSON de um conjunto de tiles do Mapbox quando os arquivos-fonte originais ou o Conjunto de Dados do Mapbox não estiverem mais disponíveis.
- **Extração de camadas de referência** — puxe feições vetoriais dentro da caixa delimitadora do seu território de um conjunto de tiles do Mapbox para usar no [QGIS](/reference/companion-applications/qgis/), [GC Explorer](/reference/gc-toolkit/gc-explorer/) ou no seu data warehouse PostgreSQL.
- **Preparação de dados para fluxos de trabalho downstream** — salve o GeoJSON reconstruído diretamente no data lake para que outros scripts ou ferramentas possam ingeri-lo.

### Fluxo de trabalho recomendado em duas etapas

1. Execute o script primeiro com **`dry_run` definido como `true`** para inspecionar a contagem de blocos planejada (`tile_count` / `to_fetch_count`) e confirmar se ela se encaixa na sua cota da API do Mapbox.
2. Execute o script novamente com **`dry_run` definido como `false`** para baixar os blocos e escrever o arquivo GeoJSON combinado no data lake.

## Parâmetros de configuração

| Parameter | Default | Description |
| --- | --- | --- |
| `mapbox` | *(obrigatório)* | Recurso de credenciais do Mapbox (somente `access_token` é usado). |
| `bbox` | *(obrigatório)* | Caixa delimitadora como `minlon,minlat,maxlon,maxlat` em graus WGS84. |
| `tileset` | *(obrigatório)* | ID do conjunto de tiles do Mapbox (por exemplo, `mapbox.mapbox-streets-v8` ou `account.tileset-id`). |
| `zoom` | `12` | Nível de zoom da grade de blocos (`0–14`). |
| `reconstruct_column` | `""` | Propriedade de feição usada para mesclar e reconstruir feições cortadas nas bordas dos blocos. Deixe em branco para desativar a reconstrução. |
| `output_filename` | `my_filename` | Nome base para o arquivo GeoJSON de saída e pasta de cache de blocos. |
| `attachment_root` | `/persistent-storage/datalake/mapbox` | Diretório do data lake onde os arquivos de saída são armazenados. |
| `delete_tiles` | `true` | Exclua o cache de blocos `.pbf` bruto após uma gravação bem-sucedida do GeoJSON para que apenas o arquivo `.geojson` permaneça. Defina como `false` para manter os blocos em cache para execuções mais rápidas. |
| `dry_run` | `false` | Retorna o plano de download sem buscar blocos ou gravar GeoJSON. |

### Reconstruindo feições cortadas

Como os blocos vetoriais dividem geometrias ao longo de uma grade, polígonos ou linhas grandes que cruzam as bordas dos blocos são cortados em peças separadas. Se suas feições compartilham uma propriedade de identificador única (como uma coluna `id`, `fid` ou `name`), defina `reconstruct_column` para o nome dessa propriedade para que o script mescle geometrias correspondentes de volta em feições completas no GeoJSON de saída.

### Caminhos de saída no data lake

- **Saída GeoJSON**: `{attachment_root}/{output_filename}.geojson` (acessível via [Navegador de Arquivos](/reference/gc-toolkit/filebrowser/))
- **Cache de blocos**: `{attachment_root}/{output_filename}/tiles/{z}/{x}/{y}.pbf` (removido automaticamente quando `delete_tiles` é `true`)

## Obtendo um token de acesso do Mapbox

Ao contrário de [Atualizando um Conjunto de Tiles do Mapbox](/reference/gc-toolkit/externally-hosted/mapbox/update-tileset/), este script só precisa de permissão para ler blocos vetoriais. Um **token de acesso público** (`pk.ey...`) com acesso ao conjunto de tiles de destino é suficiente, embora um token secreto também funcione. Você pode copiar ou criar um token em **Admin > Tokens** no [Mapbox Studio](https://console.mapbox.com/).

## Barreiras de cota e níveis de zoom

:::warning Cota da API do Mapbox

Cada requisição de bloco vetorial conta para sua cota da API do Mapbox, e o número de blocos aumenta em aproximadamente **4x para cada nível de zoom adicional**.

Para evitar uso inesperado:

- Sempre execute com **`dry_run = true`** primeiro para verificar quantos blocos serão solicitados.
- Mantenha **`delete_tiles = false`** se você planeja executar o script novamente na mesma área — os blocos já baixados (e os blocos vazios conhecidos) são armazenados em cache localmente e ignorados em execuções subsequentes.
- O parâmetro `zoom` é limitado a `14` no Windmill para evitar explosões acidentais de blocos de alto zoom.

:::

:::tip Escolhendo um nível de zoom

Um conjunto de tiles armazena geometria apenas até o seu `maxzoom` configurado; solicitar um nível de zoom mais alto resulta em mais requisições de API sem adicionar detalhes espaciais extras. Use o [guia de Níveis de Zoom do OpenStreetMap](https://wiki.openstreetmap.org/wiki/Zoom_levels) para escolher um nível de zoom apropriado para sua caixa delimitadora.

:::
