import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Achievements from './components/achievements/Achievements'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Achievements/>
        <Skills/>
        <Contacts/>
        <Footer/>

    </>
  )
}

export default App