import React from 'react'
import Home from './Components/Home'
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Experience />
      {/* <Education /> */}
      <Projects />
      <Footer />
    </>
  )
}

export default App
