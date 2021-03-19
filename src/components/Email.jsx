import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CopyToClipboard from 'react-copy-to-clipboard'

export default class Email extends Component {
  static propTypes = {
    prefix: PropTypes.string.isRequired,
    suffix: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    this.state = { copied: false }
  }

  reverse (str) {
    return str.split('').reverse().join('')
  }

  flashCopied = () => {
    this.setState({ copied: true })
    setTimeout(() => this.setState({ copied: false }), 1000)
  }

  render () {
    const prefix = this.reverse(this.props.prefix)
    const suffix = this.reverse(this.props.suffix)

    return (
      <span className='has-tooltip-left' data-tooltip={this.state.copied ? 'Copied to clipboard!' : 'Click to copy...'}>
        <CopyToClipboard
          text={`${this.props.prefix}@${this.props.suffix}`}
          onCopy={this.flashCopied}
        >
          <b
            className={this.state.copied ? 'email copied' : 'email'}
            data-prefix={prefix}
            data-suffix={suffix}
          />
        </CopyToClipboard>
      </span>
    )
  }
}
