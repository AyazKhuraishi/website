// Divider component
import React from 'react'
import { dispatcher } from '../backend/dispatcher'

// On low device widths, hide margins on menu toggle
const styles = {
  show: {
    opacity: 1,
    transition: 'all 500ms'
  },
  hide: {
    opacity: 0
  }
}

export default class Divider extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hidden: false }
  }

  render () {
    dispatcher.on('MENU_TOGGLE', () => {
      if (window.innerWidth < 685) this.setState({ hidden: !this.state.hidden })
    })
    return (
      <div className={'divider is-divider'} style={this.state.hidden === false ? styles.show : styles.hide} />
    )
  }
}
