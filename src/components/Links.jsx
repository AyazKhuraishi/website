// Link component
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Link extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    noTab: PropTypes.any,
    tabIndex: PropTypes.any,
    focusable: PropTypes.any
  }

  render () {
    return (
      <a
        href={this.props.to}
        className={this.props.className || ''}
        target={this.props.noTab ? '' : '_blank'}
        tabIndex={this.props.focusable ? '0' : '-1'}
      >{this.props.children}</a>
    )
  }
}

export class FooterLink extends Component {
  constructor (props) {
    super(props)
    this.getMeta = this.getMeta.bind(this)
  }

  static propTypes = {
    type: PropTypes.string.isRequired
  }

  getMeta () {
    switch (this.props.type) {
      case 'react':
        return {
          className: 'react-link',
          link: 'https://reactjs.org'
        }
      case 'sass':
        return {
          className: 'sass-link',
          link: 'http://sass-lang.com'
        }
      case 'bulma':
        return {
          className: 'bulma-link',
          link: 'https://bulma.io'
        }
    }
  }

  render () {
    const { className, link } = this.getMeta()
    return (
      <a
        className={className}
        href={link}
        target={'_blank'}
        tabIndex={'-1'}
      >
        {this.props.children}
      </a>
    )
  }
}
