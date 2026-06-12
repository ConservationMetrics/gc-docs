---
tags: [itu-3, opu, tsp]
---
# Apêndice 2: Excluindo Arquivos e Dados

O Timelapse oferece várias ferramentas para remover imagens, gravações e metadados associados de um projeto. As exclusões são permanentes, por isso, essas ferramentas devem ser utilizadas com cuidado – especialmente ao trabalhar em projetos compartilhados ou com vários colaboradores.

Esta seção resume o fluxo de trabalho recomendado para excluir arquivos e dados com segurança dentro de um projeto existente de "Timelapse".

---

# Quick Start: Deleting Files and Data

Use Timelapse’s deletion tools to remove images, records, or empty folders while keeping the project database synchronized. Deletions are permanent, so always confirm before proceeding.

### Quick Workflow

1. **Delete files + records**  
   - Select images → *Edit → Delete → All selected image or video files marked for deletion and their data*  
   - Removes the image files from disk and deletes their metadata.

1. **Delete files**  
   - Select images → *Edit → Delete → All selected image or video files marked for deletion*  
   - Removes the image files from disk (or sends them to the "DeletedFiles" folder depending on your Preferences).

2. **Delete records only (keep files)**  
   - Select records → *Edit → Delete → Only the data associated with all selected image or video files marked for deletion…*  
   - Removes metadata from the `.ddb` but leaves image files untouched.

3. **Check for missing files first**  
   - Run *Edit → Try to find this (and anyother) missing files...* to ensure deletions are intentional.

### Key Rules

- Always **back up the master `.ddb`** before bulk deletions.  
- Perform deletions only in the **master database** (not child sets).  
- Use “Delete Records Only” if you are uncertain—files can be re-imported later.  
- Avoid deleting files that may be needed for QC, machine-learning workflows, or future annotation.

This  workflow helps maintain a clean, synchronized project while minimizing accidental data loss.

---

## Overview

Existem muitas razões pelas quais os arquivos podem precisar ser excluídos de um projeto:

- Imagens duplicadas foram encontradas no conjunto de dados.
- As imagens são capturadas antes ou depois de uma operação, após a remoção da câmera de um local.
- As imagens são de natureza delicada: elas podem ser explícitas, registrar atividades ilegais ou mostrar pessoas sem o seu consentimento.
- As imagens estão vazias e sua organização/colaboradores não têm planos de treinar modelos de detecção no futuro. 

Normalmente, recomendamos salvar todas as imagens coletadas pelas câmeras. No entanto, cada projeto precisará definir sua própria política e fluxo de trabalho. 

---

Timelapse allows you to delete:

- Image files
- Associated database records
- Empty folders that contain no remaining images
- Records only (while leaving image files untouched)

In all cases, Timelapse ensures that the project database stays synchronized with the underlying image folder structure.

To delete files, you must first mark the files you wish to delete with the "Delete?" flag.  Only images that have been marked with this flag AND are in your current selection will be deleted.  

The behavior of Timelapse delete functionality can be configured in the **Options → Preferences → How to deleted files are managed**.  By default, image files that are "deleted" and not actually removed from disk, but instead they are moved into a the root folder into a new subfolder called "DeletedFiles".  This way they are removed from the project but recoverable.

:::tip
To be able to use the delete functionality in Timelapse for >1 file at a time, you must have the "Delete?" flag field marked "Visible" in your Template.  
:::
---

## Excluir arquivos e registros de imagem.

Utilize esta opção quando você deseja remover tanto os arquivos quanto as entradas do banco de dados.

1. Selecione a(s) imagem(ns) que deseja excluir na visualização em formato de fita ou na visualização em grade.
2. Vá para **Editar → Excluir → Todos os arquivos de imagem ou vídeo selecionados e seus dados, que foram marcados para exclusão**.
3. Revise a caixa de diálogo de confirmação. O "Timelapse" exibirá:
   - O número de arquivos a serem excluídos
   - O número de registros no banco de dados que serão removidos.
4. Confirme a exclusão permanente dos arquivos selecionados do disco (ou mova-os para a pasta "ArquivosExcluídos", dependendo das suas configurações), e remova seus metadados do ``.ddb``.

Esta ação não pode ser desfeita. Utilize-a apenas quando tiver certeza de que as imagens não devem mais fazer parte do projeto.

---

## Deleting Records Only (Keeping Files)

Use this option when the **image files should remain**, but their Timelapse metadata needs to be removed (e.g., when re-importing or reprocessing folders).

1. Select the records to remove.
2. Go to **Edit → Delete → Only the data associated with all selected image or video files marked for deletion…**.
3. Confirm the action in the dialog.

Timelapse will remove the metadata rows from the `.ddb`, but the image files remain in the folder.

This is useful when:
- A folder was annotated incorrectly and you want to start over.
- You are re-running import or template steps.
- You are cleaning up duplicate database entries.

---

## Lidando com arquivos ausentes antes da exclusão

Antes de excluir qualquer registro, verifique se os arquivos ausentes ou movidos foram removidos intencionalmente.

Use:

- **Arquivo → Revelar arquivos ausentes**  
  para destacar entradas de banco de dados que não correspondem mais aos arquivos armazenados em disco.

Isso ajuda a garantir que você não está excluindo registros que foram criados acidentalmente devido a incompatibilidades de caminho ou reorganização de pastas.

---

## Best Practices

- **Back up the `.ddb` file** before doing large deletions.  
- For multi-user workflows, perform deletions only in the **master `.ddb`**, not in child sets.  
- Avoid deleting files if they may be needed for re-annotation, machine-learning extraction, or downstream QC.  
- Use “Delete Records Only” when you are unsure—files can be re-imported but deleted images cannot be restored.

---

## Summary

O recurso de "timelapse" oferece ferramentas flexíveis para excluir permanentemente arquivos e registros, ou apenas limpar as entradas do banco de dados. Utilize a exclusão de arquivos quando as imagens realmente não pertencem ao projeto, e utilize a exclusão apenas de registros quando você precisar redefinir ou reorganizar as entradas do banco de dados, preservando os arquivos subjacentes.
