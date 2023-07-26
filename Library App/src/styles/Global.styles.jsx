import { createGlobalStyle } from "styled-components";
import library from "../assets/library-gcaf06147c_1920.jpg"

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Shantell+Sans:ital,wght@1,300;1,400;1,500;1,600&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-style: italic;
        font-family: 'Shantell Sans', cursive;
        
    }

    body{
        /* background-color: #bebe; */
    background-image: url(${library})
    }

`