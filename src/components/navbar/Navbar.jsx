import React, { useState } from 'react'
import "./Navbar.css"
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUserAdd} from "react-icons/ai";
import {BsBook} from "react-icons/bs";
import {RiServiceLine} from "react-icons/ri";
import {AiOutlineContacts} from "react-icons/ai";
const Navbar = () => {

  const [activeNav, setActiveNav]=useState('#');
  console.log(activeNav)
  return (
    <nav>
       <a href="#" className={activeNav==='#' ? 'active':''}><AiOutlineHome/></a>
        <a href="#about" onClick={()=>setActiveNav('#about')}
        className={activeNav==='#about'? 'active':'' }><AiOutlineUserAdd/></a>
        <a href="#experience" onClick={()=>setActiveNav('#experience')}
        className={activeNav==='#experience'? 'active':'' }><BsBook /></a>
        <a href="#services" onClick={()=>setActiveNav('#services')}
        className={activeNav==='#services'? 'active':'' }><RiServiceLine /></a>
        <a href="#contact" onClick={()=>setActiveNav('#contact')}
        className={activeNav==='#contact'? 'active':'' }><AiOutlineContacts/></a>
    </nav>
  )
}

export default Navbar