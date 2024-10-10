import React from "react";
import './navbar.css';
import Logo  from'../../assets/logo192.png';
import {Link} from 'react-scroll';
import contactimg from '../../assets/contactme.png'
const Navbar =() =>{
    return(
 <nav className="navbar">
    <img  src={Logo} alt="logo" className="logo"/>
    <div className="desktopMenu">
<Link className="desktopMenuListItem">Home</Link>
<Link className="desktopMenuListItem">About</Link>
<Link className="desktopMenuListItem">Portfolio</Link>
<Link className="desktopMenuListItem">Client </Link>

    </div>
<button className="desktopMenuBtn">
<img src={contactimg} alt=""  className="desktopMenuImg" />Contact Me
</button>
</nav>
    )
}
export default Navbar;