import React from 'react'
import styled from 'styled-components'
// Bootstrap imports
import {
} from 'react-bootstrap'


const Container = styled.div`
background-color: #1F2833;
height: 100vh;
width: 100wh;
display: flex;
align-items: center;
justify-content: center;
`
const TitleContainer = styled.div`
display: flex;
flex-direction: row;
font-size: 64px;
padding: 16px;
flex-grow: 1
@media screen and (max-width: 768px) {
    font-size: 48px;
    padding: 10px;
}
`
const VerticalBorder = styled.div`
@media screen and (min-width: 768px) {
    height: inherit;
    margin: 10px;
    width: 3px;
    background-color: #45A29E;
    border-radius: 10%;
    margin: 12px;
}
`
const Row = styled.div`
display: flex;
flex-direction: row;
`
const Text = styled.p`
font-size: 64px;
@media screen and (max-width: 768px) {
    font-size: 48px;
}
`

const CoverSection = () => {
    return (
        <>
            <Container>
                <TitleContainer className='theme-dark'>
                    <VerticalBorder />
                    <Text className='theme-light'>Coming Soon !</Text>
                </TitleContainer>
            </Container>
        </>
    )
}

export default CoverSection