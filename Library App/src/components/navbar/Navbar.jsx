import React from 'react'
import Navstyled, { LinkStyled,LinkDiv } from './Navbar.style'


const Navbar = () => {
  return (
    <Navstyled>
      <div>
        <h1>Lee Library</h1>
      </div>
      <LinkDiv>
        <LinkStyled to="/" >HOME</LinkStyled>
        <LinkStyled to="about">ABOUT</LinkStyled>
        <LinkStyled to="register">REGISTER</LinkStyled>
        <LinkStyled to="login">LOGOUT</LinkStyled>
      </LinkDiv>
    </Navstyled>
  )
}

export default Navbar