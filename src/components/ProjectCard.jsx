// Project card
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonGroup, GitHubButton, WebsiteButton } from './Buttons'

export default class ProjectCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    links: PropTypes.object
  }

  getContent () {
    const { website, github } = this.props.links

    if (website && github) {
      return <ButtonGroup github={github} website={website}/>
    } else if (website) {
      return <WebsiteButton link={website}/>
    } else if (github) {
      return <GitHubButton link={github}/>
    }
  }

  render () {
    return (
      <div className={'tile card notification is-child'}>
        <h2 className={'section-title card-title'}>{this.props.title}</h2>
        <p className={'section-text card-text'}>{this.props.text}</p>
        {this.getContent()}
      </div>
    )
  }
}
