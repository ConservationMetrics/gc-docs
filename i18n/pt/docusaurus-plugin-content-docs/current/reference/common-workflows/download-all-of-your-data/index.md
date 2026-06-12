---
sidebar_position: 2
tags: [itu-3, opu, tsp]
---

# Baixe todos os seus dados

Como parte do nosso compromisso com a soberania de dados (ver: `/overview/design-principles/#-data-sovereignty-and-control`), o Guardian Connector oferece várias maneiras para os usuários acessarem seus dados do projeto a qualquer momento. Isso garante que você mantenha total controle sobre seus dados e possa exportá-los quando necessário.

## Por que baixar todos os seus dados?

Existem várias situações em que você pode querer baixar todos os seus dados:

- **Conclusão do projeto**: Você terminou de usar o Guardian Connector e deseja levar seus dados do projeto para outro lugar.
- **Cópia de segurança:** Você deseja criar uma cópia de segurança local dos seus dados para protegê-los.
- **Migração:** Você está planejando mudar para uma plataforma ou provedor de hospedagem diferente.

## Quais dados você pode baixar?

O Guardian Connector armazena diferentes tipos de dados, e as opções de exportação variam dependendo das suas necessidades:

### 📊 **Dados do Projeto** (Foco Principal na Exportação)
- **Dados estruturados**: Respostas de pesquisas, dados espaciais e outros dados estruturados armazenados no banco de dados do armazém PostgreSQL.
- **Arquivos**: Imagens, documentos, arquivos de mídia e arquivos de dados exportados armazenados em armazenamento persistente.

### ⚙️ **Dados de Configuração** (Disponíveis somente através do backup da máquina virtual)
- Metadados do Guardian Connector Explorer e painéis do Superset
- Configurações de scripts para moinhos de vento e fluxos de trabalho programados.
- Configuração da plataforma CapRover
- Dados brutos do CoMapeo na nuvem

## Como baixar seus dados

O Guardian Connector oferece vários métodos para baixar seus dados, cada um adequado a diferentes cenários:

### Método 1: Baixar através do GC Scripts Hub (Recomendado)

A abordagem mais completa utiliza scripts disponíveis no [GC Scripts Hub](referência/gc-toolkit/gc-scripts-hub/) para exportar os dados do seu projeto:

#### Baixar Dados em Formato de Tabela
O script ``download_all_postgres_data`` exporta todos os dados tabulares específicos do projeto do banco de dados PostgreSQL:

- Dados de pesquisa provenientes do KoboToolbox, CoMapeo e outros conectores.
- Dados tabulares carregados manualmente
- Todos os dados são exportados como arquivos CSV e compactados em um único arquivo ZIP.
- Após a criação, você pode baixar o arquivo utilizando o `[Filebrowser](/reference/gc-toolkit/filebrowser/)`.

#### Baixar Arquivos (Azure)
O script ``download_all_files_azure`` fornece acesso seguro aos dados armazenados em formato de arquivo, que estão localizados no Azure Blob Storage:

- Gera um URL seguro usando o `[SAS (Shared Access Signature)](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview)` com acesso temporário.
- Oferece os comandos ``azcopy`` para diferentes destinos:
  - Disco local (baixar para o seu computador)
  - Caminho do AWS S3 (transferência entre nuvens)
  - Armazenamento no Google Cloud (transferência entre nuvens)
  - Outro espaço de armazenamento do Azure (transferência entre nuvens).

:::dica
**Vantagens de usar o script `download_all_files_azure`:**
- Transferências rápidas, especialmente entre serviços de nuvem.
- Opções de destino flexíveis
- Sem sobrecarga adicional no seu ambiente de implantação do Guardian Connector.
- Transferências que podem ser retomadas caso sejam interrompidas
:::

### Método 2: Baixar através do explorador de arquivos

Para conjuntos de dados menores, você pode usar o [Filebrowser] diretamente: (/referência/gc-toolkit/filebrowser/)

1. Navegue até o "Filebrowser" na sua instância do Guardian Connector.
2. Selecione os arquivos ou pastas que você deseja baixar
3. Clique no botão "Baixar" para criar um arquivo ZIP.

:::nota
Este método funciona bem para conjuntos de dados menores, mas pode ser lento ao lidar com grandes coleções de arquivos (vários gigabytes ou mais).
:::

### Método 3: Backup Completo do Sistema (Avançado)

Para cenários em que você precisa de dados de configuração ou pretende migrar toda a sua instância do Guardian Connector, você pode solicitar um backup completo da máquina virtual ao seu provedor de hospedagem. Isso inclui:

- Todos os dados do projeto
- Configurações
- Metadados da plataforma
- Configurações de serviço

Entre em contato com o administrador do seu provedor de conectividade ou com o seu provedor de hospedagem para obter ajuda com esta opção.

## Considerações importantes

### ⚠️ Planeje seus envios com antecedência
- Evite a execução de exportações enquanto novos dados estão sendo carregados ativamente no armazém, para evitar capturas inconsistentes.
- Agende as exportações para períodos de baixa atividade.
- Considere realizar as exportações após a conclusão das principais campanhas de coleta de dados.
- Os scripts de exportação devem ser executados dentro de um ambiente de implantação do Guardian Connector ativo.

### 💾 Armazenamento e acesso
- Exportações em grande escala podem consumir um espaço de disco considerável.
- Os arquivos exportados são armazenados em um armazenamento persistente e podem não estar acessíveis após o desligamento do Guardian Connector.

## Precisa de ajuda?

Se você encontrar problemas ou precisar de ajuda com a exportação de dados:

- Consulte a documentação do [GC Scripts Hub](/referência/gc-toolkit/gc-scripts-hub/) para obter informações detalhadas sobre os scripts.
- Entre em contato com o administrador do seu conector Guardian

---

🌀 *Esta funcionalidade faz parte do compromisso do Guardian Connector com a **soberania dos dados e o controle do usuário**. Seus dados pertencem a você, e estamos comprometidos em facilitar o acesso e a exportação sempre que necessário.*

