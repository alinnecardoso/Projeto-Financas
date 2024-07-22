import mongoose from 'mongoose';

interface User {
  name: string;
  foto: string; // URL da imagem
  email: string;
  senha: string;
}

const userSchema = new mongoose.Schema<User>({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100
  },
  foto: {
    type: String, // URL da imagem
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100
  },
  senha: {
    type: String,
    required: true,
    trim: true,
    maxLength: 40
  }
});

export const UserModel = mongoose.model('User', userSchema);