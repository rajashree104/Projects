import React from 'react'
import "./testimonials.css"
import Avt1 from "../../assets/avatar1.jpg"
import Avt2 from "../../assets/avatar2.jpg"
import Avt3 from "../../assets/avatar3.jpg"
import Avt4 from "../../assets/avatar4.jpg"



// import Swiper core and required modules
import {Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avtar: Avt1,
    name:"jagruti",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque voluptatem natus optio dolore quo autem ut sequi dignissimos doloremque provident inventore repudiandae impedit facilis perferendis explicabo illo id odio, dolores, ex necessitatibus exercitationem. Sit voluptates eaque consequatur, quos molestiae, odio unde quisquam, eius dolor quidem minima ab. Dolorum, voluptates excepturi."
  },
  {
    avtar: Avt2,
    name:"Ankur",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque voluptatem natus optio dolore quo autem ut sequi dignissimos doloremque provident inventore repudiandae impedit facilis perferendis explicabo illo id odio, dolores, ex necessitatibus exercitationem. Sit voluptates eaque consequatur, quos molestiae, odio unde quisquam, eius dolor quidem minima ab. Dolorum, voluptates excepturi."
  },
  {
    avtar: Avt3,
    name:"BALII",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque voluptatem natus optio dolore quo autem ut sequi dignissimos doloremque provident inventore repudiandae impedit facilis perferendis explicabo illo id odio, dolores, ex necessitatibus exercitationem. Sit voluptates eaque consequatur, quos molestiae, odio unde quisquam, eius dolor quidem minima ab. Dolorum, voluptates excepturi."
  },
  {
    avtar: Avt4,
    name:"Rajashree",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque voluptatem natus optio dolore quo autem ut sequi dignissimos doloremque provident inventore repudiandae impedit facilis perferendis explicabo illo id odio, dolores, ex necessitatibus exercitationem. Sit voluptates eaque consequatur, quos molestiae, odio unde quisquam, eius dolor quidem minima ab. Dolorum, voluptates excepturi."
  }
]

const testimonials = () => {
  return (
<section id='testimonials'>   
<h5>Review from clients</h5>
<h2>Testimonials</h2>

<Swiper className="container testimonials_container"


modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >


{
  data.map(({avtar,name,review},index) =>{
    return(
<SwiperSlide key={index} className='testimonials'>
<div className="client_avatar">
  <img src={avtar} alt='TIMG1'/>
  </div>
  <h5 className=' client_name'>{name}</h5>
  <small className='client_review'>{review}</small>
</SwiperSlide> 
    )
  })
}
</Swiper>
</section>
  )
}

export default testimonials


