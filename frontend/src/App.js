import Navigation from './components/Navigation/Navigation';
import Orb from './components/Orb/Orb';
import { Mainlayout } from './styles/Layout';
import styled from 'styled-components';

function App() {
  return (
    <AppStyled className="App">
      <Orb/>
      <Mainlayout>
        <Navigation/>
      </Mainlayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height:100vh;
  width:100%;
  background-color:#E6D5DE;
`

export default App;
