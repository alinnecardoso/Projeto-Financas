const routerUsers = require('express').Router();

router.post('/add-user', addIncome)
      .get('/get-user', getIncomes)
      .delete('/delete-user/:id', deleteIncome)
      .put('/update-user/:id', updateIncome)

module.exports = routerUsers;