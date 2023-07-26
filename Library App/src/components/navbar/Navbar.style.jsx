import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navstyled = styled.nav`
  display: flex;
  width: 100%;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  background-color: white;
div{
  cursor: pointer;
  
}

  h1{
    color: darkslategray;
    text-decoration: none;
    font-weight: bold;
    font-size: 2rem;

  }

  @media (max-width:800px) {
    flex-direction: column;
  }
`;


export const LinkDiv = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width:800px) {
    flex-direction: column;
  }
`

export const LinkStyled = styled(NavLink)`
    text-align: center;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
    color: rgb(139, 126, 116);
    transition: all 0.3s ease-in 0s;
    font-size: 1.5rem;
    font-weight:bold;
    &:hover{
      color: black;
    }
    `;





export default Navstyled;

