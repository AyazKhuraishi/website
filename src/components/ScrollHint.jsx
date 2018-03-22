// Scroll hint button
import React from 'react'
import scrollIntoView from 'scroll-into-view'

export default class ScrollHint extends React.Component {
  constructor (props) {
    super(props)
    this.state = { animationDone: false, hover: false, scrolled: false }
    this.toggleHover = this.toggleHover.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  toggleHover () {
    this.setState({ hover: !this.state.hover })
  }

  handleClick () {
    let about = window.i18n`navbar.items`.map(i => i.href)[1].substring(1)
    scrollIntoView(document.getElementById(about))
  }

  handleScroll () {
    if (this.state.scrolled && window.pageYOffset === 0) this.setState({ scrolled: false })
    else if (!this.state.scrolled) this.setState({ scrolled: true })
  }

  render () {
    window.onscroll = () => { this.handleScroll() }
    setTimeout(() => { this.setState({ animationDone: true }) }, 3500)

    // Animation clarified:
    // When page is scrolled, hide and keep arrow hidden
    // When initial animation is done, slide the arrow in, before that keep it hidden
    return (
      <div
        className={`
          scroll-hint
          ${this.state.scrolled ? 'hidden hide' : ''}
          ${this.state.animationDone ? 'show' : 'hidden'}
        `}
        id={'scroll-hint'}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <div
          className={`hint-content ${this.state.hover ? 'pulse' : ''}`}
          onClick={this.handleClick}
        >
          <i className={'fas fa-angle-down'}/>
        </div>
      </div>
    )
  }
}
