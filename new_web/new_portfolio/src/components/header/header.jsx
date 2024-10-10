import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/me.png"
import HeaderSocial from '../../components/header/HeaderSocial'
const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Raju</h1>
        <h5 className='text_light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        
        <div >
          <img src={ME} alt="meo" className="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default header
