const bcrypt = require('bcrypt')

// Função que criptografa uma senha
const hashPassword = (password) =>{
  // Retorna uma Promise que resolve com a senha criptografada ou rejeita com um erro
  return new Promise((resolve, reject) =>{
    // Gera um salt (um valor aleatório) para ser usado na criptografia
    bcrypt.genSalt(12, (err, salt) => {
      // Se ocorrer um erro ao gerar o salt, rejeita a Promise com o erro
      if(err){
        reject(err);
      }

      // Criptografa a senha usando o salt gerado
      bcrypt.hash(password, salt, (err, hash) =>{
        // Se ocorrer um erro ao criptografar a senha, rejeita a Promise com o erro
        if(err){
          reject(err);
        }
        // Resolve a Promise com a senha criptografada
        resolve(hash)
      })
    })
  })
}

// Função que compara uma senha com uma senha criptografada
const comparePassword = (password, hashed) => {
  // Retorna uma Promise que resolve com true se as senhas forem iguais e false caso contrário
  return bcrypt.compare(password, hashed)
}

module.exports = {
  hashPassword,
  comparePassword
};