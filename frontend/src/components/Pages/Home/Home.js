import React, { useMemo, useState } from 'react'
import Navigation from '../../Navigation/Navigation';
import Orb from '../../Orb/Orb';
import { Mainlayout } from '../../../styles/Layout';
import styled from 'styled-components';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Incomes from '../../Pages/Incomes/Incomes';
import Expenses from '../../Pages/Expenses/Expenses';
import { useGlobalContext } from '../../../context/GlobalContext';

function Home() {
  const [ active, setActive ] = useState(1)

  const global = useGlobalContext();
  //console.log(global)

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard/>
      case 2:
        return <Dashboard/>
      case 3:
        return <Incomes/>
      case 4:
        return <Expenses/>
      default: 
        return <Dashboard/>
    }
  }

  const orbMemo = useMemo(()=>{
    return <Orb/>
  }, [])

  return (
    <HomeStyled className="App">
      {orbMemo}
      <Mainlayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </Mainlayout>
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  height:100vh;
  width:100%;
  background-color:#E6D5DE;
  main{
    flex:1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width:0;
    }
  }
`

export default Home