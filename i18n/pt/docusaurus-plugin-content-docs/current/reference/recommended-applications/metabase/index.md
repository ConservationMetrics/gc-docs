---
sidebar_position: 3
tags: [itu-3, opu, tsp]
---

# Metabase

O Metabase é uma plataforma de inteligência de negócios de código aberto. Você pode usar o Metabase para fazer perguntas sobre seus dados ou incorporar o Metabase em seu aplicativo, permitindo que seus clientes explorem seus próprios dados.

Pode ser instalado localmente e pode ser usado para analisar conjuntos de dados locais, bem como conjuntos de dados provenientes de um data warehouse.

Estamos avaliando o Metabase como uma ferramenta para análise exploratória de dados.

## 🛠️ Guia de Instalação Local: Metabase + DuckDB no Windows

Este guia o guiará no processo de instalação do **Metabase** (edição de código aberto) em seu computador com Windows, na configuração para análise de dados localmente e no uso do **DuckDB** para ler arquivos CSV, para que o Metabase possa lê-los.

### 1. Instale o Java (Requerido para o Metabase)

O Metabase é executado em Java, portanto, você precisa instalá-lo primeiro.

1. Acesse [Adoptium.net](https://adoptium.net/temurin/releases/) (ou qualquer outro provedor OpenJDK).
2. Baixe o **Temurin JDK** para o seu sistema operacional (por exemplo, instalador do Windows x64).
3. Execute o instalador e finalize a instalação utilizando as opções padrão.
4. Verifique a instalação:

   * Abra o **Prompt de Comando** (pressione a tecla Windows → digite ``cmd`` → pressione Enter).
   * Tipo:

     ```sh
     java -version
     ```
   * Você deverá ver um número de versão (por exemplo, ``openjdk version "21.0.x"``).

### 2. Baixe o Metabase

1. Acesse [Downloads do Metabase](https://www.metabase.com/start/oss).
2. Baixe o arquivo **Metabase JAR** (``metabase.jar``).
3. Crie uma pasta chamada ``metabase`` no seu diretório de downloads (ou em qualquer diretório que você prefira).
4. Mova o conteúdo de ``metabase.jar`` para a pasta ``metabase``.

### 3. Adicionar o driver Metabase para DuckDB

1. Visite a página de lançamentos do driver [DuckDB Metabase](https://github.com/dacort/metabase-duckdb-driver/releases).
2. Baixe o arquivo mais recente ``.jar`` (o driver).
3. Dentro da pasta ``metabase``, crie uma subpasta chamada ``plugins`` (todas as letras minúsculas).
4. Mova o arquivo do driver DuckDB ``.jar`` para a pasta ``metabase/plugins``.

A estrutura de suas pastas deve ser semelhante a:

```
Downloads/
└── metabase/
    ├── metabase.jar
    ├── plugins/
    │   └── duckdb.metabase-driver.jar
    └── data/
```

(Criaremos o ``data/`` na etapa seguinte.)

### 4. Organize seus dados

1. Baixe seus dados no formato CSV (por exemplo, do Kobo Toolbox).
2. Crie uma pasta chamada ``data`` dentro da pasta ``metabase``.
3. Coloque o seu arquivo CSV na localização ``data/``.
4. Renomeie-o para manter a consistência, por exemplo:

   ```
   mydata.csv
   ```

### 5. Instale o DuckDB CLI (opcional)

Se você deseja manipular os dados antes de carregá-los no Metabase, ou convertê-los para outros formatos, pode usar a interface de linha de comando (CLI) do DuckDB.

1. Acesse [Lançamentos da Linha de Comando do DuckDB](https://duckdb.org/docs/installation/).
2. Baixe a versão mais recente da **interface de linha de comando** para o seu sistema operacional (por exemplo, ``duckdb_cli-windows-amd64.zip``).
3. Extraia o arquivo e mova o programa executável (``duckdb.exe``) para a pasta ``data``.

A pasta ``data`` agora deve conter:

```
data/
├── mydata.csv
└── duckdb.exe
```

### 6. Converter CSV para um banco de dados DuckDB (opcional)

1. Abra o prompt de comando e navegue até a pasta de dados:

   ```sh
   cd %HOMEPATH%\Downloads\metabase\data
   ```
2. Crie um banco de dados DuckDB e importe o arquivo CSV:

   ```sh
   duckdb mydata.db
   ```

   Dentro do shell do DuckDB, execute o seguinte comando:

   ```sql
   CREATE TABLE my_data AS
   SELECT * FROM read_csv_auto('mydata.csv');
   ```

   Verifique se funcionou:

   ```sql
   SELECT * FROM my_data LIMIT 10;
   ```

   Então, saia:

   ```sql
   .quit
   ```

Agora você tem um arquivo chamado ``mydata.db`` na sua pasta ``data``.

### 7. Execute o Metabase

1. Abra o prompt de comando e navegue até a pasta do Metabase:

   ```sh
   cd %HOMEPATH%\Downloads\metabase
   ```
2. Inicie o Metabase:

   ```sh
   java -jar metabase.jar
   ```
3. Espere até ver o valor em ``Metabase Initialization COMPLETE``.

### 8. Abra o Metabase no seu navegador

1. Abra um navegador e acesse:

   ```
   http://localhost:3000
   ```
2. Configure a partir do início (executar apenas uma vez):

   * Selecione o idioma.
   * Crie uma conta de administrador local (qualquer endereço de e-mail/senha, apenas lembre-se delas).
   * Se desejar, pode ignorar o rastreamento de análises/uso.

### 9. Conecte o banco de dados DuckDB

1. No Metabase, vá para **Configurações de Administração → Bancos de Dados → Adicionar Banco de Dados**.
2. Selecione **DuckDB** na lista.
3. Preencha:

   * **Nome Exibido:** `Your database name of preferrence`
   * **Caminho do Arquivo do Banco de Dados:** o caminho completo para ``mydata.db``
     (por exemplo, ``C:\Users\YourName\Downloads\metabase\data\mydata.db``)
4. Salve – agora você deverá ver seu banco de dados e tabela no Metabase.

### 10. Explore seus dados

* Vá para **Dados → Navegar nos dados → O nome do banco de dados que você prefere**.
* Clique em **Explorar** ou utilize a função "X-Ray" para permitir que o Metabase gere automaticamente os insights.
* Opcionalmente, crie **Modelos**, **Perguntas** ou **Painéis de Controle**.
* Você também pode usar o driver do DuckDB e criar Modelos que consultam diretamente arquivos CSV, como a instrução "SELECT * de 'meusdados.csv'". Nesse caso, o DuckDB será usado para consultar o arquivo CSV imediatamente.

✅ **Agora você tem uma configuração completa de análise local com o Metabase + DuckDB!**
Você pode repetir os passos 4-6 sempre que tiver novos dados em formato CSV.
