import React from 'react'
import Navstyled, { LinkStyled } from './Navbar.style'


const Navbar = () => {
  return (
    <Navstyled>
      <div>
        <h1>Lee Library</h1>
      </div>
      <div>
        <LinkStyled to="/" >HOME</LinkStyled>
        <LinkStyled to="about">ABOUT</LinkStyled>
        <LinkStyled to="register">REGISTER</LinkStyled>
        <LinkStyled to="login">LOGOUT</LinkStyled>
      </div>
    </Navstyled>
  )
}

export default Navbar