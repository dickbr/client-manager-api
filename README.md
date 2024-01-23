# Client Manager API

## Descrição
Esta é a API do sistema de gerenciamento de clientes desenvolvida com NestJS. A API oferece endpoints para criar, listar e obter detalhes de clientes, além de calcular rotas específicas.

## Instalação

Certifique-se de ter o Node.js e o Yarn instalados em sua máquina.

1. Clone o repositório:

```bash

  git clone https://github.com/dickbr/client-manager-api.git
  cd client-manager-api
```

2. Instale as dependências:

```bash

  yarn install
```

3. Configure as variáveis de ambiente:

  Crie um arquivo .env na raiz do projeto e configure as variáveis necessárias.


4. Inicie o servidor de desenvolvimento:

```bash


  yarn dev
```
A API estará disponível em http://localhost:3000.


Endpoints

    POST /clients: Cria um novo cliente.
    GET /clients: Lista todos os clientes.
    GET /clients/:id: Obtém detalhes de um cliente específico.
    GET /clients/calc-routes: Calcula rotas específicas.


Uso

Exemplo de solicitação para criar um cliente:

```bash

curl -X POST http://localhost:3000/clients -H "Content-Type: application/json" -d '{"name": "Nome do Cliente", "email": "cliente@example.com", "cellphone": "123456789"}'
```

Tecnologias Utilizadas

    NestJS
    Fastify
    PostgreSQL
    Geolib (para cálculos de rotas)
    Outras dependências

Scripts

    yarn build: Compila o projeto.
    yarn start: Inicia o servidor de produção.
    yarn dev: Inicia o servidor de desenvolvimento.

Licença

Este projeto é licenciado sob a MIT License.

