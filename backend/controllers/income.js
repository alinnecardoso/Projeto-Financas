const incomeSchema = require("../models/IncomeModel");


//Registrar Receita
exports.addIncome = async (req, res) =>{
  // Desestrutura o objeto "req.body" para extrair os valores
  const {title, amount, category, description, date} = req.body;

  // Cria um novo objeto com os valores extraídos acima, utilizando o modelo de dados "incomeSchema"
  const income = incomeSchema({
    title,
    amount,
    category,
    description,
    date
  })

  try {
    //avalidations
    if(!title || !category || !description || !date){
      return res.status(400).json({message: 'All fields are required!'})
    }
    if(amount <= 0 || !amount === 'number'){
      return res.status(400).json({message: 'Amount must be a positive number'})
    }
    // Salva o objeto "income" no banco de dados
    await income.save();

    // Retorna uma resposta 200 com uma mensagem de sucesso
    res.status(200).json({message: 'Income Added'})
  } catch (error) {
    res.status(500).json({message: 'Server Error'})
  }
  console.log(income)
}

//Visualizar Receita
exports.getIncomes = async (req, res) =>{
  try {
    const incomes = await incomeSchema.find().sort({createdAt: -1})
    res.status(200).json(incomes)
  } catch (error) {
    res.status(500).json({message: 'Server Error'})
  }
}

