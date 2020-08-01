import React, { Component } from 'react'
import { dispatcher, emit } from 'utils/dispatcher'

import LangButton from 'components/LangButton'
import ContentPointer from 'components/ContentPointer'
import Divider from 'components/Divider'

// Sections
import Hero from 'sections/Hero'
import About from 'sections/About'
import Experience from 'sections/Experience'
import Skills from 'sections/Skills'
import Projects from 'sections/Projects'
import Contact from 'sections/Contact'
import Footer from 'sections/Footer'

export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lowWidth: window.innerWidth < 1030
    }
  }

  globalClickHandler (e) {
    // Closes any open dialogs when a non-button element is clicked (Improves UX)
    const targetIsButton = e.target.dataset.button
    if (!targetIsButton) emit('CLOSE_ANY_OPEN_DIALOG')
  }

  componentDidMount () {
    const checkIfLowWidth = () => window.innerWidth < 1030

    dispatcher.on('LANG_SELECT', () => this.forceUpdate())

    // Initial check if property is not set
    if (!window.lowWidth) {
      const isLowWidth = checkIfLowWidth()
      window.lowWidth = isLowWidth
      emit('WIDTH_CHANGE', isLowWidth)
      this.setState({ lowWidth: isLowWidth })
    }

    window.addEventListener('resize', () => {
      const isLowWidth = checkIfLowWidth()
      window.lowWidth = isLowWidth

      if (isLowWidth !== this.state.lowWidth) {
        this.setState({ lowWidth: isLowWidth })
        emit('WIDTH_CHANGE', isLowWidth)
      }
    })
  }

  render () {
    return (
      <div onClick={this.globalClickHandler}>
        <LangButton/>
        <ContentPointer/>
        <Hero/>
        <About/>
        <Divider/>
        <Experience/>
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
