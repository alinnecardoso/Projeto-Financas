import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../../styles/Layout';
import { useGlobalContext } from '../../../context/GlobalContext';
import Form from '../../Form/Form';
import IncomeItem from '../../IncomeItem/IncomeItem';

function Incomes() {
  const {addIncome, incomes, getIncomes} = useGlobalContext()

  useEffect(() =>{
    getIncomes()
  }, [incomes])

  return (
    <IncomesStyled>
      <InnerLayout>
        <h1>Receita</h1>
        <div className="income-content">
          <div className="form-container">
              <Form/>
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description } = income;
              return <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount} date={date}
                category={category}
                indicatorColor='var(--color-green)'
              />
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomesStyled>
  )
}

const IncomesStyled = styled.div`
  display:flex;
  overflow: auto;
  .income-content{
    display: flex;
    gap: 2rem;
    .incomes{
      flex: 1;
    }
  }
`;

export default Incomes