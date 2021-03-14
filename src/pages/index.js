import React from 'react'
import { Helmet } from "react-helmet"

import Cover from '../components/CoverSection'
import Navbar from '../components/Navbar'
import About from '../components/AboutSection'
import Background from '../components/BackgroundSection'
import Contact from '../components/ContactSection'

const Index = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Michael Sudirman - Portfolio</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <Navbar />
            <Cover />
            <About />
            <Background />
            <Contact />
        </div>
    )
}
export default Index