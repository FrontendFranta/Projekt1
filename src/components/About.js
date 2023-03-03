import React from 'react'
import Heading from './Heading'
import { Row, Container, Col, Card } from 'react-bootstrap';
import Button from './Button';
import "./About.css"
import img1 from "../images/about-img.webp"

const About = () => {
  return (
    <div className='py-5 bg-light' id='about'>
      <Heading text='about' text2='about us'></Heading>
      <Card>
        <Row className='g-0 align-items-center h-100 muted'>
          
          <Col lg={6}>
            <img src={img1} className='about-img'></img>
          </Col>
          <Col lg={6}>
            <div className='p-5'>
            <h2 className='mb-3'>WE ARE A BIG COMPANY</h2>
        <p className='mb-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <Button href='#projects' text='Check our Projects'></Button>
            </div>
          </Col>
        </Row>
       </Card>
    </div>
  )
}

export default About
