import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from './Links'

export class GitHubButton extends Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
    centerFix: PropTypes.any // No value required
  }

  render () {
    return (
      <Link className={`button ${this.props.centerFix ? 'center-fix' : ''}`} to={this.props.link}>
        <span className={'icon'}>
          <i className={'fab fa-github'}></i>
        </span>
        <span>GitHub</span>
      </Link>
    )
  }
}

export class WebsiteButton extends Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
    centerFix: PropTypes.any // No value required
  }

  render () {
    return (
      <Link className={`button ${this.props.centerFix ? 'center-fix' : ''}`} to={this.props.link}>
        <span className={'icon'}>
          <i className={'fas fa-globe'}></i>
        </span>
        <span>Website</span>
      </Link>
    )
  }
}

export class ButtonGroup extends Component {
  static propTypes = {
    github: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired
  }

  render () {
    return (
      <div className={'buttons button-group'}>
        <GitHubButton link={this.props.github} centerFix />
        <WebsiteButton link={this.props.website} centerFix />
      </div>
    )
  }
}
