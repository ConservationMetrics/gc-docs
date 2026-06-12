---
tags: [itu-3, opu, tsp]
---

# Apêndice 3: Exportando Imagens para o Visualizador de Vida Selvagem do GC

O ``gc-wildlife-viewer`` requer três fontes de dados primárias para funcionar:

1. Um arquivo CSV exportado do **Timelapse.exe** (``ImageData.csv``)  
2. Uma pasta de imagens exportadas do Timelapse (`TimelapseExport`).  
3. Uma pasta contendo miniaturas geradas a partir das imagens de time-lapse (``thumbs``)

Esta seção explica como gerar esses arquivos e organizá-los para o aplicativo.

---

## Timelapse Data Export

The raw Timelapse data are stored in a SQLite database. The app, however, uses an **exported CSV** to simplify access. Currently, only **subset selections** of the Timelapse database are supported; full-database exports are not yet supported.

### Exporting a Selection

1. Open **Timelapse.exe** and use the selection menu to choose the subset of images you want to work with. For example:  
- Images marked as **Favorite**  
- Images with non-blank data fields (e.g., `local_name`)  

2. Export the tabular data as a CSV file:  
```
File → Export or import data to/from a CSV file → Export image/video data in the current selection to CSV...
```
Save this file as `ImageData.csv`.

3. Export the corresponding images for the dashboard:  
```
File → Export (copy) Image/Video files to another folder → Copy all Image and Video files in the current selection to...
```

:::important

Its suggested to use the option to "Put in Subfolder" with the subfolder names `TimelapseExport`. 

It is Required to "Rename files to include their subfolder location if any""
Place the exported images in a folder named `TimelapseExport`.

![Screenshot of Export (by copying) current selected files](/img/guides/guide-timelapse-project/export_window_dialog.jpg)
:::

---

## Estrutura de Pastas

O aplicativo espera a seguinte estrutura dentro de uma pasta raiz chamada ``<images>``:
```
images/
├── ImageData.csv
├── TimelapseExport/
│ ├── image1.jpg
│ ├── image2.jpg
│ └── ...
└── thumbs/
```

- `ImageData.csv` → arquivo CSV exportado do Timelapse  
- `TimelapseExport/` → pasta contendo as imagens selecionadas  
- `thumbs/` → pasta para as miniaturas geradas; a aplicação criará esta pasta automaticamente, caso ela não exista.

> **Importante:** O arquivo ``ImageData.csv`` é obrigatório. Se estiver ausente ou modificado incorretamente, o aplicativo irá travar.

---

## Estratégia de Armazenamento de Arquivos

Para evitar a exclusão ou modificação acidental de ``ImageData.csv``:

- O aplicativo utiliza **dois suportes de volume**:  
1. `datalake` – acessível ao usuário; os arquivos podem ser renomeados, movidos ou excluídos através do FileBrowser.  
2. `gc-wildlife` – apenas para administração; a aplicação lê os dados deste local.

- Inicialmente, o aplicativo verificará se ``ImageData.csv`` existe na montagem ``gc-wildlife`` (apenas para administrador). Se não existir, uma cópia será criada a partir de ``datalake`` e armazenada em ``gc-wildlife``. Todas as leituras subsequentes ocorrerão a partir deste local seguro.

Isso garante que o aplicativo possa funcionar com segurança, mesmo se os usuários modificarem arquivos em ``datalake``.

:::Nota

Se os arquivos no data lake forem atualizados intencionalmente, o administrador da aplicação deve atualizar manualmente o arquivo `ImageData.csv` no repositório de dados da GC para vida selvagem.

:::
