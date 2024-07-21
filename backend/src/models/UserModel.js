const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength:100
  },
  foto: {
    type: String, //URL da imagem
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    maxLength:100
  },
  senha: {
    type: String,
    required: true,
    trim: true,
    maxLength:40
  },
})