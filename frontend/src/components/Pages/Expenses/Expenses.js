import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../../styles/Layout';
import ExpenseItem from '../../ExpenseItem/ExpenseItem';
import ExpenseForm from './ExpenseForm';
import { useGlobalContext } from '../../../context/GlobalContext';


function Expenses() {
  const {addExpenses, getExpenses, expenses, deleteExpense, totalExpenses} = useGlobalContext()

  useEffect(() =>{
    getExpenses()
  }, [])

  return (
    <ExpensesStyled>
      <InnerLayout>
        <h1>Depesas</h1>
        <h2 className="total-expenses">
          Total de Depesas: <span>${totalExpenses()}</span>
        </h2>
        <div className="expenses-content">
          <div className="form-container">
              <ExpenseForm/>
          </div>
          <div className="expenses">
            {expenses.map((expense) => {
              const { _id, title, amount, date, category, description, type } = expense;
              return <ExpenseItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                type={type}
                amount={amount} date={date}
                category={category}
                indicatorColor='var(--color-green)'
                deleteItem={deleteExpense}
              />
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpensesStyled>
  )
}

const ExpensesStyled = styled.div`
  display:flex;
  overflow: auto;
  .total-expenses{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FCF6F9;
    border: 2px solif #FFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: .5rem;
    span{
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-delete);
    }
  }
  .expenses-content{
    display: flex;
    gap: 2rem;
    .expenses{
      flex: 1;
    }
  }
`;

export default Expenses

