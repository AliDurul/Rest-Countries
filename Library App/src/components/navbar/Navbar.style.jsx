import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navstyled = styled.nav`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  h1{
    color: darkslategray;
    text-decoration: none;
    font-weight: bold;
    font-size: 2rem;

  }
`;

export default Navstyled;


export const LinkStyled = styled(NavLink)`
    text-align: center;
    padding: 1rem 2rem;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
    color: rgb(139, 126, 116);
    transition: all 0.3s ease-in 0s;
    font-size: 1.5rem;
`;






