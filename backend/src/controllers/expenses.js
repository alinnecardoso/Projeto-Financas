const expenseSchema = require("../models/ExpenseModel");


//Registrar Receita
exports.addExpense = async (req, res) =>{
  // Desestrutura o objeto "req.body" para extrair os valores
  const {title, amount, category, description, date} = req.body;

  // Cria um novo objeto com os valores extraídos acima, utilizando o modelo de dados "expenseSchema"
  const expense = expenseSchema({
    title,
    amount,
    category,
    description,
    date
  })

  try {
    //validations
    if(!title || !category || !description || !date){
      return res.status(400).json({message: 'All fields are required!'})
    }
    if(amount <= 0 || !amount === 'number'){
      return res.status(400).json({message: 'Amount must be a positive number'})
    }
    // Salva o objeto "expense" no banco de dados
    await expense.save();

    // Retorna uma resposta 200 com uma mensagem de sucesso
    res.status(200).json({message: 'Expense Added'})
  } catch (error) {
    res.status(500).json({message: 'Server Error'})
  }
  console.log(expense)
}

//Visualizar Receita
exports.getExpenses = async (req, res) =>{
  try {
    const expense = await expenseSchema.find().sort({createdAt: -1})
    res.status(200).json(expense)
  } catch (error) {
    res.status(500).json({message: 'Server Error'})
  }
}

//Remover Receita
exports.deleteExpense = async (req, res) =>{
  const { id } = req.params;
  expenseSchema.findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({message: 'Expense Deleted'})
    })
    .catch((err)=>{
      res.status(500).json({message: 'Server Error'})
    })
}

// Editar Receita
exports.updateExpense = async (req, res) => {
  const { id } = req.params;
  const { body } = req; // atualizar com o corpo da solicitação

  try {
    const expenseAtualizado = await expenseSchema.findByIdAndUpdate(id, body, { new: true });
    res.status(200).json({ mensagem: 'Expense Updated' });
  } catch (err) {
    console.error(err); // logar o erro para fins de depuração
    res.status(500).json({ mensagem: 'Server Error' });
  }
}