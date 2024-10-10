import "./contactus.css";
import React from 'react'

const contactus = () => {
  return (
    <div className="form">
       <form>
        <label>Name</label>
        <input  type="text"></input>

        <label>Email</label>
        <input  type="email"></input>

        <label>Subjects</label>
        <input  type="text"></input>
          
        <label>Message</label>
        <textarea rows="6" placeholder="Type Your Message Here" />
        <button className="btn" >SUBMIT</button>
       </form>
      
    </div>
  )
}

export default contactus
