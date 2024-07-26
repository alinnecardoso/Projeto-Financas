import { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Register = () =>{
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
    const url = 'http://localhost:8123/auth';
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
  display:flex;
`

export default Login