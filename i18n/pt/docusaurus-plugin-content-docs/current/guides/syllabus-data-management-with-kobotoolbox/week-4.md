---
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---
# Quarta semana: Limpeza de dados

## **Objetivos**

Ao final desta semana, você terá a capacidade de:

* **Identifique problemas comuns de qualidade dos dados** que surgem durante a coleta de dados, como entradas duplicadas, erros de digitação e dados faltantes.
* **Compreenda a importância e os objetivos da limpeza de dados** para preparar os dados para uma análise precisa.
* **Explore técnicas básicas e ferramentas externas** para realizar a limpeza de dados, reconhecendo as limitações do KoboToolbox nesse sentido.

## **📘 Introdução**

A limpeza de dados é uma parte muito importante do processo de coleta de dados. Ao longo da jornada de coleta de dados, surgirão problemas que afetarão a aparência dos dados, introduzindo questões como entradas duplicadas, erros de digitação, dados faltantes e alterações na estrutura dos dados à medida que o processo evolui. Isso exigirá que você faça ajustes nos dados para atender às suas necessidades de análise.

Na semana atual, abordaremos este tema compreendendo os diferentes propósitos da limpeza de dados e as ferramentas potenciais que podem ser utilizadas para isso. Embora esta seja uma introdução à limpeza de dados, é um assunto bastante complexo. Não teremos a oportunidade de explorar em profundidade. Compartilharemos informações e orientações ao longo do processo para que você possa aprender mais sobre este tópico.

## **📚 Materiais de Aprendizagem**

Para a análise aprofundada sobre limpeza de dados desta semana, você utilizará:

