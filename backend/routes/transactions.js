const { addIncome, getIncomes, deleteIncome, updateIncome } = require('../controllers/income');

const router = require('express').Router();

router.post('/add-income', addIncome)
      .get('/get-incomes', getIncomes)
      .delete('/delete-incomes/:id', deleteIncome)
      .put('/update-income/:id', updateIncome)


module.exports = router;