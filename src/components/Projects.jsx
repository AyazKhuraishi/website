// Projects section
import React from 'react'
import ProjectCard from './ProjectCard'
import { config } from '../config'

export default class Projects extends React.Component {
  render () {
    return (
      <section className={'section projects'} id={'projects'}>
        <div className={'container'}>
          <h1 className={'title section-title'}>PROJECTS</h1>
          <div className={'tile is-ancestor'}>
            {
              config.projects.cards.map(card => {
                return (
                  <ProjectCard
                    key={card.title}
                    title={card.title}
                    text={card.text}
                    links={{
                      github: card.github ? card.github : null,
                      website: card.website ? card.website : null
                    }}
                  />
                )
              })
            }
          </div>
          <h2 className={'subtitle section-subtitle'}>This is a showcase of projects I have created or contributed to. For the full list, see my <a href={'https://github.com/linuswillner'}>GitHub page</a>.</h2>
        </div>
      </section>
    )
  }
}
