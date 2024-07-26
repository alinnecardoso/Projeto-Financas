const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100,
    },
    foto: {
        type: String, //URL da imagem
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        maxLength: 80,
    },
    senha: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
    },
    
}, {timestamps: true})

module.exports = mongoose.model('User', UserSchema);