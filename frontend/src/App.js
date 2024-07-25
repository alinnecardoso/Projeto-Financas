import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home/Home'
import styled from 'styled-components';
import  { Routes, Route } from 'react-router-dom';
import Register from './components/Pages/Register/Register';
import Login from './components/Pages/Login/Login';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:800';
axios.defaults.withCredentials = true;

function App() {


  return (
    <AppStyled className="App">
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/register' element={<Register />} />
        <Route  path='/login' element={<Login />} />
      </Routes>
    </AppStyled>
  );
}

const AppStyled = styled.div`

`

export default App;
