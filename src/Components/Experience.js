import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import ramco from '../Images/ramco-systems.jpg'
import './Experience.css'

const Experience = () => {
  return (
    <div className="exp">
      <h1 className="exp__title"><span className="exp__desc">💼 Experience</span></h1>
      <div className="exp__descp" data-aos="fade-down">
        <h4>Ramco Systems</h4>
        <br />
        <h5>Frontend Developer, Sep 2018 - Present</h5>
        <Container className="exp__explain">
          <Row>
            <Col xs="12" sm="12" md="6" lg="6">
              <div className="exp-left">
                <img className="ramco-img" src={ramco} alt="ramco-image" />
                <br/>
                <p>Ramco Systems - Chennai</p>
              </div>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6">
              <div className="exp_description">
                <p><span className="title-block">Client</span> : LBC Express, Phillippiness &nbsp;
                  <a href="https://www.lbcexpress.com" target="__blank">View official website of LBC Express</a></p>
                <p><span className="title-block">Role</span> : FrontEnd Developer</p>
                <p><span className="title-block"> Tech Stacks</span> : ReactJS, Redux, NodeJS, Koa, Knex, Postgresql, GIT, Docker, Jenkins</p>
                <h6><span className="title-block">Project Description</span> : LBC Express is the largest Express Courier, Cargo, and Money 
                Remittance service company in Philippines that will send over parcels across the globe.
                Developed the web application platform for LBC Express to create bookings for the goods by the 
                respective admin and send over the parcels across multiple countries. 
                Initiating trips, generating cash receipt details, are the highlighted features in the product.
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Experience
