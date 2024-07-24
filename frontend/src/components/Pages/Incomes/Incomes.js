import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../../styles/Layout';
import { useGlobalContext } from '../../../context/GlobalContext';
import Form from '../../Form/Form';

function Incomes() {
  const {addIncome} = useGlobalContext()
  return (
    <IncomesStyled>
      <InnerLayout>
        <h1>Receita</h1>
        <div className="income-content">
          <div className="form-container">
              <Form/>
          </div>
          <div className="incomes">

          </div>
        </div>
      </InnerLayout>
    </IncomesStyled>
  )
}

const IncomesStyled = styled.div`

`;

export default Incomes