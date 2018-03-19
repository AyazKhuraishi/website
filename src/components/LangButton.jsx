import React from 'react'
import PropTypes from 'prop-types'
import { dispatcher, emitOne } from '../backend/dispatcher'

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
    transitionTimingFunction: 'ease-in-out'
  }
}

class DropdownItem extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    emitOne('LANG_SELECT', this.props.country)
  }

  render () {
    return (
      <div
        className={'dropdown-item item'}
        onClick={this.handleClick}
      >
        <span className={`flag-icon flag-icon-${this.props.country}`}/>
      </div>
    )
  }
}

class LangSelector extends React.Component {
  render () {
    return (
      <div
        className={`dropdown-menu dropdown-container`}
        style={this.props.active ? styles.dropdownOverrides : styles.dropdownHidden}
        id={'lang-selector'}
        role={'menu'}
      >
        <div className={'dropdown-content dropdown-inner'}>
          <DropdownItem country={'gb'}/>
          <DropdownItem country={'fi'}/>
          <DropdownItem country={'se'}/>
        </div>
      </div>
    )
  }
}

export default class LangButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lang: localStorage.getItem('lang') || 'gb', // Use English if nothing was set in the previous session
      active: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    this.setState({ active: !this.state.active })
  }

  render () {
    dispatcher.once('LANG_SELECT', lang => {
      localStorage.setItem('lang', lang) // Write to local storage and remember for next session
      this.setState({ lang: lang, active: false })
    })

    return (
      <div className={`dropdown lang-button ${this.state.active ? 'is-active' : ''}`}>
        <div className={'dropdown-trigger'}>
          <button
            className={'button inner'}
            aria-haspopup={'true'}
            aria-controls={'lang-selector'}
            onClick={this.handleClick}
          >
            <span className={'icon is-small'}>
              <span
                className={`flag-icon flag-icon-${this.state.lang}`}
                aria-hidden={'true'}
              />
            </span>
          </button>
        </div>
        <LangSelector active={this.state.active} />
      </div>
    )
  }
}

DropdownItem.propTypes = {
  country: PropTypes.string.isRequired
}

LangSelector.propTypes = {
  active: PropTypes.bool.isRequired
}
