import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../context/GlobalContext';
import { plus } from '../../utils/Icons';
import Button from '../Button/Button';


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
          placeholder='Título'
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
        <Button 
          name={'Add Income'}
          icon={plus}
          bPad={'.8rem 1.6rem'}
          bRad={'30px'}
          bg={'var(--color-accent)'}
          color={'#fff'}
        />
      </div>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  display:flex;
  flex-direction:column;
  gap: 2rem;
  input, textarea, select{
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: .5rem 1rem;
    border-radius: 5px;
    border: solid 2px #fff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    background: transparent;
    resize:none;
    &::placeholder{
      color: var(--primary-color3);
    }
  }
    .input-control{
      input{
        width:100%
      }
    }

    .selects {
      display: flex;
      justify-content: flex-end;
        select{
          color: rgba(34, 34, 96, 0.4);
          &:focus, &:active{
            color: rgba(34, 34, 96, 1);
          }
        }
    }

    .submit-btn{
      button{
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        &:hover{
          background: var(--color-green) !important;
        }
      }
    }
`

export default Form