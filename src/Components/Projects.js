import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import crazybalc from '../Images/crazyBlackFactory.png';
import lbc from '../Images/lbc.png'
import dev from '../Images/dev.png'
import portfolio from '../Images/portfolio.png'
import amazon from '../Images/amazon.png'
import ProjectList from './ProjectList';
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects__title"><span className="projects__desc"> 📁 Recent projects</span></h1>
      <div className="projects__list">
        <Container>
          <Row>
            <Col sm="12" md="6">
              <ProjectList
              src = {lbc}
              client = 'LBC Express - Philippines'
              role = 'Frontend Developer'
              title = 'A full stack web application - MERN Stack'
              detailDescription = 'Ramco Offline Application - This project lets the admin to create bookings for the parcels which is to be delivered to the specified destination location. The admin can able to track the parcels and also can generate cash receipt details for the particular customer. It also provides offers for the payment, based on the customer preferences.'
              technologyStack = {['Reactjs', 'Redux', 'Nodejs', 'RESTAPI', 'Postgresql', 'Docker']}
              githubLink = ''
              visitSiteLink = '' 
              />
            </Col>
            <Col sm="12" md="6">
              <ProjectList
              src = {crazybalc}
              title = 'A full stack e-commerce application - MERN Stack'
              loginEmail = 'sample@gmail.com'
              loginPassword = '123'
              detailDescription = 'Full stack e-commerce application lets you to buy things on vast selection of products. The user can create their own account and can able to purchase products on this website. The payments can be done with necessary information provided.'
              technologyStack = {['Reactjs', 'Nodejs', 'MongoDB', 'RESTAPI', 'Bootstrap', 'Paypal']}
              githubLink = 'https://github.com/Fanantic-Nandhini/crazyblackfactory'
              visitSiteLink = 'https://crazyblackfactory.herokuapp.com' />
            </Col>
          </Row>
          <Row className="project__row">
            <Col sm="12" md="6">
              <ProjectList
              src = {dev}
              title = 'A full stack web application - MERN Stack'
              loginEmail = 'example@gmail.com'
              loginPassword = 'abc123'
              detailDescription = 'A complete developers portfolio website who can create their account and share their innovations and ideas to the world.'
              technologyStack = {['Reactjs', 'Nodejs', 'MongoDB', 'RESTAPI', 'Bootstrap']}
              githubLink = 'https://github.com/Fanantic-Nandhini/devconnector/tree/master'
              visitSiteLink = 'https://developer-connections.herokuapp.com' />
            </Col>
            <Col sm="12" md="6">
              <ProjectList
              src = {portfolio}
              title = 'My Portfolio - ReactJS '
              detailDescription = 'Created my own portfolio using ReactJS. I have included all my bio and project details with github links provided.'
              technologyStack = {['Reactjs']}
              githubLink = 'https://crazyblackfactory.herokuapp.com/'
              visitSiteLink = 'https://crazyblackfactory.herokuapp.com/' />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Projects;