import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from "../components/Footer/Footer"
import Project_hero from '../components/project_hero/project_hero'
import Project_price from "../components/project_price/project_price"
import Work from "../components/work/work"
const Project = () => {
  return (
    <div >
<Navbar />
<Project_hero heading="PROJECTS."  text="Some of my most recent works"/>
<Work />
<Project_price />
<Footer />
    </div>
  )
}

export default Project