* **Compreendendo as Discrepâncias nos Dados:** Familiarize-se com os problemas comuns que ocorrem durante a coleta de dados, como **registros duplicados, erros de ortografia, dados faltantes e alterações na estrutura dos dados**.
* **Software de planilhas para limpeza de dados:** Utilize ferramentas de planilhas (por exemplo, **Microsoft Excel, Google Planilhas, LibreOffice Calc**) para limpar e organizar seus dados exportados. Embora a análise básica tenha sido abordada na semana 3, esta semana se concentra em técnicas específicas de limpeza de dados.
  * Limpeza de Dados com o Google Planilhas: https://www.youtube.com/watch?v=pIblnnAtjmk
  * Limpeza de dados com o Microsoft Excel: [https://www.youtube.com/watch?v=oT4emh72fuA](https://www.youtube.com/watch?v=oT4emh72fuA)
* **Introdução às Ferramentas Especializadas:** Explore como ferramentas especializadas de limpeza de dados, como **[OpenRefine](https://openrefine.org/)**, podem auxiliar no processo, especialmente considerando que os mecanismos integrados do KoboToolbox para limpeza são frequentemente insuficientes ou trabalhosos.
  * Limpeza de Dados com o OpenRefine: https://www.youtube.com/watch?v=jyUlT8ohlG4
* **Gerenciamento de Edições de Formulários e Persistência de Dados:** Compreenda as implicações de editar formulários durante a coleta, onde os dados podem parecer separados, exigindo **reajuste e reconciliação manuais fora do KoboToolbox**.

## **O que observar**

1. **Identifique os problemas óbvios**
   Procure por erros evidentes, problemas estruturais ou padrões inesperados nos dados.

2. **Lidando com Dados Ausentes**

   * **Detecção:** Identificar as colunas com valores ausentes (``NaN``, ``None``, ``null``, etc.) e quantificar a extensão da ausência (por exemplo, a porcentagem por coluna ou linha).
   * **Entendendo o Motivo:** Investigar os motivos da falta de dados (por exemplo, erros de entrada, falhas nos sensores, incompatibilidade) pode influenciar a estratégia de imputação mais adequada.
   * **Estratégias Comuns:**

     * **Exclusão:** Remova linhas ou colunas com valores ausentes (use com cautela).
     * **Preenchimento de valores ausentes:** Utilize métodos como a média, a mediana, a moda, interpolação ou lógica específica do domínio para preencher os valores ausentes.

3. **Lidar com Dados Incorretos ou Inconsistentes e Erros de Digitação**

   * **Padronização**:

     * **Caso:** Converta os dados de texto para um formato consistente (por exemplo, todas as letras minúsculas) para evitar categorias duplicadas como "Nova Iorque" e "nova iorque".
     * **Unidades:** Garanta que os valores numéricos utilizem unidades consistentes (por exemplo, converta todos os pesos para quilogramas).
     * **Formatos:** Padronizar os formatos de data, números de telefone, etc.
   * **Limpeza de Dados Categóricos:**

     * Agrupar categorias equivalentes (por exemplo, "EUA", "U.S.A.", "Estados Unidos" → "EUA").
   * **Correção de erros de digitação**:

     * Corrigir erros óbvios de ortografia (por exemplo, "Femal" → "Female").
     * **Limpeza de strings:** Remova espaços em branco extras, caracteres especiais ou fragmentos irrelevantes da string.
     * **Regras de Validação:** Aplicar regras como idade não negativa, formatos de código postal válidos, etc.

4. **Corrigindo Tipos de Dados**

   * Garanta que cada coluna tenha o tipo de dado apropriado (por exemplo, números armazenados como strings → converter para um formato numérico, strings de data → converter para datetime).
   * Tipos de dados incorretos podem levar a cálculos imprecisos e erros no modelo.

5. **Lidando com Valores Atípicos**

   * **Detecção:**

     * Ferramentas visuais: Gráficos de caixa, gráficos de dispersão.
     * Métodos estatísticos: Z-pontes, IQR, etc.
   * **Interpretação:** Compreenda se os valores atípicos são reais ou resultado de erros – isso é crucial para escolher a estratégia adequada.
   * **Opções de Tratamento:**

     * **Remoção:** Descarte os valores atípicos se forem claramente erros.
     * **Transformação:** Aplique transformações matemáticas (por exemplo, logaritmo, raiz quadrada) para reduzir a assimetria.
     * **Limitação (Winsorização):** Substitua valores extremos por percentis (por exemplo, o primeiro e o nono percentil).
     * **Agrupamento:** Converter variáveis contínuas em categorias.
     * **Imputação:** Trate os valores extremos como ausentes e preencha-os.
     * **Manter:** Preservar, se for relevante (por exemplo, detecção de fraude).

6. **Lidando com Duplicatas**

   * **Detecção:** Procure por linhas exatamente iguais ou muito semelhantes (geralmente com base em um subconjunto de colunas).
   * **Remoção:** Elimine os duplicados, mantendo a primeira ou última instância, conforme apropriado.
   * **Verificação de Contexto**: Verifique se não há observações duplicadas que sejam válidas e repetidas.

7. **Lidando com Dados Irrelevantes** (pode se sobrepor à seleção de recursos)

   * Remova as características que não contribuem para o problema em questão (por exemplo, colunas de identificação, campos com variância zero).
   * Simplifica o conjunto de dados e pode melhorar o desempenho do modelo.

8. **Validação e Documentação**

   * **Reavaliação do Perfil:** Após a limpeza, revise as estatísticas resumidas e as visualizações para verificar os efeitos das etapas de limpeza que você realizou e identificar quaisquer novos problemas.
   * **Documentação:** Mantenha um registro detalhado de todas as etapas de limpeza, decisões e suposições. Isso garante a reprodutibilidade, facilita a colaboração e preserva o contexto para uso futuro.

## **Atividades**

Para praticar e consolidar sua compreensão sobre a limpeza de dados:

1. **Identificar Inconsistências nos Dados:** Utilize um conjunto de dados exportado (idealmente de suas próprias pesquisas ou de uma amostra fornecida) e **identifique diversos problemas de qualidade dos dados**, como duplicatas, inconsistências e valores ausentes.
2. **Aplicar Técnicas Básicas de Limpeza de Dados:** Utilize uma ferramenta de planilha de sua escolha (por exemplo, Excel, Google Sheets) para **realizar operações básicas de limpeza de dados**. Isso pode incluir a remoção de entradas duplicadas, a correção de erros ortográficos, a padronização de entradas de texto e o tratamento de dados faltantes.
3. **Experimente com uma ferramenta de limpeza externa:** Se possível, **assista a um tutorial ou tente uma tarefa básica no OpenRefine** para entender como uma ferramenta especializada pode ajudar em tarefas de limpeza mais complexas.
4. **Analise os Desafios na Limpeza de Dados:** Documente os problemas específicos que você encontrou e as etapas que tomou para resolvê-los. Reflita sobre por que a limpeza de dados é um processo necessário após a coleta, e sobre sua importância para uma análise precisa.
5. **Compartilhe sua experiência:** Tire capturas de tela ou fotos da sua experiência e carregue-as em **[o questionário vinculado aqui](https://ee.kobotoolbox.org/x/GOQfALPW)**.
