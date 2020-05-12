// Lang selector dropdown
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { emit } from 'utils/dispatcher'

// Animation overrides for the lang selector
const styles = {
  dropdownOverrides: {
    opacity: 1,
    transition: 'all 300ms', // Same as %navbar-toggle-animation
    WebkitTransition: 'all 300ms', // Browser compat
    transitionTimingFunction: 'ease-in-out'
  },
  dropdownHidden: {
    opacity: 0,
    transition: 'all 300ms',
    WebkitTransition: 'all 300ms',
    transitionTimingFunction: 'ease-in-out',
    pointerEvents: 'none'
  }
}

class DropdownItem extends Component {
  static propTypes = {
    country: PropTypes.string.isRequired
  }

  handleClick = (event) => {
    event.preventDefault()
    emit('LANG_SELECT', this.props.country)
  }

  render () {
    return (
      <div className='dropdown-item item' onClick={this.handleClick}>
        <span className={`flag-icon flag-icon-${this.props.country}`}/>
      </div>
    )
  }
}

export default class LangSelector extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired
  }

  render () {
    return (
      <div
        className='dropdown-menu dropdown-container'
        style={this.props.active ? styles.dropdownOverrides : styles.dropdownHidden}
        id='lang-selector'
        role='menu'
      >
        <div className='dropdown-content dropdown-inner'>
          <DropdownItem country='gb'/>
          <DropdownItem country='fi'/>
          <DropdownItem country='se'/>
        </div>
      </div>
    )
  }
}
