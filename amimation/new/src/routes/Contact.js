import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from "../components/Footer/Footer"
import Project_hero from '../components/project_hero/project_hero'
import Contactus from '../components/contact/contactus'
const Contact = () => {
  return (
    <div>
   <Navbar />
   <Project_hero heading="CONTACT."  text="Let's have a chat"/>
<Contactus />
   <Footer />
      
    </div>
  )
}

export default Contact
