import React, { Component } from 'react'
import { dispatcher, emit } from 'utils/dispatcher'
import { lang, i18n } from '../lang'

import LangButton from 'components/LangButton'
import Divider from 'components/Divider'

// Sections
import Hero from 'sections/Hero'
import About from 'sections/About'
import Skills from 'sections/Skills'
import Projects from 'sections/Projects'
import Contact from 'sections/Contact'
import Footer from 'sections/Footer'

// Globals
global.lang = lang // Lang files
global.i18n = i18n // Translation function

export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lowWidth: window.innerWidth < 770,
      measuring: false
    }
  }

  globalClickHandler (e) {
    // Closes any open dialogs when a non-button element is clicked (Improves UX)
    const targetIsButton = e.target.dataset.button
    if (!targetIsButton) emit('CLOSE_ANY_OPEN_DIALOG')
  }

  componentDidMount () {
    const checkIfLowWidth = () => window.innerWidth < 770

    dispatcher.on('LANG_SELECT', () => this.forceUpdate())

    // Initial check if property is not set
    if (!window.lowWidth) {
      const isLowWidth = checkIfLowWidth()
      window.lowWidth = isLowWidth
      emit('WIDTH_CHANGE', isLowWidth)
      this.setState({ lowWidth: isLowWidth })
    }

    window.addEventListener('resize', () => {
      if (!this.state.measuring) {
        this.setState({ measuring: true }, () => {
          const isLowWidth = checkIfLowWidth()
          window.lowWidth = isLowWidth

          if (isLowWidth !== this.state.lowWidth) {
            this.setState({ lowWidth: isLowWidth })
            emit('WIDTH_CHANGE', isLowWidth)
          }

          setTimeout(() => this.setState({ measuring: false }), 250) // Lowers congestion on resize
        })
      }
    })
  }

  render () {
    return (
      <div onClick={this.globalClickHandler}>
        <LangButton/>
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
