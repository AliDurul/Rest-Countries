import styled from 'styled-components';

const DetailDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem;
    border: 1px solid white;
    border-radius: 5px;
    background-color: rgb(225, 241, 221);
    color: rgb(5, 5, 5);
    width: 80%;
    h1{
        margin: 25px;
    }

    .detail-img{
        margin: 2rem;
    }

    .detail-desc{
        min-width: 40%;
    text-align: justify;
    font-size: 1.5rem;
    margin: 1rem 2rem;
    }

    .detail-bottom{
        min-width: 40%;
    font-size: 1.4rem;
    margin: 2rem;
    text-align: center;
    }
`;

export default DetailDiv;
