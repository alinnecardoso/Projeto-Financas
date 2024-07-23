const { addExpense, getExpense, deleteExpense, updateExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome, updateIncome } = require('../controllers/income');
const { addUser, getUsers, deleteUser, updateUser } = require('../controllers/user');

const router = require('express').Router();


router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .put('/update-income/:id', updateIncome)

    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)
    .put('/update-expense/:id', updateExpense)

    .post('/add-user', addUser)
    .get('/get-users', getUsers)
    .delete('/delete-user/:id', deleteUser)
    .put('/update-user/:id', updateUser)

module.exports = router