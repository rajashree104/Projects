import "./project_hero.css"
import React, { Component } from 'react'

class Project_hero extends Component {
    render() {
        return (
            <div className="hero_img">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Project_hero
