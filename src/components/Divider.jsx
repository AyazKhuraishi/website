// Divider component
import React, { Component } from 'react'
import { dispatcher } from 'utils/dispatcher'

// On low device widths, hide margins on menu toggle
const styles = {
  hide: { display: 'none' }
}

export default class Divider extends Component {
  constructor (props) {
    super(props)
    this.state = { hidden: false }
  }

  componentDidMount () {
    dispatcher.on('MENU_TOGGLE', () => {
      if (window.lowWidth) this.setState({ hidden: !this.state.hidden })
    })
  }

  render () {
    return (
      <div className={'divider is-divider'} style={this.state.hidden === false ? {} : styles.hide} />
    )
  }
}
