import React from 'react'
import FlexDiv from '../../styles/Flex'
import { useLocation } from 'react-router-dom'

const Detail = () => {
    const { state } = useLocation()
    console.log(state);
    return (
        <FlexDiv>
            <h1>{state.volumeInfo.title}</h1>
            <div><img src={state.volumeInfo.imageLinks.smallThumbnail} alt="" /></div>
            <div>
                <p>{state.volumeInfo.description}</p>
            </div>
            <div>
                <p>{state.volumeInfo.authors[0]}</p>
                <p>{state.volumeInfo.publishedDate}</p>
            </div>
        </FlexDiv>
    )
}

export default Detail