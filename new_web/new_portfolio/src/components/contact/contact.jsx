import React from 'react'
import "./contact.css"
import { MdMailOutline } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";


const contact = () => {
  return (
  <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact_container">
      <div className="contact_options">
<article className="contact_option">
<MdMailOutline  className='contact_option_icon'/>
<h4> Email</h4>
<h5>rajashreesahoo944@gmail.com</h5>
<a href="mailto:rajashreesahoo944@gmail.com" target='_blank'>Send a message</a>
</article>

<article className="contact_option">
<MdOutlineMessage   className=''/>
<h4>Message</h4>
<h5>rajashreesahoo944@gmail.com</h5>
<a href="mailto:rajashreesahoo944@gmail.com" target='_blank'>Send a message</a>
</article>

<article className="contact_option">
<IoLogoWhatsapp   className=''/>
<h4> WhatsApp</h4>
<h5>+917608053143</h5>
<a href="https://api.whatsapp.com/send?phone+917608053143" target='_blank'>Send a message</a>
</article>
      </div>

      <form action='' >
      <input type='text' name='name' placeholder='Your Full Name' required/>
      <input  type='email' name='email' placeholder='Your Email' required/>
  <textarea name="message" rows="7"  placeholder='Your Message' required></textarea>
  <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>


    </div>
  </section>
  )
}

export default contact
