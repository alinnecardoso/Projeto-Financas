import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home/Home'
import styled from 'styled-components';
import  { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Register from './components/Pages/Register/Register';

axios.defaults.baseURL = 'http://localhost:8123';
axios.defaults.withCredentials = true;

function App() {


  return (
    <AppStyled className="App">
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/register' element={<Register />} />
      </Routes>
    </AppStyled>
  );
}

const AppStyled = styled.div`

`

export default App;
