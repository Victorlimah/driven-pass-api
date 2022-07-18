<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="https://violinando.com/wp-content/uploads/2014/09/cadeado.png" alt="Logo" width="170">

<h3 align="center">Driven-Pass API</h3>
  <p align="center">
   <strong>19º</strong> Projeto da formação fullstack Driven
</div>

<div align="center">
  <h3 align="center">Construído utilizando:</h3>

  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/JWT-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink" height="30px"/>
</div>



### Descrição

Nesse projeto desenvolvemos um projeto backend para gerenciamento de senhas, cartões e documentos utilizando Typescript com NodeJs e express com auxilio do prisma.

 <a href="https://victorlimah-drivenpass.herokuapp.com/">![Deploy](https://img.shields.io/badge/Deploy-430098?style=for-the-badge&logo=googlecloud&logoColor=white)</a>
    
***
## :rocket: Rotas

### Routas de autenticação
```yml
POST /signup
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body: {
        "email": "lorem@gmail.com",
        "password": "loremipsum"
    }
```
    
```yml 
POST /signin
    - Rota para fazer login
    - headers: {}
    - body: {
        "email": "lorem@gmail.com",
        "password": "loremipsum"
    }
```
***   

### Rotas de credenciais
```yml
POST /credentials
    - Rota para cadastrar uma nova credencial
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "lorem@gmail.com",
        "url": "https://lorem.ipsum.com",
        "username": "lorem",
        "password": "loremipsum"
    }
```
    
```yml 
GET /credentials
    - Rota para pegar todas as credenciais de um usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml 
GET /credentials/:ID
    - Rota para pegar uma credencial do usuário pelo id da credencial
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml 
DELETE /credentials/:ID
    - Rota para deletar uma credencial do usuário pelo id da credencial
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
***   

### Rotas de notas seguras
```yml
POST /notes
    - Rota para cadastrar uma nova nota segura
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "lorem@gmail.com",
        "url": "https://lorem.ipsum.com",
        "username": "lorem",
        "password": "loremipsum"
    }
```
    
```yml 
GET /notes
    - Rota para pegar todas as notas de um usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml 
GET /notes/:ID
    - Rota para pegar uma nota do usuário pelo id da nota
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml 
DELETE /notes/:ID
    - Rota para deletar uma nota do usuário pelo id da nota
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
***   


<!-- CONTACT -->

### Contact

[![LinkedIn][linkedin-shield]][linkedin-url]
[![Email][slack-shield]][slack-url]

<!-- MARKDOWN LINKS & IMAGES -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: [https://www.linkedin.com/in/nivaldofarias/](https://www.linkedin.com/in/victorlimah/)
[slack-shield]: https://img.shields.io/badge/Email-DB4A39?style=for-the-badge&logo=gmail&logoColor=white
[slack-url]: mailto:victor.lima@dcx.ufpb.br
