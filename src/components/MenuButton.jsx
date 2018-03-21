// Menu button
import React from 'react'
import { dispatcher, emitOne } from '../backend/dispatcher'
import { getElementsById } from '../backend/utils'
import { config } from '../config'
import disableScroll from 'disable-scroll'

export default class MenuButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hidden: true }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    if (e) e.preventDefault()
    emitOne('MENU_TOGGLE', !this.state.hidden)
    // Blur background
    // This is a wee bit hacky, but it works as intended (Toggling does not trigger transitions)
    if (window.innerWidth < 685) {
      let elements = getElementsById(config.common.sections) // List of elements to blur
      if (!this.state.hidden === false) {
        disableScroll.on()
        elements.map(el => { el.classList.add('blurred'); el.classList.remove('not-blurred') })
      } else {
        disableScroll.off()
        elements.map(el => { el.classList.add('not-blurred'); el.classList.remove('blurred') })
      }
    }
    this.setState({ hidden: !this.state.hidden })
  }

  render () {
    dispatcher.once('NAVBAR_ITEM_CLICK', () => {
      this.handleClick()
    })

    dispatcher.once('CLOSE_ANY_OPEN_DIALOG', () => {
      if (this.state.hidden === false) this.handleClick()
    })

    return (
      <div>
        <a
          className={'button menu-button'}
          data-button={'menu'}
          onClick={this.handleClick}
        >
          <span
            className={'icon is-small'}
            data-button={'menu'}
          >
            <i className={`fas ${this.state.hidden ? 'fa-bars' : 'fa-times'}`} data-button={'menu'} />
          </span>
        </a>
      </div>
    )
  }
}
