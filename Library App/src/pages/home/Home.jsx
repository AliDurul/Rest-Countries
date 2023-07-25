import React from 'react'
import FlexDiv from '../../styles/Flex'
import FormStyled, { DivForm ,ImgStyled } from './Home.style'
import books from "../../assets/books.jpg"
const Home = () => {
    return (
        <FlexDiv>
            <DivForm>
            <h2>BOOKS OR MAGAZINES</h2>
                <FormStyled action="">
                    <input type="text" />
                    <select name="" id="">
                        <option value="all">ALL</option>
                        <option value="ALL">BOOKS</option>
                        <option value="ALL">MAGAZINES</option>
                    </select>
               
                    <button type='submit'>SEARCH</button>
                
                </FormStyled>
            </DivForm>

          
                <ImgStyled src={books} alt="" />
     
        </FlexDiv>
    )
}

export default Home