import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.jpg"
import { FaAward, FaFastBackward } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { VscFolder } from "react-icons/vsc";



const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container  about__container'>
        <div className="about__me">
          <div className="about_me_image">
            <img src={ME} alt="about_me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+ Years Working </small>
            </article>

            <article className='about_card'>
              <LuUsers className='about_icon' />

              <h5>Clients</h5>
              <small>200+ Worldwide </small>
            </article>

            <article className='about_card'>
              <VscFolder className='about_icon' />
              <h5>Projects</h5>
              <small>80+ Completed </small>
            </article>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum hic sunt reprehenderit minus distinctio esse expedita in error, nihil, numquam, optio suscipit doloremque? Minima placeat dolorum illum nemo culpa laudantium!</p>
          <a href='#contact' className='btn'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
