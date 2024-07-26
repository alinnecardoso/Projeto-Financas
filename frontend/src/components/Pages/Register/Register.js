import { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Register = () =>{
  const [data, setData] = useState({
    nome:'',
    foto:'',
    email:'',
    senha:'',
  })

const [error, setError] = useState('')
const navigate = useNavigate();

const handleChange = ({currentTarget:input}) =>{
  setData({...data,[input.name]: input.value})
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const url = 'http://localhost:8123/users';
    const {data:res} = await axios.post(url,data);
    navigate("/login")
    console.log(res.message);
  } catch (error) {
    if(error.response && error.response.status >=400 && error.response <=500){
      setError(error.response.data.message)
    }
  }
}

  return (
    <RegisterStyled>
      <div className="register-container">
        <div className="left">
          <h1>Bem-Vindo</h1>
          <Link to='/login'>
            <button type="button" className="btn-white">
              Sign in
            </button>
          </Link>
        </div>
        <div className="right">
          <form className="form-container" onSubmit={handleSubmit} >
            <h1>Criar Conta</h1>
            <input 
              type="text"
              placeholder="Nome"
              name="nome"
              onChange={handleChange}
              value={data.nome}
              required
              className="input"
            />
            <input 
              type="url"
              placeholder="Foto"
              name="foto"
              onChange={handleChange}
              value={data.foto}
              required
              className="input"
            />
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
            
            <button type="submit" className="btn-green">
              Registrar
            </button>
          </form>
        </div>
      </div>
    </RegisterStyled>
  )
};

const RegisterStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  
  .register-container{
    width: 900px;
    height: 500px;
    display: flex;
    border-radius: 10px;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
      0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  }
  .left{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #3bb19b;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .left h1 {
    margin-top: 0;
    color: white;
    font-size: 35px;
    align-self: center;
  }
  .right {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
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
  .input {
    outline: none;
    border: none;
    width: 370px;
    padding: 15px;
    border-radius: 10px;
    background-color: #edf5f3;
    margin: 5px 0;
    font-size: 14px;
  }
    .btn-green, .btn-white{
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
      margin: 10px;

    }
`

export default Register