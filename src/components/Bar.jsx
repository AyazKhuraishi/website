// Progress bar
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Progress } from 'react-sweet-progress'

export default class Bar extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    className: PropTypes.string,
    icon: PropTypes.oneOfType([
      PropTypes.node.isRequired,
      PropTypes.string.isRequired
    ])
  }

  render () {
    const theme = {
      success: {
        symbol: this.props.icon,
        color: '#06347C'
      }
    }

    return (
      <span>
        <p>{this.props.text}</p>
        <Progress
          percent={this.props.progress}
          status={'success'}
          className={'bar'}
          symbolClassName={`bar-icon ${this.props.className || ''}`}
          theme={theme}
        />
      </span>
    )
  }
}
