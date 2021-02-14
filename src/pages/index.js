import React from 'react'
import CoverPage from '../components/CoverPage'
import Navbar from '../components/Navbar'
import AboutPage from '../components/AboutPage'
import BackgroundPage from '../components/BackgroundPage'
import ExperiencePage from '../components/ExperiencePage'
import ProjectPage from '../components/ProjectPage'
import Contact from '../components/Contact'

const main = () => {
    return (
        <div>
            <CoverPage />
            <AboutPage />
            <Navbar />
            <BackgroundPage />
            <ExperiencePage />
            <ProjectPage />
            <Contact />
        </div>
    )
}
export default main