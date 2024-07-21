const express = require('express');
//permite que um servidor especifique quais domínios são permitidos para fazer requisições para ele, e quais métodos HTTP são permitidos
const cors = require('cors') 

const app = express();

// Importa a biblioteca dotenv e carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();

// Define uma constante PORT que recebe o valor da variável de ambiente PORT
const PORT = process.env.PORT;

//middlewares
app.use(express.json()); //parseia o corpo da requisição (body) em formato JSON e o converte em um objeto JavaScript

app.use(cors());

// Criação do Servidor
const server = () => {
  // Inicia o servidor e ouve por solicitações de entrada na porta especificada
  app.listen(PORT, () => {
    console.log('listening to port: ', PORT)
  })
}

// Chama a função server
server();