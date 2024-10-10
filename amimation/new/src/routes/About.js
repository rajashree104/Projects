import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from "../components/Footer/Footer"
import Project_hero from '../components/project_hero/project_hero'
import About_content from '../components/about/about_content'
const About = () => {
  return (
    <div>
 <Navbar />
 <Project_hero heading="ABOUT."  text="Im a friendly Front-End Developer."/>
<About_content />
 <Footer />
    </div>
  )
}

export default About
