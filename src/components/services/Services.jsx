import React from 'react'
import "./Services.css"
import {AiOutlineCheck} from "react-icons/ai"

const Services = () => {
  return (
    <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services__container">

           <article className='service'>
              <div className="services__head">
                <h3>Frontend</h3>
              </div>

              <ul className='service__list'>
                <li>
                   <AiOutlineCheck className='service__list-icon'/>
                   <p>Quality design and development</p>
                </li>
                <li>
                   <AiOutlineCheck className='service__list-icon'/>
                   <p>Quality design and development</p>
                </li>
                <li>
                   <AiOutlineCheck className='service__list-icon'/>
                   <p>Quality design and development</p>
                </li>
                <li>
                   <AiOutlineCheck className='service__list-icon'/>
                   <p>Quality design and development</p>
                </li>
              </ul>
           </article>
           {/*end of backend*/ }
           <article className='service'>
              <div className="services__head">
                <h3>Backend</h3>
              </div>

              <ul className='service__list'>
                <li>
                   <AiOutlineCheck className='service__list-icon'/>
                   <p>Quality design and development</p>
                </li>
                <li>
                   <AiOutlineCheck className='service__list-icon'/>
                   <p>Quality design and development</p>
                </li>
                <li>
                   <AiOutlineCheck className='service__list-icon'/>
                   <p>Quality design and development</p>
                </li>
                <li>
                   <AiOutlineCheck className='service__list-icon'/>
                   <p>Quality design and development</p>
                </li>
              </ul>
           </article>
          {/* end of mobile development */}

          <article className='service'>
              <div className="services__head">
                <h3>Mobile</h3>
              </div>

              <ul className='service__list'>
                <li>
                   <AiOutlineCheck className='service__list-icon'/>
                   <p>Quality design and development</p>
                </li>
                <li>
                   <AiOutlineCheck className='service__list-icon'/>
                   <p>Quality design and development</p>
                </li>
                <li>
                   <AiOutlineCheck className='service__list-icon'/>
                   <p>Quality design and development</p>
                </li>
                <li>
                   <AiOutlineCheck className='service__list-icon'/>
                   <p>Quality design and development</p>
                </li>
              </ul>
           </article>
        </div>
    </section>
  )
}

export default Services