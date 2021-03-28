import React from 'react'
import Pdf from '../pdf/nandhini.pdf'
import './Home.css'

const Home = () => {
  return (
    <header className="intro">
      <h1 className="intro__hello">Hello, World! 👋</h1>
      <h2 className="intro__tagline">I'm <span className="name">Nandhini Chidambaram </span>, 
        a full stack web developer, creating awesome and effective webapps
        in bringing life to the products. <span className="intro__tagbg"></span>
      </h2>
      <h3 className="intro__contact">
        Get in touch &nbsp;<span>👉&nbsp;</span><span> <a href="mailto:nandhinichidambaram97@gmail.com" target="_blank">nandhinichidambaram97@gmail.com</a></span>
      </h3>
      {/* <a href={Pdf} target="_blank"> <h6 className="intro__resume">View My Resume &nbsp;➡</h6></a> */}
      <h6 className="intro__resume">
        View My Resume <a href={Pdf} target="_blank" className="intro__resume">&nbsp;➡</a>
      </h6>
    </header>
  )
}
     
export default Home
