import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {FaLaptopCode} from 'react-icons/fa'
import {FaTrophy} from 'react-icons/fa'
import {BsBriefcase} from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'




const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
    
    <nav>
      
       <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
       <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><BiUser/></a>
       <a href="#achievements" onClick={() => setActiveNav('#achievements')} className={activeNav === '#achievements' ? 'active': ''}><FaTrophy/></a>
       <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active': ''}><FaLaptopCode/></a>
       <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BsBriefcase/></a>
       <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active': ''}><BiMessageSquareDetail/></a>
      
    </nav>
  )
}

export default Nav