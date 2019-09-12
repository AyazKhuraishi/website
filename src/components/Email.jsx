import React from 'react'
import PropTypes from 'prop-types'

export default class Email extends React.Component {
  static propTypes = {
    prefix: PropTypes.string.isRequired,
    suffix: PropTypes.string.isRequired
  }

  reverse (str) {
    return str.split('').reverse().join('')
  }

  render () {
    const prefix = this.reverse(this.props.prefix)
    const suffix = this.reverse(this.props.suffix)

    return (
      <b
        className={'email'}
        data-prefix={prefix}
        data-suffix={suffix}
      />
    )
  }
}
