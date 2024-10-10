import React from 'react'
import headerCSS from "./../Header/Header.module.css"
import hero_img from "./../../assets/1.png"
import element1 from "./../../assets/image11.png"
// import element2 from "./../../assets/image13.png"
// import element3 from "./../../assets/image13.png"
const Header = () => {
    return (
        <div className={`${headerCSS.header_wrapper} section`}>
            <div className={headerCSS.header_content}>
                <h3>Explore Your Life</h3>
                <h1>Enjoy Your Life<br />and Go Explore</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati sunt, natus laboriosam ducimus inventore maxime sequi.</p>
            </div>
            <div className={headerCSS.header_image}>
                <img src={hero_img} alt='hero_img'></img>
            </div>
            <div className={headerCSS.header_element}>
                <img src={element1} alt='element1'></img>
            </div>
            {/* <div className={headerCSS.header_element1}>
                <img src={element2} alt='element1'></img>
            </div>
            <div className={headerCSS.header_element2}>
                <img src={element3} alt='element1'></img>
            </div> */}

            <span id={headerCSS.element2}></span>
        </div>
    )
}

export default Header
