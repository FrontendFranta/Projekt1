import React from 'react'
import { Form,  Container, Row, Col } from "react-bootstrap";
import Button from './Button';
import "./Land.css"
import { FaGithub, FaInstagram} from 'react-icons/fa';
import img1 from "../images/ft-img.webp"
import Fade from 'react-reveal/Fade';

const Formular = () => {
  return (
    <div className='py-5'>
      <Container>
        <Fade left>
        <Row className='justify-content-between'>
            <Col lg={6}>
            <Form>

      <Form.Group controlId="formBasicName" className='mb-4'>
        <Form.Label>Vaše jméno</Form.Label>
        <Form.Control type="text" placeholder="Pepa Pepík" required />
      </Form.Group>

      <Form.Group controlId="formBasicEmail"  className='mb-4'>
        <Form.Label>Vaše emailová adresa</Form.Label>
        <Form.Control type="email" placeholder="Pepap@gmailc.om" required/>
      </Form.Group>

      <Form.Group controlId="formBasicMessage"  className='mb-4'>
        <Form.Label>Zpráva</Form.Label>
        <Form.Control as="textarea" rows={5} required placeholder="Mám dotaz ohledně ...." />
      </Form.Group>

      <button className='category-button' type='sumbit'>Odeslat</button>
    </Form>
            </Col>
            <Col lg={5}>
              <div className='contant-content'>
              <img src={img1} className='contact-image mb-3'></img>
              <h2>Ing. Rob Clark</h2>
              <p className='mb-3'>Im manager. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum</p>
             <a href='https://Github.com'><FaGithub className='ft-ic mn'></FaGithub></a>
             <a href='https://Instagram.com'><FaInstagram className='ft-ic mn'></FaInstagram></a>
              </div>

            </Col>
        </Row>
        </Fade>
      </Container>
    </div>
  )
}

export default Formular
