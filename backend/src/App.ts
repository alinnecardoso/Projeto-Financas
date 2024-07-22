import express, { Request, Response } from 'express';
import cors from 'cors';
import db  from './db/db';
import { readdirSync } from 'fs';
import dotenv from 'dotenv';


dotenv.config();

const app: express.Application = express();
const PORT: number = Number(process.env.PORT);

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
readdirSync('./routes').map((route: string) => app.use('/api/v1', require(`./routes${route}`)));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Criação do Servidor
const server: () => void = (): void => {
  db;
  app.listen(PORT, (): void => {
    console.log(`listening to port: ${PORT}`);
  });
};

// Chama a função server
server();