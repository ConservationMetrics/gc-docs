---
sidebar_position: 3
tags: [itu-3, idm, opu, tsp]
---

# Melhores Práticas no Projeto de Pesquisas

Esta página apresenta orientações práticas e testadas no campo para o design de formulários XLSForms robustos, que podem ser utilizados em KoboToolbox e ODK. O foco é evitar armadilhas comuns e reduzir a sobrecarga de limpeza e análise de dados.

## ✅ Planejamento da Estrutura do Formulário

### Estrutura do Plano Antes da Implementação

Alterar a estrutura do formulário após a coleta de dados ter começado pode fragmentar seu conjunto de dados.

Por exemplo, mover uma pergunta para um grupo posteriormente criará uma nova coluna nos resultados da exportação, em vez de modificar a original. Isso resulta no mesmo campo lógico aparecendo em várias colunas, o que dificulta a análise.

:::Dicas para uma boa utilização
- Defina os agrupamentos e a estrutura das perguntas antes da implementação.
- Teste o formulário com submissões de teste.
- Evite renomear ou mover perguntas após o início da coleta de dados.
- Se as mudanças forem inevitáveis, documente-as e planeje a consolidação dos dados.
:::

### Entenda como as edições no formulário de criação afetam os dados.

No construtor de formulários do KoboToolbox, mesmo pequenas edições (por exemplo, renomear uma pergunta) criam novas colunas no conjunto de dados.

:::aviso
Isso pode fazer com que os dados pareçam faltantes, mesmo quando na verdade foram movidos para uma nova coluna.
:::

:::dica
Você pode verificar os nomes das colunas no construtor de formulários do KoboToolbox.

Para usuários avançados, faça o download e revise o formulário como um arquivo XLSForm antes de implantá-lo para garantir a consistência na nomenclatura e estrutura.

## ❓ Elaboração de Perguntas

### Utilize perguntas de múltipla escolha em vez de caixas de texto, sempre que possível.

Evite o uso de campos ``text`` (string) para valores que vêm de um conjunto conhecido, por exemplo:

- Nomes dos participantes conhecidos
- Vilas ou regiões
- Categorias predefinidas

Textes livres podem levar a inconsistências, por exemplo:

- Variações na grafia
- Abbreviations
- Espaços adicionais
- Diferentes convenções de nomenclatura para a mesma entidade

Esses se tornam valores distintos no seu conjunto de dados e exigem limpeza.

:::Dica: Melhores práticas
- Utilize ``select_one`` ou ``select_multiple`` para qualquer conjunto de valores conhecido.
- Defina opções previamente sempre que possível.
:::

### Utilize títulos de perguntas significativas (e não apenas rótulos).

The `label` is what users see.  
The `name` is what appears in your exported dataset.

Se os valores de ``name`` forem ambíguos ou inconsistentes, seu conjunto de dados se torna difícil de trabalhar.

:::aviso Exemplo incorreto
`q1`, `q2`, `data_1`, `E5_Q4_1`
:::

:::dica
`household_size`, `respondent_village`, `water_source_type`
:::

:::aviso Evite espaços, letras maiúsculas e estilos diferentes
`Household Size`, `villageName`, `household-location`
:::

:::dica Utilize letras minúsculas com underlines
`household_size`, `respondent_village`, `water_source_type`
:::

:::dica Mantenha as perguntas relacionadas no mesmo formato
`household_size`, `household_income`, `household_location` – não é uma mistura de `hh_size`, `HouseholdIncome` e `income_hh`
:::

### Renomeie os nomes padrão a partir do construtor de formulários

Quando você adiciona perguntas ou grupos no construtor de formulários do KoboToolbox, ele automaticamente atribui nomes de substituição como ``Column_2``, ``Column_3`` ou ``group_xy12z``. Esses nomes são diretamente incluídos no conjunto de dados exportado, o que pode dificultar a análise posterior.

Os nomes dos grupos são tão importantes quanto os nomes das perguntas: os grupos são adicionados aos nomes das perguntas nas exportações. Uma pergunta chamada ``species`` dentro de um grupo chamado ``group_xy12z`` torna-se ``group_xy12z/species`` no conjunto de dados.

:::aviso: Exemplo incorreto
`group_xy12z/Column_2`, `Column_3`, `group_ab9/Column_5`
:::

:::tip Good example
`tree_survey/species`, `tree_survey/dbh_cm`, `respondent_info/village`
:::

:::Dicas para uma boa utilização
- Renomeie todas as perguntas e nomes de grupos gerados automaticamente antes da implantação.
- Forneça nomes concisos e descritivos para os grupos, pois eles usam um prefixo em todas as colunas filhas.
- Se você é um usuário avançado, pode revisar o arquivo XLSForm baixado para confirmar se não há configurações padrão restantes.
:::

## Lógica Condicional

### Utilize a lógica de exclusão para capturar valores como "Outros".

Um uso comum e eficaz da lógica condicional (para pular campos) é capturar um valor de texto livre chamado "Outro" apenas quando o usuário seleciona essa opção em uma lista ``select_one``.

