import mongoose from 'mongoose';

interface Income {
  title: string;
  amount: number;
  type: string;
  date: Date;
  category: string;
  description: string;
}

const incomeSchema = new mongoose.Schema<Income>({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  },
  amount: {
    type: Number,
    required: true,
    maxLength: 20,
    trim: true
  },
  type: {
    type: String,
    default: "income"
  },
  date: {
    type: Date,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    maxLength: 20,
    trim: true
  }
}, { timestamps: true });

export const IncomeModel = mongoose.model('Income', incomeSchema);