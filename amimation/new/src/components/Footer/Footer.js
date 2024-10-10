import "./Footer.css";
import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", margin: "1rem" }} />
                        <div>
                            <p>123b Housing Society.</p>
                            <p>Bangalor</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", margin: "1rem" }} />
                            1-23-4567-89
                        </h4>
                    </div>
                    <div className="mail">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", margin: "1rem" }} />
                            info@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>This is me Rajashree. I enjoy discussing new projects and design challenges. </p>
                    <div className="social">
                    <FaFacebook size={20} style={{ color: "#fff", margin: "1rem" }} />
                    <FaInstagram size={20} style={{ color: "#fff", margin: "1rem" }} />
                    <FaTwitter size={20} style={{ color: "#fff", margin: "1rem" }} />
                    <FaLinkedin size={20} style={{ color: "#fff", margin: "1rem" }} />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
