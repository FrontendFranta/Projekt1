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
    <a className='navbar-brand' href='/Projekt1/#home'>TRVL. <FaTypo3/> </a>

    <div className='menu-icon' onClick={handleClick}>
            {click? <FaRegTimesCircle/>:<FaBars/>}
        </div>

        <div className={click ? 'navbar-nav active':'navbar-nav'}>
    
        <li class="nav-item">
  <Link className='nav-link' activeClass="active"  spy to="home" onClick={closeMobileMenu}>Home </Link>
  </li>
       
  <li class="nav-item">
  <Link className='nav-link' activeClass="active"  spy to="services" onClick={closeMobileMenu}>Services </Link>
  </li>

  <li class="nav-item">
  <Link className='nav-link' activeClass="active"  spy to="about" onClick={closeMobileMenu}>About </Link>
  </li>

  <li class="nav-item">
  <Link className='nav-link' activeClass="active"  spy to="projects" onClick={closeMobileMenu}>Projects </Link>
  </li>

  <li class="nav-item">
  <Link className='nav-link' activeClass="active"  spy to="members" onClick={closeMobileMenu}>Members </Link>
  </li>

  <li class="nav-item">
  <Link className='nav-link' activeClass="active"  spy to="contact" onClick={closeMobileMenu}>Contact</Link>
  </li>
       
      </div>
      </div>
 </nav>
  )
}

export default Navigation
