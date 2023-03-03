import React from 'react'
import "./Services.css"
import Heading from './Heading';
import {Link} from "react-router-dom"
import { Row, Container, Col } from 'react-bootstrap';
import Button from './Button';
import { FaBars } from 'react-icons/fa';
import LinkButton from './LinkButton';
import Data from './Data'
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
                <img src={icon} className='service-icon mb-3'></img>
                <h3>{title}</h3>
                <p className='clear'>{text}</p>
                <Button text="View more"  href={`/all-services/${oneService.id}`} />

                </div>
                
            </Col>
           })
        }
        
        </Row>
        
        </Container>
        
    </div>
}

export default Services
