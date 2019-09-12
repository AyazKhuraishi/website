import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from './Links'

export class ButtonGroup extends Component {
  static propTypes = {
    github: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired
  }

  render () {
    return (
      <div className={'buttons button-group'}>
        <ProjectButton type={'github'} link={this.props.github} centerFix/>
        <ProjectButton type={'website'} link={this.props.website} centerFix />
      </div>
    )
  }
}

export class ProjectButton extends Component {
  constructor (props) {
    super(props)
    this.getButtonType = this.getButtonType.bind(this)
  }

  static propTypes = {
    type: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    centerFix: PropTypes.any // No value required
  }

  getButtonType () {
    switch (this.props.type) {
      case 'github':
        return {
          name: 'GitHub',
          icon: 'fab fa-github'
        }
      case 'website':
        return {
          name: 'Website',
          icon: 'fas fa-globe'
        }
    }
  }

  render () {
    const { name, icon } = this.getButtonType()

    return (
      <Link
        className={`button ${this.props.centerFix ? 'center-fix' : ''}`}
        to={this.props.link}
      >
        <span className={'icon'}><i className={icon}></i></span>
        <span>{name}</span>
      </Link>
    )
  }
}
