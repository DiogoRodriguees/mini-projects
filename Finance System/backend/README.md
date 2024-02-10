![Finance System](./img/FINANCE%20SYSTEM.png)

## Visão Geral

Esse projeto foi criado na ideia de um programa de fluxo de caixa (entradas e saidas). Para o banco de dados, foi utilizado o SQLite, criando um arquivo local com os dados criados durante a execução.

## Rotas de acesso

-   **post("/saida")** - usada para criar uma nova saida.
-   **post("/entrada")** - usada para criar uma nova entrada.
-   **get("/buscarSaidas")** - buscar todas as saidas.
-   **get("/buscarEntradas")** - buscar todas as entradas.
-   **get("/historico")** - buscar todas as entradas e saidas.

## Tecnologias

-   [NodeJS](https://nodejs.org/en/docs)
-   [Typescript](https://www.typescriptlang.org/docs/)
-   [Prisma](https://www.prisma.io/docs/getting-started)
-   [SQlite](https://www.sqlite.org/docs.html)

## Como Executar o Projeto

```bash
    # clonando projeto
    $ git clone https://github.com/DiogoRodriguees/BACKEND_FINANCE_SYSTEM.git

    # entrando na pasta do projeto
    $ cd BACKEND_FINANCE_SYSTEM

    # executando via npm
    $ npm
    $ npm run dev

    # executando via yarn
    $ yarn
    $ yarn run dev
```
