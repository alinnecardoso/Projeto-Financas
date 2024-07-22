import mongoose from 'mongoose';

interface Expense {
  title: string;
  amount: number;
  type: string;
  date: Date;
  category: string;
  description: string;
}

const expenseSchema = new mongoose.Schema<Expense>({
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
    default: "expense"
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

export const ExpenseModel = mongoose.model('Expense', expenseSchema);