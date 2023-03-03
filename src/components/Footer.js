import React from 'react'
import "./Footer.css"
import { Row, Container, Col, Card } from 'react-bootstrap';
import { FaPhoneAlt, FaMapMarkerAlt, FaMailBulk, FaTwitter } from 'react-icons/fa';
import Button from './Button';
import Fade from 'react-reveal/Fade';
const Footer = () => {
  return (
    <footer className='py-5 footer-img text-white'>
      <Container>
        <Fade up>
        <Row className='align-items-center justify-content-between'>
          <Col lg={4}>
          <span className='sub-heading mb-5'>Contact</span>
            <h2>Contact us</h2>
            <p className='mb-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>

            <Row className='mb-5 text-center'>
            <Col lg={6} className='mb-3'>
             
             <FaPhoneAlt className='ft-ic mb-3'/> <br/>
             <span>+421 777 888 999</span>
            </Col>
              <Col lg={6} className='mb-3'>
              
              <FaMapMarkerAlt className='ft-ic mb-3'/><br/>
              <span>Košice, Frýdecká 78</span>
            </Col>

              <Col lg={6} className='mb-3'>
              
              <FaMailBulk className='ft-ic mb-3'/><br/>
              <span>LKTV@gmail.com</span>
            </Col>

              <Col lg={6} className='mb-3'>
              
              <FaTwitter className='ft-ic mb-3'/><br/>
              <span>LKTV</span>
            </Col>
            
            </Row>
           
          </Col>

          <Col lg={6}>
          <iframe className='mapa' title="Mapa Google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98955.1150742869!2d18.228254696973533!3d49.679990847225014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713f725179c0af5%3A0x400af0f66150440!2zRnLDvWRlay1Nw61zdGVr!5e0!3m2!1scs!2scz!4v1677601551458!5m2!1scs!2scz" width="100%" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Col>
        </Row>
        </Fade>
      </Container>
    </footer>
  )
}

export default Footer
