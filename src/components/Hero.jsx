import React from 'react'
import Typist from 'react-typist'

const typingTexts = [
  'Student',
  'Tech geek',
  'Freelance developer',
  'Aspiring software engineer'
]

const typingDelay = 1000

export default class Hero extends React.Component {
  constructor (props) {
    super(props)
    this.state = { typing: true }
    this.typingDone = this.typingDone.bind(this)
  }

  typingDone () {
    setTimeout(() => {
      this.setState({ typing: false }, () => { this.setState({ typing: true }) })
    }, typingDelay)
  }

  render () {
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
                  {typingTexts[0]}
                  <Typist.Backspace count={typingTexts[0].length} delay={typingDelay} />
                  {typingTexts[1]}
                  <Typist.Backspace count={typingTexts[1].length} delay={typingDelay} />
                  {typingTexts[2]}
                  <Typist.Backspace count={typingTexts[2].length} delay={typingDelay} />
                  {typingTexts[3]}
                  <Typist.Backspace count={typingTexts[3].length} delay={typingDelay} />
                </Typist>
                : ''
            }
          </div>
        </div>
      </div>
    )
  }
}
