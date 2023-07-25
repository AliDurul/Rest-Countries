import React from 'react'
import CardWrapper, { CardDiv } from './Card.style'
import { useNavigate } from 'react-router-dom';

const Card = ({ data }) => {
    let navigate = useNavigate();
    return (
        <CardWrapper>
            {
                data?.map(item => {
                    // const { id, volumeInfo: { title, imageLinks: { thumbnail } } } = item;
                    return (
                        <CardDiv key={item.id}>
                            <h1>{item.volumeInfo.title}</h1>
                            <img src={item?.volumeInfo?.imageLinks?.smallThumbnail} alt="" />
                            <button
                                onClick={() => navigate(`/detail/${item.id}`, { state: item })}
                            >
                                VİEW MORE
                            </button>
                        </CardDiv>
                    )
                })
            }

        </CardWrapper>
    )
}

export default Card