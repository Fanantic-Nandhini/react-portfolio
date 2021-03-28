import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './About.css'

const About = () => {
  return (
    <div className="about">
      <Container>
        <Row>
          <Col lg="4" sm="12" className="about__title">About me</Col>
          <Col lg="8" sm="12" className="about__content">
            <p>I'm currently an Analyst Programmer at <span className="about__highlight">Ramco Systems</span>, having 2.7+ years experience in building a full stack application platform for LBC Express along with awesome people. I was graduated from <span className="about__highlight">Ramco Institute of Technology, B.E(C.S.E) - 2014 to 2018, Rajapalayam. </span></p>
            <p>As a software engineer, I enjoy building things using latest web technologies around me. I have experience in developing and designing web application, with efficient and modern backends. I have been coding for almost 2+ years now and I have a strong interest in developing the web apps and solving conceptual and analytical problems. I am an enthusiastic learner, and believe that learning grows by sharing. I love exploring and experimenting new technologies. </p>
            <p>I also write articles on medium about the technologies and the toughest problems which I have solved during the development</p>
            <p>When I'm not coding or pushing pixels, I'm probably reading, travelling or crossing off another item on my wish list.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
