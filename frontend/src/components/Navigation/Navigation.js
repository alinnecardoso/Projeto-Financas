import React from 'react'
import avatar from '../../img/Avatar.webp'

function Navigation() {
  return (
    <navStyled>
      <div className="user-con">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>Gabriel</h2>
          <p>Your Money</p>
        </div>
        <ul className="menu-items">

        </ul>
      </div>
    </navStyled>
  )
  
}

const navStyled = styled.nav`

`;

export default Navigation
