import React from 'react'
import "./Land.css"
import { Row, Container, Col, Card } from 'react-bootstrap';
const Landing = (props) => {
  return (
    <div className='py-5 land-img'>
      <Container className='h-100'>
        <Row className='h-100 align-items-center text-center'>
            <Col lg={12}>
                <div className='land-content text-white'>
            <h1>{props.mainTitle}</h1>
            </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Landing
