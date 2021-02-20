import React from 'react'
import styled from 'styled-components'


import {
    Container as RBContainer,
} from 'react-bootstrap'


const Container = styled.div`
background-color: #1F2833;
height: 100vh;
width: 100wh;
display: flex;
align-items: center;
`
const Row = styled.div`
display: flex;
direction: row;
padding-right: 2px;

@media screen and (max-width: 1200px) {
    direction: column;
}
`
const TitleContainer = styled.div`
font-size: 64px;
border-left-style: solid;
border-left-color: #45A29E;
padding: 16px;
flex-grow: 1
`

const CoverSection = () => {
    return (
        <Container>

            <div style={{
                flexGrow: 1
            }} />
            <TitleContainer className='theme-dark'>
                <p>Hello!</p>
                <Row><p>I'm&nbsp;</p><p className='theme-light'>Michael Sudirman</p><p>.</p></Row>
                <p>Welcome to my website</p>
            </TitleContainer>
        </Container>
    )
}

export default CoverSection