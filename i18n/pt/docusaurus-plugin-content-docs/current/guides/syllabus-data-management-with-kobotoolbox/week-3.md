---
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---
# Semana 3: Análise e visualização de dados

## **Objetivos**

* Realize uma análise básica de dados utilizando planilhas eletrônicas.
* Aproveite os recursos de relatório integrados do KoboToolbox.

## **📘 Introdução**

A análise dos dados coletados é fundamental para a tomada de decisões informadas. É um campo complexo e abrangente. Nesta semana, você aprenderá a realizar análises básicas e visualizar dados usando planilhas eletrônicas.

## **📚 Materiais de Aprendizagem**

* Análise de dados com a ferramenta do planilha: [https://www.youtube.com/watch?v=_g5roKHj95o](https://www.youtube.com/watch?v=_g5roKHj95o)
  
  Observação: Embora este vídeo esteja focado no Microsoft Excel, as mesmas técnicas se aplicam ao Google Planilhas ou ao LibreOffice Calc.
* Exportar e gerar relatórios de dados do KoboToolbox: [https://www.youtube.com/watch?v=Vo9IbQvm8Rg](https://www.youtube.com/watch?v=Vo9IbQvm8Rg)
* Tabel dinâmicos no Excel: [ https://www.youtube.com/watch?v=dvbLrwD2SpA](https://www.youtube.com/watch?v=dvbLrwD2SpA). É uma ferramenta poderosa para analisar dados tabulares, como os produzidos pelo KoboToolbox.

  Observação: Embora este vídeo esteja focado no Microsoft Excel, as mesmas técnicas se aplicam ao Google Planilhas ou ao LibreOffice Calc.

## **Atividades**

1. **Limpeza de dados:** Utilize o Excel (ou outra ferramenta) para limpar e organizar os dados exportados.
2. **Análise básica:** Crie tabelas dinâmicas e gráficos para resumir os dados.

## **📚 Recursos adicionais obtidos durante o processo de check-in**

### **Agrupar Perguntas no KoboToolbox**

Na última sessão, revisamos os recursos do KoboToolbox para agrupar perguntas. Para relembrar, o agrupamento permite combinar conjuntos de perguntas que tenham o mesmo significado ou propósito.

Além disso, você pode aplicar lógica de "pular" a esses grupos de perguntas em conjunto. Por exemplo, se você criar um grupo de perguntas específico para um determinado grupo de pessoas, como membros do conselho ou professores, a lógica condicional pode ser aplicada para que apenas essas pessoas vejam essas perguntas.

Você pode encontrar mais informações sobre essa funcionalidade aqui: https://www.youtube.com/watch?v=DQ8vb6G-Br8

### **Formatos de exportação de dados**

Conversamos sobre as diferenças entre os formatos de exportação XLS e CSV, observando que, embora o conteúdo dos dados seja idêntico, os arquivos XLS são geralmente mais fáceis de abrir com ferramentas de planilha, enquanto o formato CSV garante a legibilidade futura devido à sua natureza aberta.

### **Limitações do Kobo Collect em comparação com a interface web**

Sandro e Kirsty compartilharam conosco suas experiências, afirmando que a interface web carece de funcionalidades de integração com hardware, como GPS e gravação de áudio. O aplicativo para Android é mais robusto para coleta de dados offline e lida com o envio de dados de forma mais eficiente do que o aplicativo web, que pode ter limitações específicas do navegador.

Por outro lado, o aplicativo Kobo Collect para Android não oferece nenhuma funcionalidade de revisão ou edição de envios, portanto, cria um fluxo de trabalho muito rígido. Se ele não atender às suas necessidades, pode interferir nos seus próprios processos.

Além disso, a interface web permite uma experiência sem atrito, exigindo apenas um link para enviar os envios.

Na prática, você poderia criar uma pesquisa e exportar um link de formulário que poderia compartilhar com qualquer grupo de pessoas com quem está trabalhando por e-mail, WhatsApp ou outro meio, e eles estariam prontos para fazer os envios imediatamente.

No final das contas, dependendo do que vocês têm disponível, vocês escolherão qual opção é a mais adequada para suas necessidades de coleta de dados.

### **Tipos de Perguntas do Kobo**

Discutimos os diferentes tipos de perguntas disponíveis no KoboToolbox.
Este é o link compartilhado na chamada: https://support.kobotoolbox.org/question_types.html

![Question types](img/question-types.png)

### **Pesquisas de Clonagem para Fins Práticos**

Uma boa maneira de experimentar as funcionalidades do KoboToolbox é clonar uma pesquisa existente e praticar com a versão clonada. Também é uma boa forma de realizar edições que não são recomendadas. Ao clonar a pesquisa em um novo projeto, você mantém o projeto original intocado, assim como as respostas coletadas dentro dele.

### **Biblioteca de perguntas**

A função "Biblioteca" permite que os usuários salvem grupos de perguntas como modelos para reutilização em diferentes formulários. Essa funcionalidade é muito útil para economizar tempo, especialmente ao lidar com listas longas de opções ou perguntas frequentemente feitas, pois elimina a necessidade de inserir informações repetidamente e também ajuda a criar uma estrutura específica nas pesquisas.

Você pode encontrar mais informações sobre este recurso na documentação da [Biblioteca de Perguntas](https://support.kobotoolbox.org/question_library.html).

### **Edições de formulários e persistência de dados**

 Os dados nunca são perdidos quando um formulário é editado; em vez disso, o Kobo cria novas colunas para as perguntas atualizadas, separando efetivamente os dados para diferentes versões.

 Embora isso seja o caso, realizar edições após começar a coletar as respostas torna a aba de análise inútil, pois apenas os dados que estejam em conformidade com a última pesquisa serão visualizados ali. Nesse caso, você precisará confiar em ferramentas externas para visualização de dados.

 De qualquer forma, o fluxo de trabalho sugerido assume que a limpeza e visualização de dados ocorrem fora do KoboToolbox.

### **Limpeza de Dados e Ferramentas Externas**

Data cleaning is a necessary post-collection process, as KoboToolbox provides simple mechanisms that generally fall short or very labour intensive for the task. 
Other tools for exploring external tools like Spreadsheet tools (LibreOffice, Microsoft Office, Google Spreadsheets), specialized Data Cleaning tools like OpenRefine assist with this process.

Este processo é particularmente necessário quando se edita um formulário entre a coleta de dados, pois os dados aparecem separados no final da planilha após as atualizações, exigindo realinhamento manual. Além disso, não existe nenhuma funcionalidade no KoboToolbox para realizar essa reconciliação.