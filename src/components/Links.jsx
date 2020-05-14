// Link component
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Link extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    noDefaultStyle: PropTypes.bool,
    noNewTab: PropTypes.bool,
    focusable: PropTypes.bool,
    className: PropTypes.string
  }

  render () {
    const { to, noDefaultStyle, noNewTab, focusable, className } = this.props

    return (
      <a
        href={to}
        className={noDefaultStyle ? className : `link ${className || ''}`}
        target={noNewTab ? '' : '_blank'}
        tabIndex={focusable ? '0' : '-1'}
        rel='noopener noreferrer'
      >
        {this.props.children}
      </a>
    )
  }
}

export class FooterLink extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    to: PropTypes.string
  }

  getMeta = () => {
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
      default:
        return {
          className: 'default-link',
          link: this.props.to
        }
    }
  }

  render () {
    const { className, link } = this.getMeta()

    return (
      <a
        className={className}
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        tabIndex='-1'
      >
        {this.props.children}
      </a>
    )
  }
}
