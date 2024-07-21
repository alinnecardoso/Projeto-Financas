const express = require('express');
//permite que um servidor especifique quais domínios são permitidos para fazer requisições para ele, e quais métodos HTTP são permitidos
const cors = require('cors');
const { db } = require('./db/db');

//é uma função síncrona que lê o conteúdo de um diretório e retorna um array de strings, cada uma representando o nome de um arquivo ou subdiretório dentro do diretório especificado.
const { readdirSync } = require('fs')
const app = express();

// Importa a biblioteca dotenv e carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();

// Define uma constante PORT que recebe o valor da variável de ambiente PORT
const PORT = process.env.PORT;

//middlewares
app.use(express.json()); //parseia o corpo da requisição (body) em formato JSON e o converte em um objeto JavaScript

app.use(cors());

//Routes
//Lê todos os arquivos e pastas dentro da pasta ./routes
//Para cada arquivo ou pasta encontrada, registra uma rota na aplicação Express.js com o prefixo /api/v1
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)));

app.get('/', (req,res)=>{
  res.send('Hello World!')
})

// Criação do Servidor
const server = () => {
  db();
  // Inicia o servidor e ouve por solicitações de entrada na porta especificada
  app.listen(PORT, () => {
    console.log('listening to port: ', PORT)
  })
}

// Chama a função server
server();