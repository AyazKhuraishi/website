import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from './Links'

export class ProjectButton extends Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'github',
      'npm',
      'website'
    ]).isRequired,
    link: PropTypes.string.isRequired
  }

  getButtonIcon = () => {
    switch (this.props.type) {
      case 'github':
        return {
          color: '#302F2F',
          icon: 'cib-github'
        }
      case 'npm':
        return {
          color: '#EA2039',
          icon: 'cib-npm'
        }
      case 'website':
        return {
          color: '',
          icon: 'cil-globe-alt'
        }
    }
  }

  render () {
    const { color, icon } = this.getButtonIcon()

    return (
      <Link noDefaultStyle className='project-button' to={this.props.link}>
        <span className='icon'>
          <i className={icon} style={{ color }}/>
        </span>
      </Link>
    )
  }
}
