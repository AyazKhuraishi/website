import React from 'react'
import { emitOne } from '../backend/dispatcher'
import { getElementsById } from '../backend/utils'

export default class MenuButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hidden: true }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    emitOne('MENU_TOGGLE', !this.state.hidden)
    // Blur background
    // This is a wee bit hacky, but it works as intended (Toggling does not trigger transitions)
    if (window.innerWidth < 685) {
      let elements = getElementsById([ 'home', 'about', 'skills' ]) // List of elements to blur
      if (!this.state.hidden === false) {
        elements.map(el => { el.classList.add('blurred'); el.classList.remove('not-blurred') })
      } else {
        elements.map(el => { el.classList.add('not-blurred'); el.classList.remove('blurred') })
      }
    }
    this.setState({ hidden: !this.state.hidden })
  }

  render () {
    return (
      <div>
        <a className={'button menu-button'} onClick={this.handleClick}>
          <span className={'icon is-small'}>
            <i className={`fas ${this.state.hidden ? 'fa-bars' : 'fa-times'}`} />
          </span>
        </a>
      </div>
    )
  }
}
