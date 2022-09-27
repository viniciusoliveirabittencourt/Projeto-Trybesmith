# Boas vindas ao meu repositório do projeto Trybesmith!

O projeto Trybesmith foi o primeiro projeto da Trybe em sobre TrypeScript. O objetivo era colocar a mão na massa em relação ao TypeScript e testar se iríamos conseguir desenvolver um projeto Express em TypeScript. O projeto também é interessante para provar conhecimentos em queries SQL, pois utilizamos o mysql2 para conectar nossa aplicação ao banco de dados e, o mesmo exige que façamos as queries em hard code, sem o auxílio de um ORM. O projeto Node.JS, se utiliza do framework Express para fazer o servidor https. Utilizamos um banco de dados SQL, o banco MySQL, se utilizando do mysql2 para realizar a conexão entre o banco de dados e o servidor. Para alem disso, utilizamos o jsonwebtoken para fazer validações de usuário. Isso tudo configurado no amado TypeScript.

# Rodar localmente

> Utilizei o Ubuntu 20.04.4 LTS para realizar o projeto e escrever as instruções nesse README

Para rodar localmente o projeto, é necessário que se tenha no mínimo o Node.JS versão 16 ou superior; o NPM versão 8 ou superior; o git versã o 2 ou superior; e o mysql-server versão 8 ou superior;

Siga o passo a passo para rodar localmente o projeto e testar os requisitos, caso deseje.

  1. Clone o repositório

  - `git clone git@github.com:viniciusoliveirabittencourt/Projeto-Trybesmith.git`

  - Após isso, entre no diretório criado
    - `cd Projeto-Trybesmith`

  2. Instale as dependências

  - `npm install`

  3. Rode o servidor Node.JS

  - `npm start`

  > Caso deseje fazer alguma modificação, também é possível rodar o comando `npm run dev` para rodar em modo de desenvolvimento

  Pronto, agora vc já tem o servidor rodando em sua máquina local, podendo testar cada requisito enviando requisições pela sua plataforma preferida.

# Criação da estrutura de pastas inicial

1. Criar a pasta **src** na raiz do projeto para colocar toda a parte de código

2. Levar os arquivos **app.ts** e **index.ts** para dentro da pasta src

3. Modificar os scripts no **package.json** para indicar que os arquivos **app.ts** e **index.ts** agora estão dentro de **src**

4. Dentro da pasta **src** criar as principais pastas do modelo MSC: **models**, **services**, **controllers**

5. Após isso criar as pastas de suporte: **interfaces**, **routes**, **middlewares**

6. Criar o arquivo **index.ts** dentro de **routes**, onde eu consigo ter um maior controle sobre minhas rotas

7. Já importar o **routes** no **app.ts** para facilitar a criação de rotas futuras

# Requisitos

## 1 - Crie um endpoint para a listagem de produtos

- O endpoint deve ser acessível através do caminho (`/products`);

O objetivo foi criar um endpoint onde listasse todos os produtos no banco de dados, onde o mesmo tem um retorno parecido com este:

  **_status http:_ `200`**
  ```json
  [
    {
      "id": 1,
      "name": "Poção de cura",
      "amount": "20 gold",
      "orderId": null
    },
    {
      "id": 2,
      "name": "Escudo do Herói",
      "amount": "100 diamond",
      "orderId": 1
    }
  ]
  ```

Caso deseje testar colocar em prova o requisito, poderá realizar o passo a passo descrito em **Rodar localmente** e verificar a realizção do mesmo.

---

## 2 - Crie um endpoint para o cadastro de produtos

- O endpoint deve ser acessível através do caminho (`/products`);

