import React from 'react'
import Navigation from './Navigation'
import { useParams } from 'react-router-dom'
import services from './Data'
import { Row, Container, Col } from 'react-bootstrap';

import "./Services.css"
const OneService = () => {
    const {serviceId} = useParams()
    console.log(serviceId);
    const oneSpecificService = services.find((service)=>{
        return service.id === parseInt(serviceId)
    })
    
    if (!oneSpecificService){
        return <div>Service not found</div>
    }
    
    const { icon, title, text, text2 } = oneSpecificService
  return (
   <>
  <Navigation/>
  <div className='py-5'>
    <Container>
        <Row className='align-items-center justify-content-center'>
            
            <Col lg={8}>
                
            <img src={icon} className='mb-3 w-25 border-img'></img>  
           
   <h2>{title}</h2>
   <p>{text}</p>
   <p>{text2}</p>
            </Col>
        </Row>
  
   </Container>
   </div>
 
   </>
  )
}

export default OneService
