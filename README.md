<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;
  </p>

<br>

<p align="center">
  <img alt="notification" src=".github/image.png">
</p>

## Party Time

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Nodejs](https://nodejs.org/en/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [MongoDB](https://www.mongodb.com/)

## 💻 Projeto

API em NodeJS para a criação e gerenciamento de festas.

Evento do Ignite Lab na plataforma da [Matheus Battisti - Hora de Codar](https://www.youtube.com/watch?v=anMK76I2dUA)

## 🚀 Como Rodar

- Clone o projeto.
- Entre na pasta do projeto e rode npm install (pode usar yarn install de acordo com a sua configuração).
- configura o banco de dados MongoDB no arquivo conn.js.

- npm run start:dev para rodar o projeto (localhost:3000).

## 👩🏿‍💻 Rotas

- **`POST /service`**: Rota de criação de serviços

Enviar:
```
{
    "content":  "test",
    "category": "test",
    "recipientId": "c1d4fe30-229a-4bb0-8f44-d4d0e5df9246"
}
```
Retorna:
```
{
    "notification": {
        "id": "f40b9fcb-d6b0-4988-913e-ff8ffaa70e0b",
        "category": "test",
        "content": "test",
        "recipientId": "c1d4fe30-229a-4bb0-8f44-d4d0e5df9246"
    }
}
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT.
