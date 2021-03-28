import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <div className="top">
          <span>Designed & Developed by</span>
        </div>
        <div className="bottom">
          <span>Nandhini © 2020 ✌ </span>
        </div>  
      </div>
      <div className="footer__links">
        <span className="text"><a href="mailto:nandhinichidambaram97@gmail.com" target="_blank">E-Mail</a></span>
        <span className="text"><a href="https://www.linkedin.com/in/nandhini-chidambaram/" target="_blank">LinkedIn</a></span>
        <span className="text"><a href="https://medium.com/@nandhini-chidambaram" target="_blank">Medium</a></span>
        <span className="text"><a href="https://github.com/Fanantic-Nandhini" target="_blank">Github</a></span>
      </div>
    </footer>
  )
}

export default Footer
