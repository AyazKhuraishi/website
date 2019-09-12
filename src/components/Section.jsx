import React from 'react'

export class Section extends React.Component {
  render () {
    return (
      <section {...this.props}>
        <div className={'container'}>
          {this.props.children}
        </div>
      </section>
    )
  }
}

export class SectionTitle extends React.Component {
  render () {
    return (
      <h1 className={'title section-title'}>{this.props.children}</h1>
    )
  }
}
