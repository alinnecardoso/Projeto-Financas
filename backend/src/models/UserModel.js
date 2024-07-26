const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const Joi = require('joi')
const passwordComplexity = require('joi-password-complexity')

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  foto:{
    type: String, //URL da img
    require: true
  },
  email:{
    type: String,
    require: true
  },
  senha:{
    type: String,
    require: true
  }
})

userSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({_id:this._id}, process.env.JWTPRIVATEKEY, {expiresIn:'7d'} )
  return token
}

const User = mongoose.model('user', userSchema);

const validate = (data) =>{
  const schema = Joi.object({
    nome: Joi.string().required().label('Nome'),
    foto: Joi.string().required().label('Foto'),
    email: Joi.string().email().required().label('Email'),
    senha: passwordComplexity().required().label('Senha')
  })

  return schema.validate(data)
}

module.exports = {User, validate}