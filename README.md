# Monorepo System Example

[📘 Docs](https://felipegangrel.github.io/monorepo-system)

## Ferramentas e tecnologias utilizadas

- PNPM: https://pnpm.io
- Turborepo: https://turbo.build
- Jest: https://jestjs.io
- Storybook: https://storybook.js.org
- lefthook: https://github.com/evilmartians/lefthook
- Changeset: https://github.com/changesets/changesets

## Gerenciamento de dependências

O gerenciador de pacotes para este projeto é o `PNPM` e seus comandos são muito similares aos do `NPM` e `Yarn`.

### Instalando as dependências do projeto

Use o comando `pnpm install` ou `pnpm i` para instalar as dependências do projeto.

```bash
pnpm install
```

⚠️ **Evite a instalação de dependências na raiz do monorepo** ⚠️\
A raiz do repositório deve conter apenas configurações e dependências necessárias para o gerenciamento do monorepo.

Todo pacote ou aplicação presente no monorepo possui seu próprio arquivo `package.json` e seu atributo `name` deve ser
usado para identificar o local de instalação para dependências. Dado que o desenvolvedor deseja instalar os pacotes `react`
e `react-dom`como dependência de produção do pacote de nome `@felipegangrel/core-ui`, ele poderia fazer como abaixo:

```bash
pnpm i react react-dom --filter @felipegangrel/core-ui
```

A instalação de dependências na raíz do projeto deve fazer uso da flag `-w`. Ao fazê-lo a dependência será utilizada
por todos os pacotes e aplicações do monorepo. Utilize essa opção com absoluta cautela.

A instalação de dependências de desenvolvimento utiliza a flag `-D`.

Exemplo: Instalando o Typescript como dependência de todos os pacotes e aplicações presentes no monorepo:

```bash
pnpm i -D -w typescript
```

## Scripts NPM úteis

- `pnpm dev`: Compila os pacotes em modo `watch` e roda a aplicação de docs usando Storybook;
- `pnpm test`: Roda os testes de unidade em todos os pacotes;
- `pnpm text:cov`: Roda os testes de unidade e obtém dados de cobertura de testes;
- `pnpm text:cov-total`: Roda os testes de unidade e obtém dados de cobertura de testes e exibe um resumo do estado da cobertura no terminal;
- `pnpm clean`: Limpa todos os arquivos de cache de build e do turbo e também remove todos os diretórios `node_modules` do monorepo;
- `pnpm format`: Formata todos os arquivos usando regras do Prettier;
- `pnpm lint`: Analisa todos os arquivos e os corrige se possível usando regras do ESLint;
- `pnpm storybook`: Roda a documentação usando Storybook;

### PNPM catalogs

A utilização do recurso de catálogos do PNPM nos possibilita um controle maior sobre as versões das dependências
utilizadas por nossos pacotes e plicações. As versões para cada dependência pode ser encontrada no arquivo `pnpm-workspace.yml`.

No exemplo abaixo, vamos que a dependência de desenvolvimento `jest` não está declarada diretamente no `package.json`
do pacote ou aplicação que a utiliza. Ao invés disto, a versão foi substituída pelo texto `catalog:` indicando que a
mesma fará uso daquela versão presente no arquivo `pnpm-workspaces.yml`.

packages.json

```json
{
  "devDependencies": {
    "jest": "catalog:"
  }
}
```

pnpm-workspaces.yml

```yml
catalog:
  jest: ^29.7.0
```

Podemos também manter versões diferentes de um mesmo pacote no catálogo.

packages.json

```json
{
  "dependencies": {
    "react": "catalog:react19"
  }
}
```

pnpm-workspaces.yml

```yml
catalogs:
  react19:
    react: ^19.0.0
```

O PNPM ainda não é capaz de adicionar ao catálog referências a dependências instaladas e, portanto, cabe ao desenvolvedor
realizar o ajuste manualmente para podermos controlar melhor as dependências presentes no monorepo.

### Dependências internas

Pacotes e aplicações presentes no monorepo podem importar dependências vindas de outros pacotes internos sem que seja necessária
a publicação das dependências em registros como o NPM, Github ou Azure.

packages.json

```json
{
  "dependencies": {
    "@felipegangrel/core-ui": "workspace:*"
  },
  "devDependencies": {
    "eslint-config": "workspace:*"
  }
}
```

## Publicando pacotes

### Criando um Token de acesso pessoal do Github

1. Crie um Token de Acesso Pessoal (Personal Access Token) com permissões de leitura e escrita para pacotes.
   Você pode seguir o link https://github.com/settings/tokens/new para criar um.

2. Atualize (ou crie) um arquivo `.npmrc` na raiz do seu diretório `$HOME` com o seguinte conteúdo:

```
registry=https://registry.npmjs.org/
@YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN
```
