import React from 'react'
import PropTypes from 'prop-types'
import { Progress } from 'react-sweet-progress'

export default class Bar extends React.Component {
  render () {
    return (
      <span>
        <p>{this.props.text}</p>
        <Progress
          percent={this.props.progress}
          status={'success'}
          className={'bar'}
          symbolClassName={'bar-icon'}
          theme={{
            success: {
              symbol: this.props.icon,
              color: '#06347C'
            }
          }}
        />
      </span>
    )
  }
}

Bar.propTypes = {
  text: PropTypes.string,
  progress: PropTypes.number,
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ])
}
