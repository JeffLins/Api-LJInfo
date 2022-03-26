# Api-LJInfo
 <img src ="./src/imagem/shark12.jpg" alt = "logo" width = "500" height = "300" align = "center">

<h1 align="center">Loja de Informática API</h1>
  
  <p align="center">
   Projeto educacional do curso de Web Dev Full Stack da Resilia Educação referente ao Módulo 04, utilizando o Node.js com framework Express.
   <br />
    <a href=""><strong>Explore os arquivos do projeto. »</strong></a>
    <br />
</div>
<br />
<br />
  <summary>Conteúdo sobre a documentação.</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
    </li>
    <li>
      <a href="#como-instalar-e-iniciar">Como instalar e iniciar o projeto</a>
    </li>
  </ol>
  
  ## Sobre o Projeto 💻
  
  O objeto proposto como projeto final do módulo 4, é criar uma API Rest de uma Loja de Informática. Criei a entidade 'Usuario' e com ela você poderá realizar as operações básicas CRUD, que são elas:
  <br />
  * Ler todos os Usuario, e suas informaçoes do banco de dados, ou, filtrar um Usuario por ID ou por nome.
  * Adicionar novos Usuario no banco de dados.
  * Deletar um Usuario pelo número do ID.
  * Atualizar um ou vários dados de um usuario.

  #### Tecnologias, pacotes e frameworks utilizados ⚙️
 
  * [JavaScript](https://www.javascript.com/)
  * [Node.js](https://nodejs.org/en/) v16.14.0
  * [NPM](https://www.npmjs.com/) v8.3.1
  * [Express](https://www.npmjs.com/package/express) v4.17.3
  * [Nodemon](https://www.npmjs.com/package/nodemon) v2.0.15
  * [SQLite](https://www.sqlite.org/index.html) v5.0.2


 ## Como instalar e iniciar 🏁
  
 Este é um exemplo sobre como instalar e configurar seu projeto localmente. Para fazer uma cópia local e iniciar, siga estas etapas de exemplo simples.

#### Pré-Requisitos

Lembre-se do que você irá precisará ter instalado em sua máquina para executar o projeto. 👇
1. Instale NPM
   ```sh
   npm install
   ```
2. Instale Express
   ```sh
   npm install express
   ```
3. Instale Nodemon
   ```sh
   npm install nodemon
   ```
3. Instale SQLite
   ```sh
   npm install sqlite3
   ```
4. Instale Jest
   ```sh
   npm install jest
   ```
5. Instale Super Test
   ```sh
   npm install supertest
   ```
  #### Instalação
  
  Abra o terminal/Powershell e rode os comandos abaixo: 👇🏼

Para clonar o repositório:
 ```sh
   git clone https://github.com/JeffLins/Api-LJInfo.git
   ```
Acesse a pasta criada:
```sh
cd Api-LJ-INFO
```
Para iniciar os projetos use o comando abaixo
```sh
npm start
```
Para executar o teste da rota post e da corpo das rotas executar
```sh
npm run test
```

#### Popular o banco de dados: 🚧
Para o arquivo 'database.db' ser populado, execute o arquivo tabela.js Para fazê-lo rodar, abra seu terminal e execute o comando:
```sh
... (90 linhas)

#### Rotas e seus resultados

Ao executar a entidade usuario, aparecerá os atributos adicionados à ela, que são: id, nome, email e senha. Veja os resultados:

* Método GET para visualizar todos os usuarios marcados. ( /usuario)

Schema da resposta. 
{
    "Usuario": [
        {
            "ID": 1,
            "NOME": "Filipe Ribeiro Martins",
            "EMAIL": "filipe-negreti@hotmail.com",
            "Senha": "25346783",
            
        },
  ]
  


  * Método GET para filtrar um dado por EMAIL ( /usuario/email/{o email do usuario})

Schema da resposta. 
{
    "usuario": [
        {
            "ID": 5,
            "NOME": "Rafaela Souza",
            "EMAIL": "rafaela@uol.com.br",
            "Senha": "45326788,
            
        }
    ],
    "erro": false
}
  

  * Método POST para adicionar um novo usuario( /usuario)

Schema da resposta. 
{
  "Mensagem": (string),
  "Erro": (booleano)
 }
  

  * Método DELETE para apagar um usuario por ID ( /usuario/id/{o número de id})

Schema da resposta. 
sh
{
    "mensagem": "Usuario de id 1 atualizado com sucesso",
    "usuario": {
        "nome": "Filipe Ribeiro Martins",
        "email": "filipe-negreti@hotmail.com",
        "senha": "123456789",
        
    },
    "erro": false
}
{
  "Mensagem": (string),
  "Erro": (booleano)
  }
  ```
  * Método PUT para atualizar um usuario  por ID ( /usuraio/id/{o número de id})

Schema da resposta. 
