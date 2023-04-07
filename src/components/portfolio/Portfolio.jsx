import React from 'react'
import "./Portfolio.css"
import img2 from "../../assets/port1.png";
import img3 from "../../assets/port2.png";
import img4 from "../../assets/port3.png";
const Portfolio = () => {

  const data=[
    {
      id:1,
      image:img2,
      title: 'TrncJobs website (laravel)',
      github: 'https://github.com',
      demo: 'https://github.com'
    },
    {
      id:2,
      image:img3,
      title: 'Archihub website (laravel)',
      github: 'https://github.com',
      demo: 'https://github.com'
    },
    {
      id:3,
      image:img4,
      title: 'TrncJobs website (laravel)',
      github: 'https://github.com',
      demo: 'https://github.com'
    },
    {
      id:4,
      image:img2,
      title: 'Archihub website (laravel)',
      github: 'https://github.com',
      demo: 'https://github.com'
    },
    {
      id:5,
      image:img3,
      title: 'TrncJobs website (laravel)',
      github: 'https://github.com',
      demo: 'https://github.com'
    },
    {
      id:6,
      image:img4,
      title: 'Archihub website (laravel)',
      github: 'https://github.com',
      demo: 'https://github.com'
    },    
  ]

  data.map((item)=>{
    console.log(item.title)
  })
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
         {data.map((item)=>{
          return(
           <article className='porfolio__item' key={item.id}>
             <div className="portfolio__item-image">
                <img src={item.image} alt="image" />
             </div>
             <h4>{item.title}</h4>
             <div className="portfolio__item-cta">
               <a href={item.github} className='btn' target="_blank">Github</a>
               <a href={item.demo} className='btn btn-primary' 
               target="_blank">Live Demo</a>
             </div>
          </article>
          )
         })
        }
      </div>
   </section>
  )
}

export default Portfolio