import "./about_content.css";
import React from 'react'
import {Link} from 'react-router-dom'
import aimg from "../../assets/img1.jpg"
import bimg from "../../assets/img2.jpg"
const about_content = () => {
    return (
        <div className="about">
            <div className="about_left">
                <h1>Who Am I?</h1>
                <p>Im a react front-end developer. I create responsive secure websites foe my clients.</p>
                <Link to="/contact">
                    <button className="btn">Contact
                    </button></Link>
            </div>
            <div className="about_right">
                <div className="img_container">
                    <div className="img_stack top">
                        <img src={aimg}  className="img"/>
                    </div>
                    <div className="img_stack bottom">
                        <img src={bimg}  className="img"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default about_content
