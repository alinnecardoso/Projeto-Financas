import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../context/GlobalContext';


function Form() {
  const {addIncome} = useGlobalContext()

  const [inputState, setInputState] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
    description: '',
  })

  const { title, amount, date, category, description } = inputState;

  const handleInput = name => e => {
    setInputState({...inputState, [name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    addIncome(inputState)
  }
  return (
    <FormStyled onSubmit={handleSubmit}>
      <div className="input-control">
        <input 
          type="text" 
          value={title}
          name={'title'}
          placeholder='Titulo Salário'
          onChange={handleInput('title')}
        />
      </div>

      <div className="input-control">
        <input 
          type="text" 
          value={amount}
          name={'amount'}
          placeholder='R$ 0,00'
          onChange={handleInput('amount')}
        />
      </div>

      <div className="input-control">
        <DatePicker 
          id='date'
          placeholderText='Insira a Data'
          selected={date} // Mostra a data selecionada
          dateFormat='dd/MM/yyyy'
          onChange={(date)=>{// Função executada quando a data muda
            setInputState({...inputState, date: date}) // Atualiza o estado com a nova data
          }}
          />
      </div>

      <div className="selects input-control">
          <select required value={category} name="category" id="category" onChange={handleInput('category')}>
            <option value="" disabled>Selecione uma opção</option>
            <option value="salary">Salário</option>
            <option value="freelancing">Freelancing</option>
            <option value="investments">Investimentos</option>
            <option value="stocks">Estoques</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="bank">Banco</option>
            <option value="youtube">Youtube</option>
            <option value="other">Outro</option>
          </select>
      </div>

      <div className="input-control">
        <textarea name="description" value={description} placeholder='Insira a Descrição' cols='30' rows='4' id="description" onChange={handleInput('description')}></textarea>
      </div>

      <div className="submit-btn">
        <button>Adicionar Receita</button>
      </div>
    </FormStyled>
  )
}

const FormStyled = styled.form`

`

export default Form