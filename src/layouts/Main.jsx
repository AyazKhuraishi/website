// Application layout
import React from 'react'

// Misc components
import Navbar from '../components/Navbar'
import LangButton from '../components/LangButton'
import MenuButton from '../components/MenuButton'
import Divider from '../components/Divider'

// Sections
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default class Main extends React.Component {
  render () {
    return (
      <div>
        <LangButton/>
        <MenuButton/>
        <Navbar/>
        <Hero/>
        <About/>
        <Divider/>
        <Skills/>
        <Divider/>
        <Projects/>
        <Divider/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}