Por exemplo, perguntar *"Qual é a espécie desta árvore?"*, com cinco espécies conhecidas mais uma opção ``other`` funciona bem – mas também você quer registrar o que realmente significa "outro", sem forçar todos os respondentes a digitar algo.

No XLSForm (e também no construtor de formulários do KoboToolbox), isso é feito usando a coluna ``relevant``, que controla se uma pergunta de acompanhamento deve ser exibida:

```xlsform
type: select_one tree_species  
name: tree_species  
label: What kind of tree is this?

type: text  
name: tree_species_other  
label: Please specify the tree species  
relevant: ${tree_species} = 'other'
```

O campo ``tree_species_other`` aparece apenas — e é armazenado apenas — quando a resposta anterior é ``other``.

:::dica Benefícios
- Mantém seu conjunto de dados organizado: apenas as colunas de texto livre contêm valores significativos.
- Evita a necessidade de os usuários digitarem algo para cada pergunta.
- Permite descobrir categorias ausentes ou novas sem poluir o campo principal ``select_one``.
:::

:::Dicas para uma boa utilização
- É sempre necessário associar uma opção ``other`` com um campo de texto que seja controlado por ``relevant``.
- Utilize o mesmo padrão para qualquer pergunta que envolve uma ramificação e depende de uma resposta anterior.
- Teste cada ramo (incluindo o caminho "Outro") antes do lançamento.
:::

## 🕒 Metadados e Campos Automáticos

### Evite perguntas sobre datas repetitivas.

Não é necessário perguntar aos usuários "Qual é a data de hoje?".

O XLSForm já oferece campos de metadados integrados, como ``today`` e os horários de envio.

:::Dica: Melhores práticas
- Utilize os campos de metadados em vez de perguntas manuais sobre datas.
- Diminui a necessidade de esforço do usuário e evita erros de entrada.
:::

## ✅ Validação e Restrições de Dados

### Utilize restrições para garantir a entrada de dados válida.

Muitas perguntas numéricas possuem limites naturais, por exemplo:

- O tamanho da família não pode ser negativo.
- A idade deve estar dentro de uma faixa razoável.

Sem restrições, valores inválidos podem entrar no seu conjunto de dados e exigir limpeza posterior.

Por exemplo, uma restrição:

```xlsform
type: integer  
name: household_size  
constraint: . >= 0  
constraint_message: "Value must be zero or greater"
```

(Observação: o período ``.`` é usado para referenciar a pergunta na linha onde você está adicionando uma restrição.)

Para obter mais informações sobre as restrições e os possíveis valores que uma restrição pode ter, consulte a documentação do `$CODEVAR[XLSForm]` (disponível em: [https://support.kobotoolbox.org/constraints\_xls.html](https://support.kobotoolbox.org/constraints_xls.html)).

:::Dicas para uma boa utilização
- É sempre importante definir intervalos válidos para entradas numéricas.
- Forneça mensagens de validação claras para os responsáveis pela coleta de dados.
- Utilize restrições para identificar erros no momento da entrada de dados.
:::

## 🧮 Dados e Cálculos Derivados

### Utilize os Campos Calculados para obter valores derivados.

O tipo ``calculate`` permite calcular valores que não são exibidos ao usuário, mas estão incluídos no conjunto de dados.

Is extremamente útil para, por exemplo:

- Totals
- Flags
- Indicadores pré-calculados

Por exemplo, se você coletar:

- Número de adultos
- Número de crianças

Você pode calcular o número total de membros da família:

```xlsform
type: calculate  
name: household_total  
calculation: ${num_adults} + ${num_children}
```

:::dica Benefícios
- Diminui a necessidade de processamento posterior.
- Garante a consistência em todas as submissões.
- Permite a execução de fluxos de trabalho posteriores (por exemplo, filtragem, painéis).
:::

## 📚 Quando estiver em dúvida: Onde encontrar mais informações

Se você não tem certeza de como implementar algo ou deseja obter mais informações, estes são recursos confiáveis e bem mantidos:

- **Documentação do XLSForm** → http://xlsform.org/  
  Especificações e documentação essenciais para a estrutura e funcionalidades do XLSForm.

- **Soluções de Dados Humanitários (YouTube)** → https://www.youtube.com/@HumanitarianDataSolutions  
  Tutoriais práticos, guias passo a passo e dicas de uso do KoboToolbox no mundo real.

- **Guia KoboToolbox XLSForm** → https://support.kobotoolbox.org/guia\_para\_iniciar\_com\_xlsform.html  
  O guia oficial do KoboToolbox, incluindo recursos e restrições específicas da plataforma.

- **Tutorial do ODK** → https://docs.getodk.org/tutorial-primeiro-formulário/  
  Guia passo a passo para criar formulários.

- **Referência do Formulário ODK** → https://docs.getodk.org/form-reference/  
  Referência completa para todos os tipos de perguntas do XLSForm, funções e lógica avançada.

:::dica
Se estiver com dificuldades, procure primeiro no fórum da comunidade do KoboToolbox ou na documentação do ODK – a maioria dos casos especiais já foram encontrados e resolvidos.