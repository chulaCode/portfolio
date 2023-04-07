import React, {useRef} from 'react';
import "./Contact.css";
import {MdMarkEmailRead} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nwlpbmt', 'template_je9am4a', form.current, 'Ui9vmnSnyWSsyMeoT')
     e.target.reset();
     alert("Message sent")
  };

  return (
    <section id='contact'>
       <h5>Get In Touch</h5>
       <h2>Contact Me</h2>

       <div className="container container__contact">
            <div className="contact__options">
                <article className='contact__option'>
                    <MdMarkEmailRead className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>Codechula@gmail.com</h5>
                    <a href="mailto:codechula@gmail.com" target="_blank">Send a message</a>
                </article>

                <article className='contact__option'>
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <a href="https://wa.me/905338482763" target="_blank">Send a message</a>
                </article>
           
           </div>
           {/*End of contact option */}
          
              <form ref={form} onSubmit={sendEmail}>
                  <input type="text" 
                    name='name'
                    placeholder='Your Full Name'
                    required/>
                  <input type="text" 
                    name='Email'
                    placeholder='Your Email Address'
                    required/>
                  <textarea type="text"
                    name='message' rows="7"
                    placeholder='Your Message'
                    required/>
                  <button type='submit' className='btn btn-primary'>Send Message</button>
              </form>
          
       </div>
    </section>
  )
}

export default Contact