- Os produtos enviados devem ser salvos na tabela `Products` do banco de dados;

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```

O objetivo foi criar um endpoint onde criasse determinado produto no banco de dados, onde o mesmo tem um retorno parecido com este caso o body seja vállido:

  **_status http:_ `201`**
  ```json
    {
      "id": 1,
      "name": "Poção de cura",
      "amount": "20 gold",
    }
  ```

<details close>
<summary>Regras de négocio:</summary>

<br>

### Regras de négocio para verificar o campo "name" do body da requisição

Caso o campo "name" não seja informado, o endpoint irá retornar esta resposta:

  **_status http:_ `400`**
  ```json
    { "message": "\"name\" is required" }
  ```

Caso o campo "name" não seja do tipo string, o endpoint irá retornar esta resposta:

  **_status http:_ `422`**
  ```json
    { "message": "\"name\" must be a string" }
  ```

Caso o campo "name" tenha menos de 3 caracteres, o endpoint irá retornar esta resposta:

  **_status http:_ `422`**
  ```json
    { "message": "\"name\" length must be at least 3 characters long" }
  ```
<br>

### Regras de négocio para verificar o campo "amount" do body da requisição

Caso o campo "amount" não seja informado, o endpoint irá retornar esta resposta:

  **_status http:_ `400`**
  ```json
    { "message": "\"amount\" is required" }
  ```

Caso o campo "amount" não seja do tipo string, o endpoint irá retornar esta resposta:

  **_status http:_ `422`**
  ```json
    { "message": "\"amount\" must be a string" }
  ```

Caso o campo "amount" tenha menos de 3 caracteres, o endpoint irá retornar esta resposta:

  **_status http:_ `422`**
  ```json
    { "message": "\"amount\" length must be at least 3 characters long" }
  ```
</details>

<br>

Caso deseje testar colocar em prova o requisito, poderá realizar o passo a passo descrito em **Rodar localmente** e verificar a realizção do mesmo.

---

## 3 - Crie um endpoint para o cadastro de pessoas usuárias

- O endpoint deve ser acessível através do caminho (`/users`);

- As informações de pessoas usuárias cadastradas devem ser salvas na tabela `Users` do banco de dados;

- O endpoint deve receber a seguinte estrutura:
```json
{
  "username": "string",
  "classe": "string",
  "level": 1,
  "password": "string"
}
```

O objetivo foi criar um endpoint onde seria possível cadastrar uma pessoa usuária, conforme a interface explícitada, caso o body sejá válido, o endpoint irá retornar uma chave jsonwebtoken conforme modelo a seguir:

  **_status http:_ `201`**
  ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
  ```
<details>
<summary>Regras de négocio:</summary>

<br>

### Regras de négocio para o campo "username" do body da requisição

Caso o campo "username" não seja informado, o endpoint irá retornar esta resposta:

  **_status http:_ `400`**
  ```json
    { "message": "\"username\" is required" }
  ```

Caso o campo "username" não seja do tipo string, o endpoint irá retornar esta resposta:

  **_status http:_ `422`**
  ```json
    { "message": "\"username\" must be a string" }
  ```

Caso o campo "username" tenha menos de 3 caracteres, o endpoint irá retornar esta resposta:

  **_status http:_ `422`**
  ```json
    { "message": "\"username\" length must be at least 3 characters long" }
  ```

<br>

### Regras de négocio para o campo "classe" do body da requisição

Caso o campo "classe" não seja informado, o endpoint irá retornar esta resposta:

  **_status http:_ `400`**
  ```json
    { "message": "\"classe\" is required" }
  ```

Caso o campo "classe" não seja do tipo string, o endpoint irá retornar esta resposta:

  **_status http:_ `422`**
  ```json
    { "message": "\"classe\" must be a string" }
  ```

Caso o campo "classe" tenha menos de 3 caracteres, o endpoint irá retornar esta resposta:

  **_status http:_ `422`**
  ```json
    { "message": "\"classe\" length must be at least 3 characters long" }
  ```

<br>

### Regras de négocio para o campo "password" do body da requisição

Caso o campo "password" não seja informado, o endpoint irá retornar esta resposta:

  **_status http:_ `400`**
  ```json
    { "message": "\"password\" is required" }
  ```

Caso o campo "password" não seja do tipo string, o endpoint irá retornar esta resposta:

  **_status http:_ `422`**
  ```json
    { "message": "\"password\" must be a string" }
  ```

Caso o campo "password" tenha menos de 3 caracteres, o endpoint irá retornar esta resposta:

  **_status http:_ `422`**
  ```json
    { "message": "\"password\" length must be at least 8 characters long" }
  ```

<br>

### Regras de négocio para o campo "level" do body da requisição

Caso o campo "level" não seja informado, o endpoint irá retornar esta resposta:

  **_status http:_ `400`**
  ```json
    { "message": "\"level\" is required" }
  ```

Caso o campo "level" não seja do tipo number, o endpoint irá retornar esta resposta:

  **_status http:_ `422`**
  ```json
    { "message": "\"level\" must be a number" }
  ```

Caso o campo "level" seja menor que 1, o endpoint irá retornar esta resposta:

  **_status http:_ `422`**
  ```json
    { "message": "\"level\" must be greater than or equal to 1" }
  ```

</details>

<br>

Caso deseje testar colocar em prova o requisito, poderá realizar o passo a passo descrito em **Rodar localmente** e verificar a realizção do mesmo.

---

## 4 - Crie um endpoint para listar todos os pedidos

- O endpoint deve ser acessível através do caminho (`/orders`).
- Essa rota deve retornar todos os pedidos e os `id`s dos produtos associados a estes.

