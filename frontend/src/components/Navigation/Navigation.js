import React, { useState } from 'react'
import avatar from '../../img/Avatar.png'
import { menuItems } from '../../utils/menuItems';
import { signout } from '../../utils/Icons';
import styled from 'styled-components';

function Navigation() {
  const [ active, setActive ] = useState(0)
  return (
    <NavStyled>
      <div className="user-con">
        <div className='img-name'>
          <img src={avatar} alt="" />
          <div className="text">
            <h2>Gabriel</h2>
            <p>Seu dinheiro</p>
          </div>
        </div>
        <ul className="menu-items">
          
          {menuItems.map((item)=>{ // Iterar sobre a lista de itens de menu
            // Retorna um item de lista para cada item na lista
            return <li
              // Atribuir uma chave única para cada item (usando o id do item)
              key={item.id}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          })}
        </ul>
        <div className="bottom-nav">
          <li>
            {signout} Sing Out
          </li>
        </div>
      </div>
    </NavStyled>
  )
  
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height:100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #fff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  gap: 2rem;

  .user-con{
    height:85vh;
    display:flex;
    flex-direction: column;
    justify-content:flex-start;
    gap: 1rem;

    .img-name{
      display:flex;
      align-items:center;
      gap: 1rem;
    }

    img{
      width: 80px;
      height: 80px;
      border-radius:50%;
      object-fit: cover;
      background: #FCF6F9;
      border: 2px solid #FFF;
      padding: .2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2{
      color: rgba(34,34,96,1);
    }
    p{
      color: var(--primary-color2);
    }
  }
  .menu-items{
    flex: 1;
    display: flex;
    flex-direction: column;
    li{
      display:grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: .6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all .4s ease-in-out;
      color: var(--primary-color2);
      padding-left: 1rem;
      position: relative;
      i{
        color: var(--primary-color2);
        font-size: 1.4rem;
        transition: all .4s ease-in-out;
      }
    }
  }
`;

export default Navigation
