import React from 'react'
import CoverSection from '../components/CoverSection'
import Navbar from '../components/Navbar'
import AboutSection from '../components/AboutSection'
import EducationSection from '../components/EducationSection'
import ExperienceSection from '../components/ExperienceSection'
import ProjectSection from '../components/ProjectSection'
import Contact from '../components/ContactSection'

const Index = () => {
    return (
        <div>
            <Navbar />
            <CoverSection />
            <AboutSection />
            <EducationSection />
            {/* <ExperienceSection />
            <ProjectSection /> */}
            <Contact />
        </div>
    )
}
export default Index