import React from 'react'
import aboutCSS from "./../About/About.module.css"
const About = () => {
  return (
    <div className={`${aboutCSS.about_wrapper} section`}>
      <div className={aboutCSS.about_content}>
        <small className='secction_title'>About Us</small>
        <h2>What are Our Advantages <br /> Compare to Others</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium quibusdam consequatur eos labore ullam illum quisquam, facere aliquid assumenda deleniti repellendus! Cupiditate, possimus quis vitae sequi aliquam ipsam laboriosam dignissimos.</p>
        <div className={aboutCSS.about_cards}>
            <div className={className.about_card}>
                <div className={className.about_title}>
                    <i className="ri-globe-line"></i>
                </div>
            </div>
        </div>
      </div>
      <div className={aboutCSS.about_image}></div>
    </div>
  )
}

export default About
