// Projects section
import React from 'react'
import ProjectCard from './ProjectCard'
import { config } from '../config'

export default class Projects extends React.Component {
  render () {
    return (
      <section className={'section projects'} id={'projects'}>
        <div className={'container'}>
          <h1 className={'title section-title'}>{window.i18n`projects.title`}</h1>
          <div className={'tile is-ancestor'}>
            {
              window.i18n`projects.cards`.map(card => {
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
          <h2 className={'subtitle section-subtitle'}>{window.i18n`projects.p1.l1`}<a href={'https://github.com/linuswillner'}>{window.i18n`projects.p1.l2`}</a>.</h2>
        </div>
      </section>
    )
  }
}
