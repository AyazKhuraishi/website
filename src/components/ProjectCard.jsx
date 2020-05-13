// Project card
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ProjectButton } from './ProjectButton'

export default class ProjectCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    links: PropTypes.exact({
      github: PropTypes.string,
      npm: PropTypes.string,
      website: PropTypes.string
    }),
    tags: PropTypes.arrayOf(PropTypes.string)
  }

  generateLinks = () => {
    const { links } = this.props
    const buttons = []

    if (links.github) buttons.push(<ProjectButton key='gh' type='github' link={links.github}/>)
    if (links.npm) buttons.push(<ProjectButton key='npm' type='npm' link={links.npm}/>)
    if (links.website) buttons.push(<ProjectButton key='web' type='website' link={links.website}/>)

    return buttons
  }

  generateTags = () => {
    const { tags } = this.props
    if (tags) return tags.map(tag => <span key={tag} className='project-tech tag is-dark'>{tag}</span>)
  }

  render () {
    return (
      <div className='tile card notification is-child'>
        <h2 className='section-title card-title'>
          {this.props.title}
        </h2>
        <p className='project-links'>{this.generateLinks()}</p>
        <p className='section-text card-text'>{this.props.text}</p>
        <p className='section-text'>{this.generateTags()}</p>
      </div>
    )
  }
}
