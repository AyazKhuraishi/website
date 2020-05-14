// Hero section (Top of page)
import React, { Component } from 'react'
import Console from '../Console'
import i18n from 'lang'
import { dispatcher } from 'utils/dispatcher'

export default class Hero extends Component {
  constructor (props) {
    super(props)
    this.state = {
      typing: !window.lowWidth,
      typingEnabled: !window.lowWidth
    }
  }

  componentDidMount () {
    dispatcher.on('WIDTH_CHANGE', isLowWidth => this.setState({ typingEnabled: !isLowWidth }))
    dispatcher.on('LANG_SELECT', () => {
      this.setState({ typingEnabled: false }, () => {
        this.setState({ typingEnabled: true })
      })
    })
  }

  render () {
    const styles = {
      titleOverrides: {
        fontSize: '105px'
      }
    }

    return (
      <div className='hero banner is-fullheight'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <h1 className='large-title' style={this.state.typingEnabled ? {} : styles.titleOverrides}>Linus Willner</h1>
            {
              this.state.typingEnabled
                ? <Console/>
                : <div className='subtitle-lowwidth'><h2>{i18n`hero.typingTextLowWidth`}</h2></div>
            }
          </div>
        </div>
      </div>
    )
  }
}
