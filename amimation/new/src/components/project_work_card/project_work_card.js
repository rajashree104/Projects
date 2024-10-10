import "./project_work_card.css";
import React from 'react';
import { NavLink } from "react-router-dom";
const project_work_card = (props) => {
  return (
    <div className="project_card">
            <img src={props.imgsrc} alt="pro1"/>
            <h2 className="project_title">{props.title}</h2>
            <div className="pro_details">
                <p>{props.text}</p>
                <div className="pro_btns">
                    <NavLink to={props.view} className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>

                </div>
            </div>
        </div>
  )
}

export default project_work_card
