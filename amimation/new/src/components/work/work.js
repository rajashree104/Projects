import "../project_work_card/project_work_card.css";
import React from 'react';


import  Work_card_data from "./work_card_data"
import Project_work_card from "../project_work_card/project_work_card"

const work = () => {
  return (
    <div className="work_container">
      <h1 className="project_heading">Projects</h1>
      <div className="project_container">
       {Work_card_data.map((val,ind) =>{
        return(
            <Project_work_card 
            key= {ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            />
        )
       })}

      </div>
    </div>
  )
}

export default work