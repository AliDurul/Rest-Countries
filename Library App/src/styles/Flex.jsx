import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top:2rem;
  background-color:${({ bg }) => bg && bg} ;
  /* width: 10%; */

`;

export const LoginFlexDiv = styled(FlexDiv)`
  height: calc(100vh - 76px);
    
`




export default FlexDiv;
