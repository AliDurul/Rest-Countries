import React from 'react'
import CardWrapper, { CardDiv } from './Card.style'
import { useNavigate } from 'react-router-dom';

const Card = ({ data }) => {
    let navigate = useNavigate();
    return (
        <CardWrapper>
            {
                data?.map(item => {
                    const { id,volumeInfo: { title, imageLinks: { thumbnail } } } = item;
                    return (
                        <CardDiv key={id}>
                            <h1>{title}</h1>
                            <img src={thumbnail} alt="" />
                            <button  onClick={() => navigate(`/detail/${id}`,{state:item} )}>VIEW MORE</button>
                        </CardDiv>
                    )
                })
            }

        </CardWrapper>
    )
}

export default Card