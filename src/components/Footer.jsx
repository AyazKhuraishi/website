// Footer section
import React from 'react'
import PropTypes from 'prop-types'

class Link extends React.Component {
  constructor (props) {
    super(props)
    this.determineClassName = this.determineClassName.bind(this)
    this.determineLink = this.determineLink.bind(this)
  }

  determineClassName () {
    switch (this.props.type) {
      case 'react':
        return 'react-link'
      case 'sass':
        return 'sass-link'
      case 'bulma':
        return 'bulma-link'
    }
  }

  determineLink () {
    switch (this.props.type) {
      case 'react':
        return 'https://reactjs.org'
      case 'sass':
        return 'http://sass-lang.com'
      case 'bulma':
        return 'https://bulma.io'
    }
  }

  render () {
    return (
      <a
        className={this.determineClassName()}
        href={this.determineLink()}
        target={'_blank'}
      >
        {this.props.children}
      </a>
    )
  }
}

export default class Footer extends React.Component {
  render () {
    return (
      <footer className={'footer page-footer'}>
        <div className={'container'}>
          <div className={'footer-text section-text'}>
            <p>Copyright (c) 2018 Linus Willner. All rights reserved.</p>
            <p>Achieved with <Link type={'react'}>React</Link>, <Link type={'sass'}>Sass</Link> and <Link type={'bulma'}>Bulma</Link>. Engineered with ❤️ in Loviisa, Finland.</p>
          </div>
        </div>
      </footer>
    )
  }
}

Link.propTypes = {
  type: PropTypes.string.isRequired
}
