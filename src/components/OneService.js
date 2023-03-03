import React from 'react'
import Navigation from './Navigation'
import { useParams } from 'react-router-dom'
import services from './Data'
import { Row, Container, Col } from 'react-bootstrap';
import Footer from './Footer';
const OneService = () => {
    const {serviceId} = useParams()

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
        <Row className='align-items-center justify-content-between'>
            <Col lg={3}>
            <img src={icon} className=' mb-3'></img>
            </Col>
            <Col lg={8}>
                
   <h2>{title}</h2>
   <p>{text}</p>
   <p>{text2}</p>
            </Col>
        </Row>
  
   </Container>
   </div>
   <Footer></Footer>
   </>
  )
}

export default OneService
