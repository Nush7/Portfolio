import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/thakshila-bandara-2791b9214" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/Thakshila-Bandara" target="_blank" rel='noreferrer'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials