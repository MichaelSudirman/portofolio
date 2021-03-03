import React from "react";
import styled from 'styled-components';
// Bootstrap imports
import {
} from 'react-bootstrap';
// Components
import RubyHLogo from '../assets/rubyh.png';
import UQLogo from '../assets/uq.png';
import UILogo from '../assets/ui.png';
import BTKLPPLogo from '../assets/btklpp.png';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
// background-color: white;
background-color: #F5F5F5;
`

const Section = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 1200px;
@media screen and (max-width: 1200px) {
    width: 90vw;
}
@media screen and (max-width: 576px) {
    width: 100vw;
}
`
const Body = styled.div`
display: flex;
flex-direction: row;
padding: 25px 10px 25px 10px;
@media screen and (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // padding: 10px;
}
`
const BodyContent = styled.div`
display: flex;
flex-direction: column;
padding: 10px 10px 10px 10px;
@media screen and (max-width: 576px) {   
}
`
const VerticalBorder = styled.div`
height: inherit;
margin: 10px;
@media screen and (max-width: 576px) {
    height: 0;
    margin: 0;
}
`
const Title = styled.p`
padding: 10px;
`
const ImgBox = styled.div`
height: 128px;
width: 128px;
border-radius: 5%;
border: solid 0.5px;
`
const SvgIcon = styled.svg`
padding: 5px;
color: #1F2833;
`
const Logo = styled.img`
height: inherit;
width: inherit;
padding: 5px;
`
const Link = styled.a`
// text-decoration: none;
`

