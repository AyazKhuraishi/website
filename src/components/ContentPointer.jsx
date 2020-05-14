import React, { Component } from 'react'

export default class ContentPointer extends Component {
  handleClick = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  render () {
    return (
      <div
        className='content-pointer'
        onClick={this.handleClick}
      >
        <i className='cil-chevron-double-down'/>
      </div>
    )
  }
}
