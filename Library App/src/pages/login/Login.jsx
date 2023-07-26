import React, { useContext } from 'react'
import { LoginFlexDiv } from '../../styles/Flex'
import {  FormLogin } from './Login.style'
import AuthContext from '../../context/AuthContext'

import { useNavigate } from 'react-router-dom'

const Login = () => {
const navigate = useNavigate()
  const {setUser} = useContext(AuthContext)

  const handlesubmit = (e) => {
    e.preventDefault();
    setUser({username:e.target[0].value,password:e.target[1].value})
    navigate(-1)
  }

  return (
    <LoginFlexDiv pic="https://picsum.photos/1600/900">
 
        <FormLogin onSubmit={handlesubmit}>
          <h1>lOGIN HERE</h1>
          <input type="text" placeholder='USERNAME' required  />
          <input type="password" placeholder='PASSWORD' required/>
          <button type='submit'>LOGIN</button>
        </FormLogin>
   
    </LoginFlexDiv>
  )
}

export default Login