# Carteira Digital

### Sobre

- Frontend

  Reactjs: OK

  Axios: OK

  Questôes a serem resolvidas: 

  - Ao entrar na pagina inicial é feito uma requisição incorretamente para o backend solicitando todas as transações realizadas, mas essa solicitação deve ser feita apenas na pagina historico.
  - O saldo apresentado na pagina Dashboard está estatico.
  - A aplicação não está totalmente responsiva.
  - O dados aprensentados na pagina historico não estão refletindo corretamente aos dados vindo do backend.
  - A unica forma de fazer o logoff da aplicação está presente apenas na pagina historico
  - Ao realizar uma transação a mensagem de sucesso/erro é apresentado atráz no modal de transação.

- Backend

  Node: OK

  Express: Ok

  Arquivo de configurações do banco de dados: OK

  Documentação: X

  Questôes a serem resolvidas: 

  - Erro ao realizar transações (relacionamento entre tabelas)
  - Error ao tratar no tratamento dos erros com handling erros do expressx



### Iniciando a aplicação

Primeiramente é necessário baixar o repositório das aplicações

front-end `git clone `

Entrar na pasta do projeto

cd `cd carteira_digital`

###### Front-End

Para inicializar o front-end da aplicação execute os seguintes comandos

`cd front_end` e `yarn start`/`npm run start`



###### Back-End

Para inicializar o back-end é necessários realizar o seguinte procedimento:

Criar container do banco de dados

`docker run --name carteira_digital -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres `

`docker exec -it carteira_digital bash`

`psql -U postgres -c "CREATE DATABASE carteira_digital;"`

Executar a aplicação

`cd back_end`

`yarn typeorm migration:run`/`npm run typeorm migration:run`

`yarn dev`/`npm run dev`



