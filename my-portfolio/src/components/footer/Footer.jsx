import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>ANUSHKA</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/singh-anushka7/"><BsLinkedin/></a>
          <a href="https://github.com/Nush7"><BsGithub/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Anushka Singh. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer