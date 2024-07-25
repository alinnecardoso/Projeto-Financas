import React, { useContext, useState } from "react"
import axios from 'axios'

const BASE_URL = "http://localhost:8000/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({children}) =>{

  const [incomes, setIncome] = useState([])
  const [expenses, setExpenses] = useState([])
  const [users, setUser] = useState([])
  const [error, setError] = useState(null) 


  //Income
  const addIncome = async(income) =>{
    const response = await axios.post(`${BASE_URL}add-income`, income)
          .catch((err) =>{
            setError(err.response.data.message)
          })

          getIncomes();
  }
  const getIncomes = async() =>{
    const response = await axios.get(`${BASE_URL}get-incomes`)
    setIncome(response.data)
  }

  const deleteIncome = async (id) =>{
    const res = await axios.delete(`${BASE_URL}delete-income/${id}`)
    getIncomes();
  }

  const totalIncome = () =>{
    let  totalIncome = 0;
    incomes.forEach((income)=> {
      totalIncome = totalIncome + income.amount;
    })

    return totalIncome;
  }
  //console.log(totalIncome())

  //Expenses
  const addExpense = async(expense) =>{
    const response = await axios.post(`${BASE_URL}add-expense`, expense)
          .catch((err) =>{
            setError(err.response.data.message)
          })

          getExpenses();
  }
  const getExpenses = async() =>{
    const response = await axios.get(`${BASE_URL}get-expenses`)
    setExpenses(response.data)
  }

  const deleteExpense = async (id) =>{
    const res = await axios.delete(`${BASE_URL}delete-expense/${id}`)
    getExpenses();
  }

  const totalExpenses = () =>{
    let  totalExpenses = 0;
    expenses.forEach((expense)=> {
      totalExpenses = totalExpenses + expense.amount;
    })

    return totalExpenses;
  }
  //console.log(totalExpenses());

  const totalBalance = () =>{
    return totalIncome() - totalExpenses()
  }

  const transactionHistory = () =>{
    const history = [...incomes, ...expenses]
    history.sort((a, b) =>{
      return new Date(b.createdAt) - new Date(a.createdAt)
    })

    return history.slice(0,3)
  }

  //Usuários
  const addUser = async(users) =>{
    const response = await axios.post(`${BASE_URL}register/add-user`, users)
    
          .catch((err) =>{
            setError(err.response.data.message)
          })

          console.log(getUser());
  }
  const getUser = async() =>{
    const response = await axios.get(`${BASE_URL}get-users`)
    setUser(response.data);
  }

  const checkUserExists = async (email, senha) => {
    const response = await axios.post(`${BASE_URL}register/add-user`, {email, senha} )
    .catch((err) =>{
      setError(err)
    })
    console.log(response.data);
  }

  const getUserById = async(id) =>{
    const response = await axios.get(`${BASE_URL}login/get-user/${id}`)
    setUser(response.data);
  }

  const deleteUser = async (id) =>{
    const res = await axios.delete(`${BASE_URL}delete-user/${id}`)
    getUser();
  }

  const updateUser = async (id) =>{
    const res = await axios.put(`${BASE_URL}update-user/${id}`)
    getUser();
  }

  return (
  <GlobalContext.Provider value={{
    addIncome,
    getIncomes,
    incomes,
    deleteIncome,
    totalIncome,
    addExpense,
    getExpenses,
    expenses,
    deleteExpense,
    totalExpenses,
    totalBalance,
    transactionHistory,
    addUser,
    getUser,
    getUserById,
    checkUserExists,
    setError,
    deleteUser,
    error
  }} >
    {children}
  </GlobalContext.Provider>
  )
}

export const useGlobalContext = () =>{
  return useContext(GlobalContext)
}