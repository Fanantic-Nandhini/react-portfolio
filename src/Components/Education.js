import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Education.css'

const Eduction = () => {
  return (
    <div className="edu">
      <Container>
        <Row>
          <Col lg="4" sm="12" md="6" className="edu__title">Education</Col>
          <Col lg="8" sm="12" md="6" className="edu__content">
          <p className="exp__highlight">Ramco Institute of Technology <p className="exp__high">Bachelor of Engineering in Computer Science</p></p>
            <p>July 2014 - Apr 2018</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Eduction
