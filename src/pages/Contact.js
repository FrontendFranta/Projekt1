import React from 'react'
import Navigation from '../components/Navigation'
import Landing from '../components/Landing'
import Footer from '../components/Footer'
import Formular from '../components/Formular'
import Fade from 'react-reveal/Fade';
const Contact = () => {
  return (
    <>
    <Navigation/>
    <Fade>
   <Landing mainTitle="Contact Us"></Landing></Fade>
   <Formular></Formular>
   <Footer></Footer>
   </>
   
  )
}

export default Contact
