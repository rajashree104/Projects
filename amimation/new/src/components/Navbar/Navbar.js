import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from 'react-icons/fa'
const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
 const [color,setColor] = useState(false);
 const changeColor = () => {
    if(window.scrollY >=100){
        setColor (true);
    }else{
        setColor(false);
    }
 };
window.addEventListener("scroll",changeColor);

    return (
        <div className={color ? "header header_bg"  :" header"}>
            <Link to="/" >
                <h1>PORTFOLIO</h1>
            </Link>
            <ul className={click? "nav_menu active" : "nav_menu"}>
                <li> <Link to='/'>Home</Link></li>
                <li> <Link to='/about'>About</Link></li>
                <li> <Link to='/contact'>Contact</Link></li>
                <li> <Link to='/project'>Project</Link></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {
                    click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)
                }


            </div>
        </div>
    )
}


export default Navbar
