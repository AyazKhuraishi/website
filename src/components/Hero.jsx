// Hero section (Top of page)
import React from 'react'
import Typist from 'react-typist'
import { config } from '../config'

export default class Hero extends React.Component {
  constructor (props) {
    super(props)
    this.state = { typing: true }
    this.typingDone = this.typingDone.bind(this)
  }

  typingDone () {
    setTimeout(() => {
      this.setState({ typing: false }, () => { this.setState({ typing: true }) })
    }, config.hero.typingDelay)
  }

  render () {
    const texts = config.hero.typingTexts
    const delay = config.hero.typingDelay

    return (
      <div className={'hero banner is-fullheight'} id={'home'}>
        <div className={'hero-body'}>
          <div className={'container has-text-centered'}>
            <h1 className={'large-title'}>Linus Willner</h1>
            {
              this.state.typing
                ? <Typist
                  className={'subtitle-typing'}
                  avgTypingDelay={90}
                  stdTypingDelay={0}
                  startDelay={1000}
                  cursor={{
                    element: '█'
                  }}
                  onTypingDone={this.typingDone}
                >
                  echo "{texts[0]}"
                  <Typist.Backspace count={texts[0].length + 1} delay={delay} /> {/* Adding 1 character to remove quote */}
                  {texts[1]}"
                  <Typist.Backspace count={texts[1].length + 1} delay={delay} />
                  {texts[2]}"
                  <Typist.Backspace count={texts[2].length + 1} delay={delay} />
                  {texts[3]}"
                  <Typist.Backspace count={texts[3].length + 8} delay={delay} /> {/* Adding 8 characters due to echo "thing" */}
                </Typist>
                : ''
            }
          </div>
        </div>
      </div>
    )
  }
}
