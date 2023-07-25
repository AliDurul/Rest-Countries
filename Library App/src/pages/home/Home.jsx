import React, { useState } from 'react'
import FlexDiv from '../../styles/Flex'
import FormStyled, { DivForm ,ImgStyled } from './Home.style'
import books from "../../assets/books.jpg"
import axios from 'axios'
import Card from '../../components/card/Card'
const Home = () => {
    const [data, setData] = useState("")
    const [query, setQuery] = useState("")
    const [option, setOption] = useState("all")

    const API_KEY = "AIzaSyBYIjirIrHgSBEJ3oYtIgTOFDaqywMfaz0"

    const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${option}&key=${API_KEY}`
    

    const getData = async() => {
        try {
            const res = await axios(URL)
            setData(res.data.items)
        } catch (error) {
            console.log(error);
        }
    }   

    const handleSubmit = (e) => {
      e.preventDefault()
      getData()
    }

    return (
        <FlexDiv>
            <DivForm>
            <h2>BOOKS OR MAGAZINES</h2>
                <FormStyled action="" onSubmit={handleSubmit} >
                    <input type="search" placeholder='Search..' value={query} onChange={(e)=>setQuery(e.target.value)}/>
                    <select name="type" id="type" onChange={(e)=>setOption(e.target.value)}>
                        <option  value="all">ALL</option>
                        <option value="books">BOOKS</option>
                        <option value="magazines">MAGAZINES</option>
                    </select>
               
                    <button type='submit'>SEARCH</button>
                
                </FormStyled>
            </DivForm>

          {
            !data ? <ImgStyled src={books} alt="" /> : <Card data={data}/>
          }
                
                
     
        </FlexDiv>
    )
}

export default Home