O objetivo foi criar um endpoint com uma regra de négocio, onde o mesmo pegaria a tabela de orders e adicionaria uma chave com os products associados da tabela de products. O retorno deveria ser parecido com o este:

  **_status http:_ `200`**
  ```json
    [
      {
        "id": 1,
        "userId": 2,
        "productsIds": [1, 2]
      },
      {
        "id": 2,
        "userId": 2,
        "productsIds": [3, 4]
      }
    ]
  ```

Caso deseje testar colocar em prova o requisito, poderá realizar o passo a passo descrito em **Rodar localmente** e verificar a realizção do mesmo.

---

## 5 - Crie um endpoint para o login de pessoas usuárias

- O endpoint deve ser acessível através do caminho (`/login`).

- A rota deve receber os campos `username` e `password`, e esses campos devem ser validados no banco de dados.

- Um token `JWT` deve ser gerado e retornado caso haja sucesso no _login_. No seu _payload_ deve estar presente o _id_ e _username_.

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "username": "string",
    "password": "string"
  }
```

O objetivo foi criar um endpoint de login, onde caso o body da requisição estivesse correto, ele validaria o email e a senha, caso ambos estivessem corretos, ele irá retornar um token jsonwebtoken:

  **_status http:_ `200`**
  ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
  ```

<details close>
 <summary>Regras de négocio:</summary>

  <br>

  ### Regras de négocio para o campo "username" do body da requisição

  Caso o campo "username" não seja informado, o endpoint irá retornar esta resposta:

  **_status http:_ `400`**
  ```json
    { "message": "\"username\" is required" }
  ```

  Caso o campo "username" seja inválido, o endpoint irá retornar esta resposta:

  **_status http:_ `401`**
  ```json
    { "message": "Username or password invalid" }
  ```

  ### Regras de négocio para o campo "password" do body da requisição

  Caso o campo "password" não seja informado, o endpoint irá retornar esta resposta:

  **_status http:_ `400`**
  ```json
    { "message": "\"password\" is required" }
  ```

  Caso o campo "password" seja inválido, o endpoint irá retornar esta resposta:

  **_status http:_ `401`**
  ```json
    { "message": "Username or password invalid" }
  ```
</details>

<br>

Caso deseje testar colocar em prova o requisito, poderá realizar o passo a passo descrito em **Rodar localmente** e verificar a realizção do mesmo.

---

## 6 - Crie um endpoint para o cadastro de um pedido

- O endpoint deve ser acessível através do caminho (`/orders`);

- Um pedido só pode ser criado caso a pessoa usuária esteja logada e o token `JWT` validado;

- Os pedidos enviados devem ser salvos na tabela `Orders` do banco de dados, salvando `id` da pessoa usuária da aplicação que fez esse pedido.

- A tabela `Products` também deve ser alterada, atualizando todos os produtos com os `id` incluídos na chave `productsIds` da requisição, e adicionando nesses produtos o `orderId` do pedido recém criado;

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "productsIds": [1, 2]
  }
```

O objetivo foi criar um endpoint para o cadastro de pedidos, onde o mesmo tem uma verificação para saber se o usuário é válido e se ele está logado corretamente, caso tudo ocorra bem na validação ele irá validar o body da requisição, com tudo válidado corretamente, ele irá cadastrar o pedido em orders e terá um retorno parecido com este:

  **_status http:_ `200`**
  ```json
    {
      "userId": 1,
      "productsIds": [1, 2]
    }
  ```

<details close>
  <summary>Regras de négocio:</summary>

  <br>

  ### Regras de négocio para autenticação

  Caso o token não esteja no header em uma chave "authorization", o endpoint irá retornar esta resposta:

  **_status http:_ `401`**
  ```json
    { "message": "Token not found" }
  ```

  Caso o token seja inválido, o endpoint irá retornar esta resposta:

  **_status http:_ `401`**
  ```json
    { "message": "Invalid token" }
  ```

  <br>

  ### Regras de négocio para o campo "productsIds" do body da requisição

  Caso o campo "productsIds" não seja informado, o endpoint irá retornar esta resposta:

  **_status http:_ `400`**
  ```json
    { "message": "\"productsIds\" is required" }
  ```

  Caso o campo "productsIds" não seja do tipo array, o endpoint irá retornar esta resposta:

  **_status http:_ `422`**
  ```json
    { "message": "\"productsIds\" must be a array" }
  ```

  Caso o campo "productsIds" seja um array vazio, o endpoint irá retornar esta resposta:

  **_status http:_ `422`**
  ```json
    { "message": "\"productsIds\" must include only numbers" }
  ```
</details>

<br>

Caso deseje testar colocar em prova o requisito, poderá realizar o passo a passo descrito em **Rodar localmente** e verificar a realizção do mesmo.

---
