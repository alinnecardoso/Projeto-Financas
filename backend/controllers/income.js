const incomeSchema = require("../models/IncomeModel");

exports.addIncome = async (req, res) =>{
  const {title, amount, category, description, date} = req.body;

  const income = incomeSchema
}