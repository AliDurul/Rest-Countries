import React from 'react'
import FlexDiv from '../../styles/Flex'
import { DivLogin, FormLogin } from './Login.style'

const Login = () => {
  return (
    <FlexDiv bg="#bebe">
 
        <FormLogin>
          <h1>lOGIN HERE</h1>
          <input type="text" placeholder='USERNAME' required/>
          <input type="password" placeholder='PASSWORD' required/>
          <button type='submit'>LOGIN</button>
        </FormLogin>
   
    </FlexDiv>
  )
}

export default Login