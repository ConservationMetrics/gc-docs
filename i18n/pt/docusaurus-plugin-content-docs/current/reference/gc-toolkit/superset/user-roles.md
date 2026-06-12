---
sidebar_position: 2
tags: [itu-3, opu, tsp]
---

# Funções do Usuário

O Superset utiliza um sistema baseado em funções para controlar o que os usuários podem ver e fazer dentro da plataforma. Quando os usuários são autorizados a acessar sua instância do Superset Guardian Connector, eles recebem automaticamente uma função padrão, que define suas permissões.

Existem quatro funções disponíveis para os usuários:

- **Administrador:** Controle total sobre a instância do Superset.
- **Alpha**: Criadores de conteúdo com amplo acesso
- **Gamma:** Acesso somente para leitura com permissões seletivas
- **Público:** Acesso para usuários que não estão logados

## Papel do Usuário Padrão

Novos usuários recebem o papel "**Alpha**" por padrão, o que oferece um bom equilíbrio entre funcionalidade e segurança. Este papel permite que os usuários:

- Visualize e interaja com todos os painéis e gráficos.
- Criar seus próprios painéis e visualizações.
- Explore dados sem ter acesso a credenciais confidenciais do banco de dados.
- Compartilhe seu trabalho com outros usuários

## Funções Disponíveis

### 👑 Administrador
**Controle total sobre a instância do Superset**

Os administradores têm acesso completo para gerenciar todo o ambiente do Superset:
- Gerenciar contas de usuário e atribuir funções.
- Visualize e edite todos os painéis, gráficos e conjuntos de dados.
- Acesse os credenciais e as configurações de conexão do banco de dados.
- Configure as fontes de dados e configurações de segurança.
- Conceder ou revogar o acesso a recursos específicos

*Ideal para: Administradores de sistemas e coordenadores técnicos*

### 🔧 Alfa
Criadores de conteúdo com amplo acesso

Os usuários Alpha podem trabalhar com dados e criar conteúdo, mas não podem gerenciar as configurações do sistema.
- Acesse todas as fontes de dados e painéis disponíveis.
- Crie, edite e compartilhe seus próprios painéis e gráficos.
- Explore dados e crie novas visualizações.
- Não é possível gerenciar outros usuários ou visualizar as credenciais do banco de dados.
- Não é possível editar painéis e gráficos que não são seus próprios.
- Não é possível adicionar novas fontes de dados ao sistema.

*Ideal para: Coordenadores de comunidades, analistas de dados e criadores de painéis interativos*

### 📖 Gamma
Acesso somente para leitura com permissões seletivas

Os usuários do Gamma têm acesso limitado e de somente leitura a conteúdos específicos:
- Só podem visualizar gráficos e painéis de controle para os quais foram explicitamente autorizados a acessar.
- Não é possível criar ou editar qualquer conteúdo.
- Não é possível acessar as ferramentas de exploração de dados.
- Ideal para usuários que precisam apenas visualizar relatórios específicos.

*Ideal para: Membros ou aliados da comunidade que necessitam de acesso a painéis específicos*

### 🌐 Público
**Acesso para usuários que não estão logados**

O papel "Público" permite que usuários anônimos (não autenticados) acessem certas funcionalidades do Superset. Este papel herda as permissões de outro papel, configurado pelos administradores:
- O nível de acesso depende das permissões que foram atribuídas ao papel "Público".
- Permite compartilhar painéis com partes interessadas externas sem a necessidade de criar contas de usuário.
- Útil para tornar visualizações de dados específicas acessíveis ao público.
- Configurado através da configuração ``PUBLIC_ROLE_LIKE`` por administradores.

*Ideal para: Compartilhar painéis específicos com parceiros externos, pesquisadores ou o público em geral*

## Escolher o Cargo Adequado

Para a maioria das implementações do Guardian Connector, o papel "**Alpha**" funciona bem como padrão, pois ele:
- Oferece aos usuários a liberdade necessária para explorar e criar conteúdo.
- Protege configurações e credenciais do sistema.
- Permite que os membros da comunidade criem suas próprias narrativas de dados.
- Garante a segurança ao mesmo tempo em que incentiva o envolvimento.

Os administradores sempre poderão ajustar os papéis individuais dos usuários posteriormente, de acordo com as necessidades e responsabilidades específicas dentro da comunidade.

## Mais informações

Para obter mais informações, consulte este guia sobre os papéis do Superset: [https://superset.apache.org/docs/security/](https://superset.apache.org/docs/security/) 

Além disso, para uma lista completa de funções e permissões, consulte o arquivo [STANDARD_ROLES.md](https://github.com/apache/superset/blob/master/RESOURCES/STANDARD_ROLES.md).