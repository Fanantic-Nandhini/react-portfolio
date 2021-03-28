import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Experience.css'

const Experience = () => {
  return (
    <div className="exp">
      <Container>
        <Row>
          <Col lg="4" sm="12" md="6" className="exp__title">Experience</Col>
          <Col lg="8" sm="12" md="6" className="exp__content">
            <p className="exp__highlight">Ramco Systems <p className="exp__high">Analyst Programmer</p></p>
            <p>Sep 2018 - Current</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Experience
