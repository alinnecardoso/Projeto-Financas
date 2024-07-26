import React, { useState } from 'react'
import styled from 'styled-components';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';


//{nome, foto, email, senha}

function Register() {

  return (
    <RegisterStyled>
      <h1>Cadastrar</h1>
      <form className='form-control'>

        <div className='label-input'>

          <label>Nome</label>
          <input 
          
          type="text" 
          placeholder='Insira seu nome'
          
          required
           />
        </div>

        <div className='label-input'>
          <label>Foto</label>
          <input 
          type="url"
          placeholder='Insira url da foto'
          
          required
          />
        </div>

        <div className='label-input'>
          <label>Email</label>
          <input 
          
          type="email" 
          placeholder='Insira seu email' 
          
          required
          />
        </div>

        <div className='label-input'>
          <label>Senha</label>
          <input 
          
          type="password" 
          placeholder='Insira sua senha' 
          
          required
          />
        </div>

        <div className='submit-btn'>
          <Button
          name={'Cadastrar'}
          bPad={'.8rem 1.6rem'}
          bRad={'30px'}
          bg={'var(--color-accent)'}
          color={'#fff'}
          />
        </div>

        <div className='login-btn'>
          <button>
            <Link to='/login'>Já tenho cadastro</Link>
          </button>
        </div>

        
      </form>
    </RegisterStyled>
  )
}

const RegisterStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  h1{
    font-size: 50px;
  }
  .label-input{
    display: flex;
    flex-direction: column;
  }
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
    min-width: 300px;
    width: 60%;
    margin: 0 auto;
    &::placeholder{
      color: rgba(34, 34, 96, 0.4);
    }
  }
  .form-control{
    margin-top: 1%;
    display: flex;
    flex-direction: column;
    padding: 15px;
    min-height: fit-content;
    height: 35rem;
    min-width: fit-content;
    width: 40%;
    border-radius: 5px;
    border: solid 2px #fff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    gap:2rem;
    label{
      min-width: 300px;
      width: 60%;
      margin: 0 auto;
    }
    
  }
  .submit-btn{
      button{
        min-width: 300px;
        width: 60%;
        margin: 0 auto;
        justify-content: center;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        &:hover{
          background: var(--color-green) !important;
        }
        
    }
  }
  .login-btn{
    button{
      background: var(--color-green);
      padding: 0.8rem 1.6rem;
      border-radius: 30px;
      min-width: 300px;
      width: 60%;
      margin: 0 auto;
      justify-content: center;
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      outline: none;
      border: none;
      font-family: inherit;
      font-size: inherit;
      display: flex;
      align-items: center;
      gap: .5rem;
      cursor: pointer;
      transition: all .4s ease-in-out;
      &:hover{
          background: var(--color-accent) !important;
        }
      a{
        text-decoration: none;
        color: rgb(255, 255, 255);
      }
          
  }
    @media (min-width:360px) and (max-width:600px){
      .form-control .submit-btn,label{
        min-width: 300px;
        width:40%;
      }
    }
`

export default Register