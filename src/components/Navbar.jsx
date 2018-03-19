// Navbar
import React from 'react'
import PropTypes from 'prop-types'
import { dispatcher, emitOne } from '../backend/dispatcher'
import { config } from '../config'
import scrollIntoView from 'scroll-into-view'

const styles = {
  navbarOverrides: {
    marginBottom: 0,
    top: window.innerWidth < 685 ? '25%' : 0,
    backgroundColor: window.innerWidth < 685 ? 'transparent' : '#F0F0F0'
  },
  navbarHidden: {
    marginBottom: 0,
    opacity: 0,
    top: window.innerWidth < 685 ? '25%' : 0,
    backgroundColor: window.innerWidth < 685 ? 'transparent' : '#F0F0F0',
    pointerEvents: 'none' // Prevent link clicking (Because it's still there, just not visible)
  },
  listOverrides: {
    borderBottom: 0,
    flexDirection: window.innerWidth < 685 ? 'column' : 'row'
  }
}

class Item extends React.Component {
  handleClick (link) {
    emitOne('NAVBAR_ITEM_CLICK')
    scrollIntoView(document.getElementById(link.substring(1))) // Substring for DOM ID removal
  }

  render () {
    return (
      <a
        style={styles.listOverrides}
        onClick={() => { this.handleClick(this.props.link) }}
      >
        {this.props.text.toUpperCase()}
      </a>
    )
  }
}

export default class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { selectedIndex: 0, hidden: true }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect (itemName) {
    let selectedButton = config.navbar.navbarItems.map(i => i.name).indexOf(itemName)
    this.setState({ selectedIndex: selectedButton })
  }

  render () {
    dispatcher.once('MENU_TOGGLE', hidden => {
      this.setState({ hidden: hidden })
    })

    return (
      <div className={'navbar tabs is-centered'} style={this.state.hidden ? styles.navbarHidden : styles.navbarOverrides}>
        <ul style={styles.listOverrides}>
          {config.navbar.navbarItems.map(item => {
            return (
              <li
                className={this.state.selectedIndex === config.navbar.navbarItems.map(i => i.name).indexOf(item.name) ? 'item-selected' : ''}
                key={item.name}
                onClick={() => this.handleSelect(item.name)}
              >
                <Item
                  text={item.name}
                  link={item.href}
                />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

Item.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string
}
