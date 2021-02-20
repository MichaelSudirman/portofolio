import React from "react"
import styled from 'styled-components'

import GithubIcon from '../assets/github.png'
// import GitlabIcon from '../assets/gitlab.svg'
// import LinkedInIcon from '../assets/linkedin.jpg'

const Container = styled.div`
background-color: #1F2833;
height: 100vh;
`

const Contact = () => {
    return (
        <Container>
            Contact Page - Coming Soon!
                    <img width={48} height={48} src={GithubIcon} alt="Logo" />
                    {/* <img width={48} height={48} src={GitlabIcon} alt="Logo" /> */}
                    {/* <img width={48} height={48} src={LinkedInIcon} alt="Logo" /> */}
                    {/* <GithubIcon /> */}
        </Container>
    )
}

export default Contact