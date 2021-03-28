import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills">
      <Container>
        <Row>
          <Col lg="4" sm="12" className="skills__title">
            skills
          </Col>
          <Col lg="2" sm="3" xs="6">
            <span className="skills__heading">Front end</span>
            <div className="skills__content">
              <p>JavaScript <img src="https://img.icons8.com/color/javascript.png" alt="javascript-icon" className="skills__img"></img></p>
              <p>ReactJS <img src="https://img.icons8.com/dusk/react.png" alt="react-icon" className="skills__img"></img></p>
              <p>Redux <img src="https://img.icons8.com/color/redux.png" alt="redux-icon" className="skills__img"></img></p>
              <p>Bootstrap <img src="https://img.icons8.com/color/bootstrap.png" alt="bootstrap-icon" className="skills__img"></img></p>
              <p>HTML <img src="https://img.icons8.com/color/html-5.png" alt="html-icon" className="skills__img"></img></p>
              <p>CSS <img src="https://img.icons8.com/color/css3.png" alt="css-icon" className="skills__img"></img></p>
            </div>
          </Col>
          <Col lg="2" sm="3" xs="6">
            <span className="skills__heading">Back end</span>
            <div className="skills__content">
              <p>REST API <img src="https://img.icons8.com/dusk/api-settings.png" alt="node-icon" className="skills__img"></img></p>
              <p>NodeJS <img src="https://img.icons8.com/color/nodejs.png" alt="node-icon" className="skills__img"></img></p>
              <p>SQL <img src="https://img.icons8.com/color/microsoft-sql-server.png" alt="sql-icon" className="skills__img"></img></p>
              <p>Postgres <img src="https://img.icons8.com/color/postgreesql.png" alt="postgres-icon" className="skills__img"></img></p>
              <p>MongoDB <img src="https://img.icons8.com/color/mongodb.png" alt="mongo-icon" className="skills__img"></img></p>
            </div>
          </Col>
          <Col lg="2" sm="3" xs="6">
            <span className="skills__heading">Tools</span>
            <div className="skills__content">
              <p>Git & Github <img src="https://img.icons8.com/color/git.png" alt="firebase-icon" className="skills__img"></img></p>
              <p>CI & CD <img src="https://img.icons8.com/color/travis-ci.png" alt="cicd-icon" className="skills__img"></img></p>
              <p>Jenkins <img src="https://img.icons8.com/color/jenkins.png" alt="jenkins-icon" className="skills__img"></img></p>
              <p>Postman <img src="https://img.icons8.com/color/postman.png" alt="postman-icon" className="skills__img"></img></p>
              <p>Visual Studio <img src="https://img.icons8.com/color/visual-studio.png" alt="postman-icon" className="skills__img"></img></p>
            </div>
          </Col>
          <Col lg="2" sm="3" xs="6">
            <span className="skills__heading">Frameworks</span>
            <div className="skills__content">
              <p>ExpressJS </p>
              <p>Koa </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Skills
