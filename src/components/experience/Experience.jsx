import React from 'react'
import "./Experience.css"
import {BsFillPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
       <h5>What Skills I Have</h5>
       <h2>My Experience</h2>

       <div className="container experience__container">
          <div className="experience__frontend">
              <h3>Frontend Development</h3>
              <div className="experience__content">
                 <article className='experience__details'>
                   <BsFillPatchCheckFill className='detail_icon'/>
                   <div>
                      <h4>HTML</h4>
                      <small className='text-light'>Experienced</small>
                   </div>
                 </article>

                 <article className='experience__details'>
                   <BsFillPatchCheckFill className='detail_icon'/>
                   <div>
                      <h4>css</h4>
                      <small className='text-light'>Experienced</small>
                   </div>
                 </article>

                 <article className='experience__details'>
                   <BsFillPatchCheckFill className='detail_icon'/>
                   <div>
                      <h4>Bootstrap</h4>
                      <small className='text-light'>Experienced</small>
                   </div>
                 </article>

                 <article className='experience__details'>
                   <BsFillPatchCheckFill className='detail_icon'/>
                   <div>
                      <h4>Tailwind</h4>
                      <small className='text-light'>Basic</small>
                   </div>
                 </article>

                 <article className='experience__details'>
                   <BsFillPatchCheckFill className='detail_icon'/>
                   <div>
                      <h4>Javascript</h4>
                      <small className='text-light'>Experienced</small>
                   </div>
                 </article>

                 <article className='experience__details'>
                   <BsFillPatchCheckFill className='detail_icon'/>
                   <div>
                      <h4>React</h4>
                      <small className='text-light'>Experienced</small>
                   </div>
                 </article>

                 <article className='experience__details'>
                   <BsFillPatchCheckFill className='detail_icon'/>
                   <div>
                      <h4>Next js</h4>
                      <small className='text-light'>Intermediate</small>
                   </div>
                 </article>

                 <article className='experience__details'>
                   <BsFillPatchCheckFill className='detail_icon'/>
                   <div>
                      <h4>TypeScript</h4>
                      <small className='text-light'>Beginner</small>
                   </div>
                 </article>
              </div>
          </div>

          <div className="experience__backend">
              <h3>Backend Development</h3>
              <div className="experience__content">
                 <article className='experience__details'>
                   <BsFillPatchCheckFill className='detail_icon'/>
                   <div>
                      <h4>Node js</h4>
                      <small className='text-light'>Experienced</small>
                   </div>
                 </article>

                 <article className='experience__details'>
                   <BsFillPatchCheckFill className='detail_icon'/>
                   <div>
                      <h4>Mongo db</h4>
                      <small className='text-light'>Experienced</small>
                   </div>
                 </article>

                 <article className='experience__details'>
                   <BsFillPatchCheckFill className='detail_icon'/>
                   <div>
                      <h4>Express</h4>
                      <small className='text-light'>Experienced</small>
                   </div>
                 </article>

              <article className='experience__details'>
                   <BsFillPatchCheckFill className='detail_icon'/>
                   <div>
                      <h4>Mysql</h4>
                      <small className='text-light'>Experienced</small>
                   </div>
                 </article>

                 <article className='experience__details'>
                   <BsFillPatchCheckFill className='detail_icon'/>
                   <div>
                      <h4>Php</h4>
                      <small className='text-light'>Intermediate</small>
                   </div>
                 </article>

                 <article className='experience__details'>
                   <BsFillPatchCheckFill className='detail_icon'/>
                   <div>
                      <h4>SqlLite</h4>
                      <small className='text-light'>Intermediate</small>
                   </div>
                 </article>

                 <article className='experience__details'>
                   <BsFillPatchCheckFill className='detail_icon'/>
                   <div>
                      <h4>Laravel</h4>
                      <small className='text-light'>Intermediate</small>
                   </div>
                 </article>

                 <article className='experience__details'>
                  <BsFillPatchCheckFill className='detail_icon'/>
                   <div>
                      <h4>Python</h4>
                      <small className='text-light'>Basic</small>
                   </div>
                 </article>
              </div>
          </div>

          <div className="experience__backend">
              <h3>Mobile Development</h3>
              <div className="experience__content">
                 <article className='experience__details'>
                   <BsFillPatchCheckFill className='detail_icon'/>
                   <div>
                      <h4>Flutter</h4>
                      <small className='text-light'>Beginner</small>
                   </div>
                 </article>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Experience