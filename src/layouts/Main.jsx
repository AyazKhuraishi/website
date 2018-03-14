import React from 'react'

// Misc components
import Navbar from '../components/Navbar'
import MenuButton from '../components/MenuButton'
import Divider from '../components/Divider'

// Sections
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'

export default class Main extends React.Component {
  render () {
    return (
      <div>
        <MenuButton/>
        <Navbar/>
        <Hero/>
        <About/>
        <Divider/>
        <Skills/>
        <Experience/>
      </div>
    )
  }
}
