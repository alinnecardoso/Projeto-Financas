import Home from './components/Pages/Home/Home'
import styled from 'styled-components';
import  { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Register from './components/Pages/Register/Register';
import Login from './components/Pages/Login/Login';


axios.defaults.baseURL = 'http://localhost:8123';
axios.defaults.withCredentials = true;

function App() {
  const user = localStorage.getItem("token")

  return (
    <Routes>
        {user && <Route path='/' exact element={<Home />} />}
        <Route path='/register' exact element={<Register />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/' exact element={<Navigate replace to='/login' />} />
    </Routes>
  );
}


export default App;
