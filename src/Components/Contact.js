import React from 'react'
import { Row, Col, Container, Button } from 'reactstrap';
import Pdf from '../pdf/nandhini.pdf'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact__title"><span className="contact__desc">Get in touch</span></h1>
      <div className="contact__list">
        <Container>
          <Row>
            <Col xs="12" sm="4" lg="4">
              <p className="contact_details_1">Nandhini Chidambaram</p>
              <div className="contact_icons">
                <img src="https://img.icons8.com/dusk/worldwide-location.png" className="contact__img"/>
                <p className="contact_details_2">5th main road, Vijayanagar, Velachery, Chennai - 600042</p>
              </div>
              <div className="contact_icons">
                <img src="https://img.icons8.com/fluent/2x/ringing-phone.png" className="contact__img"/>
                <p className="contact_details_2">+91 6385518415</p>              
              </div>
              <div className="contact_icons">
                <img src="https://img.icons8.com/dusk/2x/gmail-login.png" className="contact__img"/>
                <p className="contact_details_2">nandhinichidambaram97@gmail.com</p>       
              </div>
            </Col>
            <Col xs="12" sm="4" lg="4"></Col>
            <Col xs="12" sm="4" lg="4">
            <h6 className="contact__resume">
              <a href={Pdf} target="_blank">⬇&nbsp;</a>Download Resume 
            </h6>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Contact