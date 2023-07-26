import React from 'react'
import FlexDiv from '../../styles/Flex'
import { useLocation } from 'react-router-dom'
import DetailDiv from './Detail.style'

const Detail = () => {
    const { state } = useLocation()
    console.log(state);
    return (
        <FlexDiv >
            <DetailDiv>

            <h1>{state.volumeInfo.title}</h1>
            <div className='detail-img'><img src={state?.volumeInfo?.imageLinks?.smallThumbnail} alt="" /></div>
            <div className='detail-desc'>
                <p>{state.volumeInfo.description}</p>
            </div>
            <div className='detail-bottom'>
                <p>{state.volumeInfo.authors[0]}</p>
                <p>{state.volumeInfo.publishedDate}</p>
            </div>
            </DetailDiv>
        </FlexDiv>
    )
}

export default Detail