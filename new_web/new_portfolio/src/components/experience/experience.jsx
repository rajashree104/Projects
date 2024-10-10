import React from 'react'
import "./experience.css"
import { BsFillPatchCheckFill } from "react-icons/bs";

const experience = () => {
  return (
   <section id='experience'>
<h5>The Skills I have</h5>
<h2> My Experience</h2>
<div className="container experience_container">
<div className="experience_forntend">
<h3>Forntend Developer</h3>
<div className="experience_content">

<article className='experience_details'>
<BsFillPatchCheckFill className='experience_details_icon' />
<div>
<h4>HTML</h4>
<small className='text_light'>Experience</small>
</div>
</article>

<article className='experience_details'>
<BsFillPatchCheckFill className='experience_details_icon' />
<div>
<h4>CSS</h4>
<small className='text_light'>Experience</small>
</div>
</article>

<article className='experience_details'>
<BsFillPatchCheckFill className='experience_details_icon' />
<div>
<h4>JavaScript</h4>
<small className='text_light'>Experience</small>
</div>

</article>

<article className='experience_details'>
<BsFillPatchCheckFill className='experience_details_icon' />
<div>
<h4>Bootstrap</h4>
<small className='text_light'>Experience</small>
</div>

</article>

<article className='experience_details'>
<BsFillPatchCheckFill className='experience_details_icon' />
<div>
<h4>React</h4>
<small className='text_light'>Experience</small>
</div>

</article>

<article className='experience_details'>
<BsFillPatchCheckFill className='experience_details_icon' />
<div>
<h4>HTML</h4>
<small className='text_light'>Experience</small>
</div>

</article>
</div>
</div>
{/* end of frontend===== */}
<div className="experience_backend">
<h3>Backend Developer</h3>
<div className="experience_content">
  
<article className='experience_details'>
<BsFillPatchCheckFill className='experience_details_icon' />
<div>
<h4>MysQL</h4>
<small className='text_light'>Experience</small>
</div>

</article>

<article className='experience_details'>
<BsFillPatchCheckFill className='experience_details_icon'/>
<div>
<h4>MangoDB</h4>
<small className='text_light'>Experience</small>
</div>

</article>

<article className='experience_details'>
<BsFillPatchCheckFill className='experience_details_icon'/>
<div>
<h4>Python</h4>
<small className='text_light'>Experience</small>
</div>

</article>

<article className='experience_details'>
<BsFillPatchCheckFill className='experience_details_icon'/>
<div>
<h4>PHP</h4>
<small className='text_light'>Experience</small>
</div>

</article>

<article className='experience_details'>
<BsFillPatchCheckFill className='experience_details_icon'/>
<div>
<h4>Node JS</h4>
<small className='text_light'>Experience</small>
</div>

</article>



</div>
  
</div>

</div>
   </section>
  )   
}

export default experience
