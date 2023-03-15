import React from 'react'
import "./Services.css"
import Heading from './Heading';
import {Link} from "react-router-dom"
import { Row, Container, Col } from 'react-bootstrap';
import Button from './Button';
import LinkButton from './LinkButton';
import Data from './Data'
import Fade from 'react-reveal/Fade';
const Services = () => {
  return <div className='py-5' id='services'>
    <Heading text='services'text2='Our services'></Heading>
    <Container>
      <Row>
      {
           Data.map( (oneService) => {
            const {id, icon, title, text } = oneService


            return <Col lg={4} key={id} className='py-2'>
            
              <div className='serviceBox p-5'>
              <Fade bottom>
                <img src={icon} className='service-icon mb-3'></img>
                <h3>{title}</h3>
                <p className='clear'>{text}</p>
                <Link to={`/all-services/${oneService.id}`}>
  <Button text="View more" />
</Link>
                </Fade>
                </div>
               
            </Col>
           })
        }
        
        </Row>
        
        </Container>
        
    </div>
}

export default Services
