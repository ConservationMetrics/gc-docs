---
sidebar_position: 2
tags: [itu-3, opu, tsp]
---

# Importador de Conjunto de Dados do GC

Faça o upload de um arquivo de conjunto de dados e transforme-o em uma tabela limpa no PostgreSQL, no seu Data Warehouse do Guardian Connector. O aplicativo o guiará na nomeação do conjunto de dados, no upload de um arquivo, na marcação opcional da **fonte de dados** e na finalização da importação. Também salva os arquivos originais e transformados no seu lago de dados (acessível através de [Filebrowser](/reference/gc-toolkit/filebrowser/)).

---

## 📦 What this tool does

* Converts and validates common **tabular** files (`.csv`, `.xlsx/.xls`, `.json`) to CSV for ingestion; or, to GeoJSON if the file has spatial data.
* Converts and validates common **spatial** files (`.geojson`, `.kml`, `.gpx`, `.kmz`, `.xml` (if it's a SMART XML file), Shapefiles (`.shp` and accompanying files)), GeoPackage files (`.gpkg`), and CyberTracker files (`.json`) to GeoJSON for ingestion.
* Optionally applies **source-specific** transformations (e.g., KoboToolbox, CoMapeo, ODK, Locus Map)
* Writes the result to a **new** Postgres table and archives files to file storage

---

## Passo a Passo: Importar um Conjunto de Dados

### 1. Abra o aplicativo no Windmill

A partir de **GC Scripts Hub → Aplicativos**, clique em **Importador de Conjuntos de Dados do GC**.

![Open the Importador de Conjunto de Dados do GC app](/img/reference/gc-toolkit/gc-scripts-hub/dataset-uploader-1.jpg)

### 2. Dê um nome ao seu conjunto de dados

Atribua um nome claro e legível para o seu conjunto de dados, em seguida, clique em **Verificar Disponibilidade**.

![Enter a dataset name](/img/reference/gc-toolkit/gc-scripts-hub/dataset-uploader-2.jpg)

Se disponível, você verá o nome da tabela resultante que será gerado no armazém.

![Name is available and mapped to table name](/img/reference/gc-toolkit/gc-scripts-hub/dataset-uploader-3.jpg)

:::dica

Você pode adicionar dados a uma tabela existente digitando o nome da tabela e clicando em **Verificar Disponibilidade**. Se a tabela existir, você será solicitado a anexar os dados à tabela existente.

:::

### 3. Faça o upload do seu arquivo

Selecione seu arquivo e clique em **Enviar Arquivo**. Após a conclusão do envio, prossiga para o próximo passo.

![Upload your file and confirm success](/img/reference/gc-toolkit/gc-scripts-hub/dataset-uploader-4.jpg)

**Formatos aceitos:** CSV, GeoJSON, GPX, JSON, KML, XLS, XLSX, KMZ, XML (SMART) e arquivos de formato Shapefile.

### 4. (Opcional) Selecione uma fonte de dados conhecida

Se o arquivo se originar de uma ferramenta conhecida, ative a opção "**Este conjunto de dados provém de uma fonte ou ferramenta conhecida?**" e selecione-a. Isso adiciona uma etiqueta ``data_source`` e, para algumas fontes, aplica formatação inteligente.

![Choose a known data source](/img/reference/gc-toolkit/gc-scripts-hub/dataset-uploader-5.jpg)

**Exemplos**

* **KoboToolbox**: padroniza as exportações de pesquisas para nomes e tipos de coluna consistentes
* **CoMapeo / Mapeamento / Mapa do Locus:** normaliza os campos para observações e pontos de referência

### 5. Revisar e finalizar

Confirme o resumo e clique em **Salvar e Finalizar** para salvar os dados.

![Review summary and save](/img/reference/gc-toolkit/gc-scripts-hub/dataset-uploader-6.jpg)

Você verá uma mensagem de sucesso assim que a importação for concluída.

![Success confirmation](/img/reference/gc-toolkit/gc-scripts-hub/dataset-uploader-7.jpg)

---

## After You Import

### Use your new table in GC Explorer

Open **GC Explorer** and add your newly created table to a View to explore or publish.

![Add the new table in GC Explorer](/img/reference/gc-toolkit/gc-scripts-hub/dataset-uploader-9.jpg)

See: [GC Explorer](/reference/gc-toolkit/gc-explorer/)

:::info

If you are using [Superset](/reference/gc-toolkit/superset/), or any other tool that uses PostgreSQL as a data source, you can use also access the uploaded data there.

:::


### Access your uploaded files in Filebrowser

The importer saves both the **original** file and any **transformed** output in a folder named after your table (e.g., `my_kobo_toolbox_data`).

![Find original and transformed files in Filebrowser](/img/reference/gc-toolkit/gc-scripts-hub/dataset-uploader-8.jpg)

See: [Filebrowser](/reference/gc-toolkit/filebrowser/) for share links or downloads.

:::dica

If you uploaded a spatial data file, you can download it here to use in a tool like [QGIS](/reference/recommended-applications/qgis/).

:::

### Upload media attachments in Filebrowser

Often, datasets from tools like CoMapeo, Mapeo, or Locus Map, include media attachments like photos, audio, or video files. You can upload these to Filebrowser.

1. Open Filebrowser.
2. Navigate to the dataset folder.
3. Create a new folder for the media attachments like `media`, `photos` or `attachments`. (It is recommended to use the same folder name as what was exported from the tool.)
4. Open the new folder, and upload the media files (either using the drag-and-drop interface, or by clicking the **Upload** button).

:::dica

You can now generate a share link for the media attachments folder and use it in a tool like [GC Explorer](/reference/gc-toolkit/gc-explorer/) to embed the media attachments in a view. See [Filebrowser: generating share links](/reference/gc-toolkit/filebrowser/#generating-share-links) for more details.

:::

---

## Dicas e Solução de Problemas

* **Tipo de arquivo não suportado.** Converta-o localmente para um dos formatos suportados e, em seguida, faça o upload novamente.
* **Arquivos grandes.** Se o envio estiver travando, é possível que o arquivo seja muito grande. Tente redimensionar o arquivo para um tamanho menor. Um tamanho máximo recomendado para um arquivo é de 5 MB em um computador ou 1-2 MB em um dispositivo móvel.
* **Envio acidental.** Se você enviar um arquivo acidentalmente, mas não clicar em "Salvar e Finalizar", basta atualizar a página. (Ele será removido automaticamente.) Se você clicou em "Salvar e Finalizar", a tabela do banco de dados precisará ser excluída manualmente. (No futuro, adicionaremos uma forma de excluir a tabela.)

_Para quaisquer outras questões, por favor, entre em contato conosco pelo e-mail [guardianconnector@conservationmetrics.com] ou crie um novo problema no [GitHub](https://github.com/ConservationMetrics/gc-scripts-hub/issues)._

---

## Veja também

* [**Navegador de arquivos**](/referência/gc-toolkit/filebrowser/) – para compartilhar links ou downloads dos arquivos originais e transformados, ou para fazer o upload de anexos de mídia associados ao conjunto de dados.
* [**Visão geral e arquitetura técnica**](https://github.com/ConservationMetrics/gc-scripts-hub/blob/main/f/apps/gc_dataset_importer.app/README.md) – destinada a desenvolvedores, e inclui uma lista de tarefas [a serem implementadas](https://github.com/ConservationMetrics/gc-scripts-hub/blob/main/f/apps/gc_dataset_importer.app/README.md#todo) para futuras funcionalidades.