import React from 'react'
import Cover from '../components/CoverSection'
import Navbar from '../components/Navbar'
import About from '../components/AboutSection'
import Background from '../components/BackgroundSection'
import Contact from '../components/ContactSection'

const Index = () => {
    return (
        <div>
            <Navbar />
            <Cover/>
            <About/>
            <Background/>
            <Contact />
        </div>
    )
}
export default Index