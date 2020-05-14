// Projects section
import React, { Component } from 'react'
import ProjectCard from '../ProjectCard'
import { Link } from '../Links'
import { Section, SectionTitle } from '../Section'
import i18n from 'lang'

export default class Projects extends Component {
  generateProjectDisplay = () => {
    const sections = []
    const cards = this.generateCards()
    let sectionAmount = 0

    while (cards.length > 0) {
      // Section amount is just here to satisfy React
      sectionAmount = ++sectionAmount

      // Limit 1 section to 4 cards for looks' sake
      sections.push(
        <div key={sectionAmount} className='tile is-ancestor'>
          {cards.splice(0, 4)}
        </div>
      )
    }

    return sections
  }

  generateCards = () => {
    return i18n`projects.cards`.map(card => {
      const { github, npm, website } = card

      return (
        <ProjectCard
          key={card.title}
          title={card.title}
          text={card.text}
          links={{ github, npm, website }}
          tags={card.tags}
        />
      )
    })
  }

  render () {
    return (
      <Section id='projects' className='section projects'>
        <SectionTitle>{i18n`projects.title`}</SectionTitle>
        {this.generateProjectDisplay()}
        <h2 className='subtitle section-subtitle'>
          {i18n`projects.p1.l1`}<Link to='https://github.com/linuswillner'>{i18n`projects.p1.l2`}</Link>.
        </h2>
      </Section>
    )
  }
}
