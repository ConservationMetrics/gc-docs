---
tags: [itu-3, opu, tsp]
---
# Apêndice 1: Habilitando Múltiplos Computadores para Rotulagem

Projetos de time-lapse de grande escala geralmente envolvem várias pastas do site, cada uma contendo uma cópia (“conjunto filho”) do banco de dados do projeto (`.ddb`). O time-lapse permite que você visualize subconjuntos de um projeto, faça anotações independentemente (em outro computador ou para outro usuário) e, em seguida, combine essas alterações com o banco de dados principal. Esse fluxo de trabalho ajuda as equipes a ampliar a anotação em vários sites ou observadores.

Esta seção descreve como trabalhar com um arquivo **mestre existente ``.ddb``,** como criar e gerenciar conjuntos filhos, e como integrá-los de forma segura de volta ao projeto principal.

---

# Quick Start: Merging Timelapse Databases

If you are working on a large Timelapse project with multiple site folders, use the check-out / check-in workflow to keep all annotations synchronized with a single master `.ddb` file.

### Quick Workflow

1. **Open the master `.ddb`** in the project root.  
2. **Check out** a child set:  
   - Go to *File → Merge Datasets  → Check out (copy) a sub-folder database from the master database...*.  
   - Select a site or subfolder to create a child `.ddb`.  
3. **Annotators work only in the child `.ddb`** inside that subfolder.  
4. When annotation is complete, the child `.ddb` is returned to the project manager.  
5. **Check in the child `.ddb`**:  
   - Open the master `.ddb`.  
   - Go to *File → Merge Datasets  → Check in (merge) a sub-folder’s database into the master database...*.  
   - Select the child `.ddb` to merge changes back into the master.

### Key Rules

- **Do not annotate in the master `.ddb`** once child sets have been created.  
- **Do not change field definitions** in child sets.  
- Always **check out from the master** and **check in to the master**.  
- Use **consistent folder naming** for sites/stations to keep merges clean.

This workflow scales cleanly across many annotators and ensures the master database remains the authoritative source for all project metadata.


---
    
## Overview
    
O Timelapse suporta um sistema de *retirada/devolução* projetado para conjuntos de dados grandes, distribuídos em várias subpastas. O fluxo de trabalho geral é o seguinte:
    
1. **Comece a partir do arquivo principal, o ``.ddb``, localizado na raiz do projeto.**  
2. Verifique se os conjuntos para crianças estão organizados nas pastas do nível do site (ou em qualquer estrutura de subpastas que você utilize).  
3. Os revisores podem abrir e trabalhar apenas nos arquivos filhos ``.ddb`` que foram previamente verificados.  
4. Após a anotação ser concluída, os arquivos ``.ddb`` são **restituídos**, integrando as alterações na versão principal.

Isso garante que todas as metadados, anotações e campos derivados sejam consolidados em um único banco de dados autoritário.

---
    
## Preparing the Master Database
    
Before creating child sets:
    
1. Open the **master** project `.ddb` in Timelapse.
2. Confirm that:
    - The image root folder is correct.
    - Templates and field definitions are up-to-date.
    - The master `.ddb` opens without errors and displays all images as expected.

If needed, run **File → Expose Missing Images** or **Reindex Folders** to confirm the project structure is healthy.

---
    
## Verificando conjuntos de crianças
    
### Quando criar conjuntos para crianças
    
Você deve criar conjuntos filhos quando:
    
- Os anotadores trabalharão em diferentes pastas de implantação ou sites de forma independente.
- Você deseja evitar que vários usuários modifiquem o arquivo principal ``.ddb`` simultaneamente.
- O projeto contém milhares de imagens e precisa ser dividido para melhorar o desempenho.

### Como verificar a saída de uma criança

1. Abra o **arquivo principal `.ddb`**.
2. Vá em **Arquivo → Combinar Conjuntos de Dados → Faça o checkout (copie) um banco de dados de uma subpasta do banco de dados principal...**.
3. Na estrutura de pastas, selecione a **subpasta** para a qual você deseja criar um conjunto filho.  
(por exemplo, estações ou sistemas de vigilância individuais)
4. A sequência de vídeo cria:
    - Um arquivo chamado "**`.ddb`**" para crianças, localizado dentro da pasta selecionada.
    - Uma cópia das definições de campo e metadados, referentes apenas às imagens naquela subpasta.

Cada conjunto infantil contém tudo o que os anotadores precisam para trabalhar de forma independente no Timelapse.

### O que os anotadores fazem

Os anotadores devem:
    
- Abra o arquivo **`.ddb`** diretamente da subpasta.
- Faça anotações normalmente.
- Evite mover ou renomear arquivos de imagem durante a anotação.
- Evite alterar as definições dos campos (estas devem ser controladas na versão principal/original).

Após a conclusão, os anotadores devolvem o ``.ddb`` ao gerente do projeto para verificação.

---
    
## Checking In Child Sets (Merging Back to Master)
    
When all annotations for a child set are complete:
    
1. Move or copy the **child `.ddb`** back to its original subfolder on the computer that manages the master `.ddb` (if it isn’t already there).
2. Abra o **arquivo principal `.ddb`**.
3. Go to **File → Merge Datasets  → Check in (merge) a sub-folder’s database into the master database...**.
4. Select the child `.ddb` to merge.

Timelapse will:
    
- Compare the child set’s annotations with the master.
- Merge new or updated metadata and annotations.
- Preserve existing data in the master where necessary.
- Flag conflicts if a record was edited in both the master and the child set.

### Typical Conflict Handling

Conflicts are rare if only annotators modify the child sets. When conflicts occur, Timelapse presents a dialog allowing you to choose which version to keep.

After check-in finishes, the master `.ddb` contains all updated annotations for that subfolder.

---
    
## Melhores Práticas para Projetos de Grande Escala
    
- **Nunca faça anotações diretamente no banco de dados principal** após a criação dos conjuntos "filho".  
- **Utilize nomes de pastas consistentes** que já existem na estrutura de pastas do projeto para conjuntos filhos em nível de site ou estação.  
- Sempre **retorne** o material utilizando a mesma chave e **devolva** o material usando a mesma chave.  
- Não altere as definições de campos dentro de bancos de dados filhos; gerencie apenas os campos a partir do banco de dados principal.  
- Após verificar a entrada de todos os conjuntos de crianças, faça um backup do conjunto principal ``.ddb`` e considere exportar arquivos CSV para processamento posterior.

---
    
## Summary
    
O sistema de check-out/check-in do Timelapse oferece um fluxo de trabalho robusto para projetos de grande porte que utilizam câmeras fotográficas. Ao começar com uma única pasta principal ``.ddb``, distribuir subpastas e mesclar anotações posteriormente, as equipes podem anotar grandes conjuntos de dados de forma eficiente, mantendo assim um único banco de dados de projeto unificado.
