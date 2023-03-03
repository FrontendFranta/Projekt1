import React from 'react'
import "./Header.css"
import { Row, Container, Col, Card } from 'react-bootstrap';
import Button from './Button';
import img1 from "../images/ft-bg.webp"

const Header = () => {
  return (
    <header>
       <Card>
        <Row className='g-0 align-items-center h-100 muted'>
          <Col lg={6}>
            <img src={img1}></img>
          </Col>
          <Col lg={6}>
            <div className='header-content p-5'>
              <span className='sub-heading mb-5'>Welcome</span>
            <h1 className='mb-3'>WE ARE CONSTRUCTED</h1>
        <p className='mb-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <Button text='See our Services' href='#services'></Button>
            </div>
          </Col>
        </Row>
       </Card>
    </header>
  )
}

export default Header
