import React from "react";
import './intro.css';
import bg from '../../assets/image.png'
import {Link} from 'react-scroll';
import btnimg from '../../assets/hireme.png'
const Intro = () =>{
    return(
       <section id="intro">
<div className="introContent">
    <span className="hello">Hello</span>
    <span className="introText">I'm <span className="introname">Raju</span><br /> Website Designer</span>
    <p className="intrropara">I am a skilled web designer with experience in creating visually appealing and user friendly websites</p>
   <Link><button className="btn"><img src={btnimg}  alt="" className="btnimg"/>Hire Me</button></Link>
</div>
<img src={bg}  alt="image" className="bg"/>


       </section>
    )
}
export default Intro;