import React from 'react'
import "./About.css";
import photo from "../../assets/chula_cover.jpeg"
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderActive} from "react-icons/vsc"
const About = () => {
  return (
    <section id='about'>
       <h5>Get To know</h5>
       <h2>About Me</h2>
       <div className="container about__container">
          <div className="about__me">
             <div className="about_me-image">
              <img src={photo} alt="about image" />
             </div>
          </div>
          <div className="about__content">
              <div className="about__cards">
                  <article className='about__card'>
                    <FaAward className='about__icon'/>
                     <h5>Experience</h5>
                     <small> 6+ years of experience</small>
                  </article>

                  <article className='about__card'>
                    <FiUsers className='about__icon'/>
                     <h5>Clients</h5>
                     <small>7+</small>
                  </article>

                  <article className='about__card'>
                    <VscFolderActive className='about__icon'/>
                     <h5>Projects</h5>
                     <small> 20+ completed projects</small>
                  </article>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet aperiam eos,
                 tenetur natus molestiae quaerat sit iste. Iste quasi, quidem consectetur fuga error perspiciatis neque, modi atque dolorum nobis alias.
              </p>
              
              <a href="#contact" className='btn btn-primary'>Let's Talk </a>
          </div>
       </div>  
    </section>
  )
}

export default About
