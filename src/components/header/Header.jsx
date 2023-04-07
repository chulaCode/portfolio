import React from 'react'
import CTA from "./CTA";
import "./Header.css"
import photo from "../../assets/chula.jpeg"
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h2>Ochulaobari Emmanuel</h2>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={photo} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
      </div>
    
    </header>
  )
}

export default Header