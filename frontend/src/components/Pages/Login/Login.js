import { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () =>{
  const [data, setData] = useState({
    email:'',
    senha:'',
  })

const [error, setError] = useState('')

const handleChange = ({currentTarget:input}) =>{
  setData({...data,[input.name]: input.value})
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const url = 'http://localhost:8123/auth/';
    const {data:res} = await axios.post(url,data);
    localStorage.setItem('token', res.data);
    window.location = '/'
  } catch (error) {
    if(error.response && error.response.status >=400 && error.response <=500){
      setError(error.response.data.message)
    }
  }
}

  return (
    <LoginStyled>
      <div className="login-container">
        <div className="left">
        <form className="form-container" onSubmit={handleSubmit} >
            <h1>Entrar na sua conta</h1>
            
            <input 
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="input"
            />
            <input 
              type="password"
              placeholder="Senha"
              name="senha"
              onChange={handleChange}
              value={data.senha}
              required
              className="input"
            />
            {error && <div className="error-msg">{error}</div>}
            
            <button type="submit" className="green-btn">
              Log In
            </button>
          </form>
          
        </div>
        
        <div className="right">
        <h1>Novo Aqui?</h1>
          <Link to='/register'>
            <button type="button" className="btn-white">
              Registrar
            </button>
          </Link>
        </div>
      </div>
    </LoginStyled>
  )
};

const LoginStyled = styled.div`
  width: 100%;
	min-height: 100vh;
	background-color: #f5f5f5;
	display: flex;
	align-items: center;
	justify-content: center;
  .login-container{
    width: 900px;
    height: 500px;
    display: flex;
    border-radius: 10px;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
      0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  }

  .left{
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .form-container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-container h1{
    font-size: 40px;
	  margin-top: 0;
  }
    .input{
      outline: none;
      border: none;
      width: 370px;
      padding: 15px;
      border-radius: 10px;
      background-color: #edf5f3;
      margin: 5px 0;
      font-size: 14px;
    }

    .error-msg{
      width: 370px;
      padding: 15px;
      margin: 5px 0;
      font-size: 14px;
      background-color: #f34646;
      color: white;
      border-radius: 5px;
      text-align: center;
    }

    .right{
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #3bb19b;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    .right h1 {
      margin-top: 0;
      color: white;
      font-size: 40px;
      align-self: center;
    }

    .btn-white, .btn-green{
      border: none;
      outline: none;
      padding: 12px 0;
      background-color: white;
      border-radius: 20px;
      width: 180px;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
    }

    .btn-green{
    background-color: #3bb19b;
    color: white;
    margin: 10px;}
`

export default Login