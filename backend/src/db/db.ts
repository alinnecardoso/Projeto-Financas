// Importamos o módulo mongoose
import mongoose from 'mongoose';

// Definimos uma interface IDb para representar o objeto db
// que estamos criando. Essa interface define uma propriedade
// connect que é uma função assíncrona que retorna uma promessa
interface IDb {
  connect: () => Promise<void>;
}

// Criamos o objeto db que implementa a interface IDb
const db: IDb = {
  // Definimos a função connect que é chamada para conectar
  // ao banco de dados MongoDB
  async connect() {
    try {
      // Desativamos a opção strictQuery do mongoose
      mongoose.set('strictQuery', false);
      
      // Conectamos ao banco de dados MongoDB usando a URL
      // definida na variável de ambiente MONGO_URL
      await mongoose.connect(process.env.MONGO_URL ?? 'MONGO_URL environment variable is not defined');
      
      // Imprimimos uma mensagem de sucesso se a conexão for estabelecida
      console.log('DB connected');
    } catch (error) {
      // Imprimimos uma mensagem de erro se ocorrer um problema
      // durante a conexão ao banco de dados
      console.log('DB connection error');
    }
  },
};

// Exportamos o objeto db como o valor padrão do módulo
export default db;