const BackgroundSection = () => {
    return (
        <Container>
            <Section>
                <div>
                    <Title className={"h1 font-weight-normal"}>Education</Title>
                </div>
                <Body>
                    <ImgBox><Logo src={UQLogo} alt="UQ Logo" /></ImgBox>
                    <VerticalBorder />
                    <BodyContent>
                        <p className={"h2 font-weight-normal"}>University of Queensland</p>
                        <ul>
                            <li className={"h5 font-weight-normal"}>Feb 2019 - Present</li>
                            <li className={"h5 font-weight-normal"}>Bachelor of Computer Science, Data Science Major</li>
                        </ul>
                    </BodyContent>
                </Body>
                <Body>
                    <ImgBox><Logo src={UILogo} alt="UI Logo" /></ImgBox>
                    <VerticalBorder />
                    <BodyContent>
                        <p className={"h2 font-weight-normal"}>Universitas Indonesia</p>
                        <ul>
                            <li className={"h5 font-weight-normal"}>Jul 2017 - Present</li>
                            <li className={"h5 font-weight-normal"}>Bachelor of Computer Science, Continuing double degree in University of Queensland</li>
                        </ul>
                    </BodyContent>
                </Body>
                <div>
                    <Title className={"h1 font-weight-normal"}>Experience</Title>
                </div>
                <Body>
                    <ImgBox><Logo src={BTKLPPLogo} alt="BTKLPP Logo" /></ImgBox>
                    <VerticalBorder />
                    <BodyContent>
                        <p className={"h2 font-weight-normal"}>Front-end Developer</p>
                        <p className={"h4 font-weight-normal"}>Environmental Health and Disease Control Engineering Center - Medan, Indonesia</p>
                        <ul>
                            <li className={"h5 font-weight-normal"}>Dec 2020 – Feb 2021</li>
                            <li className={"h5 font-weight-normal"}>Developed website to automate/digitize COVID-19 Test procedure in Medan, which were already serving around 1000 patients before the website deployment and is still counting.</li>
                            <li className={"h5 font-weight-normal"}>Created user’s homepage and admin pages and components for website using React JS</li>
                        </ul>
                    </BodyContent>
                </Body>
                <Body>
                    <ImgBox><Logo src={RubyHLogo} alt="RubyH Logo" /></ImgBox>
                    <VerticalBorder />
                    <BodyContent>
                        <p className={"h2 font-weight-normal"}>Software Engineer</p>
                        <p className={"h4 font-weight-normal"}>RubyH - Jakarta, Indonesia</p>
                        <ul>
                            <li className={"h5 font-weight-normal"}>Sep 2019 – Dec 2019</li>
                            <li className={"h5 font-weight-normal"}>Coursework in Universitas Indonesia</li>
                            <li className={"h5 font-weight-normal"}>Developed Point of Sale (POS) Application for product sellers</li>
                            <li className={"h5 font-weight-normal"}>Uses GraphQL middleware to handle 3rd party Odoo API</li>
                            <li className={"h5 font-weight-normal"}>Uses React JS + ApolloClient for creating components and pages</li>
                        </ul>
                    </BodyContent>
                </Body>
                <Body>
                    <ImgBox><Logo src={UILogo} alt="UI Logo" /></ImgBox>
                    <VerticalBorder />
                    <BodyContent>
                        <p className={"h2 font-weight-normal"}>Teaching Assistant</p>
                        <p className={"h4 font-weight-normal"}>Universitas Indonesia, Depok, Indonesia</p>
                        <ul>
                            <li className={"h5 font-weight-normal"}>Sep 2018 – Jun 2019</li>
                            <li className={"h5 font-weight-normal"}>Programming Foundations I and II (Sep 2018 – Jun 2019, 10 months): Monitored, and graded 30 students’ practical sessions every week. Teaches Python during the first 5 months and Java for the next 6 months.</li>
                            <li className={"h5 font-weight-normal"}>Linear Algebra (Jan 2019 – Jun 2019, 6 months): Teaches a class of 30 students every 2 weeks about linear algebra and grades their homework every month.</li>
                        </ul>
                    </BodyContent>
                </Body>
                <div>
                    <Title className={"h1 font-weight-normal"}>Projects</Title>
                </div>
                <Body>
                    <ImgBox><SvgIcon xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                    </SvgIcon></ImgBox>
                    <VerticalBorder />
                    <BodyContent>
                        <p className={"h2 font-weight-normal"}>Vendue</p>
                        <p className={"h4 font-weight-normal"}><Link href= "https://vendue.mikesudirman.me/" target="_blank">Url Link</Link> - <Link href= "https://github.com/MichaelSudirman/vendue" target="_blank">Git Repository</Link></p>
                        <ul>
                            <li className={"h5 font-weight-normal"}>Created an auction website using Flask, ReactJS, and MongoDB</li>
                            <li className={"h5 font-weight-normal"}>Integrated RabbitMQ to queue auction timer and GCP Bucket for storing image</li>
                            <li className={"h5 font-weight-normal"}>Uses third party API Google Map to autofill locations of the auction</li>
                            <li className={"h5 font-weight-normal"}>Uses Nginx, Docker, and Linux for a remote deployment to AWS e2c instance</li>
                        </ul>
                    </BodyContent>
                </Body>
                <Body>
                    <ImgBox><SvgIcon xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                    </SvgIcon></ImgBox>
                    <VerticalBorder />
                    <BodyContent>
                        <p className={"h2 font-weight-normal"}>Socmed</p>
                        <p className={"h4 font-weight-normal"}><Link href= "https://socmed.mikesudirman.me/" target="_blank">Url Link</Link> - <Link href= "https://github.com/MichaelSudirman/soc-med-fe" target="_blank">Git Repo Front-end</Link> - <Link href= "https://github.com/MichaelSudirman/soc-med-react-firebase-client" target="_blank">Git Repo Back-end</Link></p>
                        <ul>
                            <li className={"h5 font-weight-normal"}>Created a social media website using Express JS and React JS Redux</li>
                            <li className={"h5 font-weight-normal"}>Uses Google Firebase integration to store backend functions and storage</li>
                            <li className={"h5 font-weight-normal"}>Also uses Nginx, Docker, and Linux for a remote deployment to AWS e2c instance</li>
                        </ul>
                    </BodyContent>
                </Body>
            </Section>
        </Container>
    )
}

export default BackgroundSection