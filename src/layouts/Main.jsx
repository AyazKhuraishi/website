// Application layout
import React from 'react'

// Backend
import { dispatcher, emitOne } from '../backend/dispatcher'
import { lang, i18n } from '../lang/lang'

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

// Globals
global.lang = lang // Lang files
global.i18n = i18n // Translation function

export default class Main extends React.Component {
  globalClickHandler (e) {
    let targetIsButton = e.target.dataset.button
    if (!targetIsButton) emitOne('CLOSE_ANY_OPEN_DIALOG')
  }

  render () {
    dispatcher.once('LANG_SELECT', () => {
      this.forceUpdate()
    })

    return (
      <div onClick={this.globalClickHandler}>
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
