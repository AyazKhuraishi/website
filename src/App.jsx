// Main renderer
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Main from './layouts/Main'

// CSS
import 'react-vertical-timeline-component/style.min.css'
import './assets/scss/main.scss'

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false,
      error: null
    }
  }

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  static getDerivedStateFromError (error) {
    return { hasError: true, error }
  }

  reverse = str => str.split('').reverse().join('')

  componentDidCatch = (error, info) => console.error(error, info)

  render () {
    if (this.state.hasError) {
      return (
        <div className='noscript-container'>
          <h2>Whoops, something went wrong.</h2>
          <p>
            It'd be cool if you could report this to me so I can fix it.
            My email is <b className='email' data-prefix={this.reverse('hello')} data-suffix={this.reverse('linuswillner.me')}/>.
          </p>
          <p>Below is also a description of the error that caused this screen to appear.</p>
          <p>Please attach this in your email as well. Thank you!</p>
          <p>{this.state.error}</p>
        </div>
      )
    }

    return this.props.children
  }
}

export default class App extends Component {
  render () {
    return (
      <ErrorBoundary>
        <Main/>
      </ErrorBoundary>
    )
  }
}
