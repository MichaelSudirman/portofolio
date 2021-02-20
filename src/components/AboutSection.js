import React from "react"
import styled from 'styled-components'

import {
    Container as RBContainer,
    Card,
    Row,
    Col,
} from 'react-bootstrap'

import ProfilePicture from '../assets/profpic.png'

const Container = styled.div`
background-color: #F5F5F5;
color: #1F2833;
padding-top: 48px;
padding-bottom: 64px;
@media screen and (min-width: 1200px) {
}
`
const Title = styled.p`
width: 100%;
text-align: center;
font-size: 48px;
padding-bottom: 48px;
font-weight: bold;
`
const ProfImg = styled.img`
border-radius: 50%;
box-shadow: 0 0 10px #1F2833;
`
const Text = styled.div`
height: 100%;
padding: 20px;
font-size: 24px;
border-left-style: solid;
border-left-color: #1F2833;
`
const AboutSection = () => {
    return (
        <Container>
            <RBContainer>
                <Row>
                    <Title>About Me</Title>
                </Row>
                <Row style={{ width: '100%' }}>
                    <Col xl={1} />
                    <Col xl={3}>
                        <ProfImg src={ProfilePicture} alt="Profile Picture" />
                    </Col>
                    <Col xl={7}>
                        <Text>
                            Hey, my name is Michael Sudirman and I am a computer science student from Universitas Indonesia. Throughout my campus life, I have been more and more interested in data science and software engineering.
                        </Text>
                    </Col>
                    <Col xl={1} />
                </Row>
            </RBContainer>
        </Container>
    )
}

export default AboutSection