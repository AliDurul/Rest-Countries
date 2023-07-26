import React, { useContext } from 'react'
import Navstyled, { LinkStyled, LinkDiv } from './Navbar.style'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import { ThemeContext } from '../../context/ThemeContext'


const Navbar = () => {
  const navigate = useNavigate()

  const { user,setUser } = useContext(AuthContext)


  return (
    <Navstyled theme>
      <div onClick={() => navigate("/")}>
        <h1 >Lee Library</h1>
      </div>
      <LinkDiv>
        <LinkStyled to="/" >HOME</LinkStyled>
        <LinkStyled to="about">ABOUT</LinkStyled>
        {!user && <LinkStyled to="register">REGISTER</LinkStyled>}
        {
          user ? <LinkStyled to="login" onClick={()=>setUser("")}>LOGOUT</LinkStyled> : <LinkStyled to="login">LOGIN</LinkStyled>
        }
      </LinkDiv>
    </Navstyled>
  )
}

export default Navbar