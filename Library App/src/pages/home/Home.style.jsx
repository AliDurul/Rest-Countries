import styled from 'styled-components';


export const DivForm = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
`;

const FormStyled = styled.form`
    display: flex;
    width: 55%;
    max-width: 690px;
    flex-wrap: wrap;
    justify-content: center;
    /* background:rgba(223, 168, 120,0.6); */
    background:rgba(244, 242, 222,0.6);
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 30px;
    border: 1px solid rgba(15, 63, 42, 0.3);
    margin: 20px;
    gap: 20px 0;
    padding: 1.4rem 1rem;
    input{
    height: 3rem;
    width: 55%;
    border: none;
    border-radius: 1rem 3px 3px 1rem;
    text-indent: 10px;
    font-size: 1.5rem;
    background-color: rgba(255, 255, 255, 0.8);
      border: 1px solid black ;
    }
    select{
    border-radius: 3px 1rem 1rem 3px;
    padding: 5px;
    height: 3rem;
    width: 40%;
    border: none;
    font-size: 1.5rem;
    background-color: rgba(255, 255, 255, 0.8);
    }
    button{
    /* background-color:rgb(206, 230, 243); */
    background-color:rgba(233, 179, 132,0.7);
    padding: 7px;
    height: 3rem;
    border: none;
    margin: 0 1rem;
    border-radius: 1rem 3px;
    cursor: pointer;
    font-size: 1.5rem;
    transition: all 1s;
    &:hover{
      background-color: white;
    }
    }

`;


export const ImgStyled = styled.img`
    height:500px;
    width: 45%;
    object-fit: cover;
    border-radius: 20px;
    
`;

export default FormStyled;
