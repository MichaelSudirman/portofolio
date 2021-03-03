import React from "react"
import styled from 'styled-components'
// Bootstrap imports
import {
    Container as RBContainer,
    Row,
    Col,
} from 'react-bootstrap'
// Components
import ProfilePicture from '../assets/profimg.jpg'


const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
// background-color: white;
background-color: #F5F5F5;
padding-top: 48px;
padding-bottom: 64px;
`
const Section = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 1200px;
@media screen and (max-width: 1200px) {
    width: 100vw;
}
`
const Body = styled.div`
display: flex;
flex-direction: row;
padding: 10px 10px 10px 10px;
@media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
}
`
const Title = styled.p`
width: 100%;
text-align: center;
font-size: 48px;
padding-bottom: 48px;
font-weight: bold;
`
const ImgContainer = styled.div`
padding: 20px;
`
const ProfImg = styled.img`
height: 256px;
width: 256px;
border-radius: 50%;
box-shadow: 0 0 10px #1F2833;
`
const Text = styled.div`
display: flex;
align-items: center;
height: inherit;
padding: 20px;
font-size: 24px;
line-height: 2;
@media screen and (min-width: 1200px) {
}
`
const VerticalBorder = styled.div`
@media screen and (min-width: 1200px) {
    height: inherit;
    margin: 10px;
    width: 10px;
    background-color: #1F2833;
    border-radius: 10%;
}
`
const AboutSection = () => {
    return (
        <Container>
            <Section>

                <Title>About Me</Title>
                <Body>
                    <ImgContainer><ProfImg src={ProfilePicture} alt="Profile Picture" /></ImgContainer>
                    <VerticalBorder />
                    <Text>
                        Hey, my name is Michael Sudirman and I am a computer science student with double degree from University of Queensland and Universitas Indonesia. Throughout my campus life, I have been more and more interested in data science and software engineering, as well as technology in general. 
                </Text>
                </Body>
            </Section>
            {/* <RBContainer>
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
            </RBContainer> */}
        </Container>
    )
}

export default AboutSection