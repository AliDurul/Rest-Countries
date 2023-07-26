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
  background-image: url(${({pic})=>pic && pic});
  /* background-color: #cccccc; */
  height: calc(100vh - 110px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`




export default FlexDiv;
