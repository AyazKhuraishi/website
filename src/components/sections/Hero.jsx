// Hero section (Top of page)
import React, { Component } from 'react'
import Typist from 'react-typist-repacked'
import config from 'config'
import i18n from 'lang'
import { dispatcher } from 'utils/dispatcher'

export default class Hero extends Component {
  constructor (props) {
    super(props)
    this.state = {
      typing: !window.lowWidth,
      typingEnabled: !window.lowWidth
    }
    this.typingDone = this.typingDone.bind(this)
    this.generateContent = this.generateContent.bind(this)
  }

  typingDone () {
    setTimeout(() => {
      this.setState({ typing: false }, () => { this.setState({ typing: true }) })
    }, config.hero.typingDelay)
  }

  generateContent () {
    if (this.state.typingEnabled && this.state.typing) {
      const texts = window.i18n`hero.typingTexts`
      const delay = config.hero.typingDelay

      return (
        <Typist
          className={'subtitle-typing'}
          avgTypingDelay={90}
          stdTypingDelay={0}
          startDelay={1000}
          cursor={{ element: '█' }}
          onTypingDone={this.typingDone}
        >
          echo "{texts[0]}"
          <Typist.Backspace count={texts[0].length + 1} delay={delay} />
          {texts[1]}"
          <Typist.Backspace count={texts[1].length + 1} delay={delay} />
          {texts[2]}"
          <Typist.Backspace count={texts[2].length + 1} delay={delay} />
          {texts[3]}"
          <Typist.Backspace count={texts[3].length + 8} delay={delay} />
        </Typist>
      )
    } else return <h2 className={'subtitle-lowwidth'}>{window.i18n`hero.typingTextLowWidth`}</h2>
  }

  componentDidMount () {
    dispatcher.on('WIDTH_CHANGE', isLowWidth => this.setState({ typingEnabled: !isLowWidth }))
  }

  render () {
    return (
      <div className={'hero banner is-fullheight'} id={'home'}>
        <div className={'hero-body'}>
          <div className={'container has-text-centered'}>
            <h1 className={'large-title'}>Linus Willner</h1>
            {this.generateContent()}
          </div>
        </div>
      </div>
    )
  }
}
