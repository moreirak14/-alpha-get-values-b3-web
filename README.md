# Alpha Vantage Invest Web
O objetivo do sistema é auxiliar um investidor nas suas decisões de comprar/vender ativos.
O investidor será capaz de realizar o cadastro e ter visibilidade dos seus ativos!

## Pré-requisitos

- Npm: `https://docs.npmjs.com/downloading-and-installing-node-js-and-npm`
- Node v16+: `https://nodejs.org/en/download/current/`


## Necessário

- Criar novos arquivos `.env`, você pode copiar o arquivo `.env.example` na raiz do projeto e dentro da pasta `client/`.

- Será necessário clonar o repositorio "https://github.com/moreirak14/alpha-get-values-b3" (backend) e deixar o sistema executado.

## Utilização em desenvolvimento local

- Para instalar todos os pacotes necessários e rodar o express server. Ainda na raiz do projeto execute:
`$ npm install` e `$ npm start` =: http://localhost:5000

- Para instalar todos os pacotes necessários e rodar a aplicação web. Agora, dentro da pasta `client/`, execute:
`$ npm install` e `$ npm start` =: http://localhost:3000

## Considerações

Ao cadastrar-se e realizar o login, uma nova opção "Dashboard" será habilitada para visualização de detalhes do usuário e ativos do mesmo.