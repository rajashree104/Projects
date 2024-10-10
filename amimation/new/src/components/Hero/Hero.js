import "./Hero.css";
import React from 'react'
import {Link} from "react-router-dom"
import Introimg from "../../assets/image.png"
const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into_img"  src={Introimg} alt="introimg"/>
      </div>
<div className="content">
  <p>HI,I'M A FREELANCER.</p>
  <h1>React Developer</h1>
  <div>
    <Link to="/project" className="btn">Projects</Link>
    <Link to="/contact" className="btn btn_light">Contact</Link>
  </div>
</div>
    </div>
  )
}

export default Hero
