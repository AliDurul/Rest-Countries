import React from 'react'
import { LoginFlexDiv } from '../../styles/Flex'
import {  FormLogin } from './Login.style'

const Login = () => {
  return (
    <LoginFlexDiv bg="#bebe">
 
        <FormLogin>
          <h1>lOGIN HERE</h1>
          <input type="text" placeholder='USERNAME' required/>
          <input type="password" placeholder='PASSWORD' required/>
          <button type='submit'>LOGIN</button>
        </FormLogin>
   
    </LoginFlexDiv>
  )
}

export default Login