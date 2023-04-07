import React from 'react';
import "./Testimonial.css";
import image1 from "../../assets/test1.jpg";
import image2 from "../../assets/test2.jpeg";
import image3 from "../../assets/test3.jpeg";
import image4 from "../../assets/test4.jpeg";
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonial = () => {
  const data=[
    {
      avatar:image1,
      name: 'Jenifer Adam',
      review: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem numquam  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem numquam adipisicing elit. Autem nadipisicing elit. Autem nadipisicing elit. Autem n',  
    },
    {
      avatar:image2,
      name: 'Peter Agnaje',
      review: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem numquam  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem numquam adipisicing elit. Autem nadipisicing elit. Autem nadipisicing elit. Autem n',  
    },
    {
      avatar:image3,
      name: 'Jenifer Adam',
      review: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem numquam  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem numquam adipisicing elit. Autem nadipisicing elit. Autem nadipisicing elit. Autem n',  
    },
    {
      avatar:image4,
      name: 'Cole bright',
      review: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem numquam  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem numquam adipisicing elit. Autem nadipisicing elit. Autem nadipisicing elit. Autem n',  
    }

  ]
  return (
    <section id='testimonial'>
       <h5>Review from clients</h5>
       <h2>Testimonial</h2>

       <Swiper className="container testimonial__container"
          // install Swiper modules
          modules={[ Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          >
       { data.map((item)=>{
            return(
              <SwiperSlide className='testimonial'>
                  <div className="client__avatar">
                      <img src={item.avatar} alt="image" />
                  </div>
                  <h5 className='client__name'>{item.name}</h5>
                      <small className='client__review'>
                         {item.review}
                      </small>
              </SwiperSlide>

            )
          })   
          }
       </Swiper>
   </section>
  )
}

export default Testimonial