import React from 'react'
import PropTypes from 'prop-types'

export class Section extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render () {
    return (
      <section {...this.props}>
        <div className='container'>
          {this.props.children}
        </div>
      </section>
    )
  }
}

export class SectionTitle extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render () {
    return (
      <h1 className='title section-title'>{this.props.children}</h1>
    )
  }
}
