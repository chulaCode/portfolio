import React from 'react'
import {AiFillFacebook} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import "./Footer.css"

const Footer = () => {
  return (
  <footer>
      <a href="#" className='footer__logo'>ChulaCODE</a>
     
      <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonial">Testimonial</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
          <a href="https://facebook.com"><AiFillFacebook /></a>
          <a href="https://instagram.com"><AiFillInstagram /></a>
          <a href="https://twitter.com"><AiFillTwitterCircle /></a>
      </div>

      <div className="footer__copyright">
        <small>
           &copy; ChulaCode. All rights reserve
        </small>
      </div>
  </footer>
    
  )
}

export default Footer