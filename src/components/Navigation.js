import React, { useState } from 'react'
import "./Navigation.css"
import { FaBars, FaRegTimesCircle, FaTypo3 } from 'react-icons/fa';
import {NavLink} from "react-router-dom"
import { Link} from "react-scroll";

const Navigation = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = ()=> setClick(false);
    const [header, setHeader] = useState(false);
    const scrollHeader = () =>{
        if (window.scrollY>20){
setHeader(true);
        }
        else{
            setHeader(false);
        }

    }
window.addEventListener("scroll", scrollHeader);
    
  return (
    <nav className={header ? 'navbar navbar-expand-lg scroll sticky-top':'navbar navbar-expand-lg   sticky-top'}>
    <div className='container'>
    <a className='navbar-brand'>TRVL. <FaTypo3/> </a>

    <div className='menu-icon' onClick={handleClick}>
            {click? <FaRegTimesCircle/>:<FaBars/>}
        </div>

        <div className={click ? 'navbar-nav active':'navbar-nav'}>
    
        
        <a className='nav-link' href='/Projekt1/#home' onClick={closeMobileMenu}>Home</a>
        <a className='nav-link' href='/Projekt1/#services'onClick={closeMobileMenu}>Services</a>
        <a className='nav-link' href='/Projekt1/#about'onClick={closeMobileMenu}>About</a>
        <a className='nav-link' href='/Projekt1/#projects'onClick={closeMobileMenu}>Projects</a>
        <a className='nav-link' href='/Projekt1/#contact'onClick={closeMobileMenu}>Contact</a>
       
      </div>
      </div>
 </nav>
  )
}

export default Navigation
