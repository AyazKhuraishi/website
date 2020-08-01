// Experience section
import React, { Component } from 'react'
import Timeline from 'components/Timeline'
import TimelineItem from 'components/TimelineItem'
import { Section, SectionTitle } from '../Section'
import i18n from 'lang'

export default class Experience extends Component {
  render () {
    return (
      <Section id='experience' className='section experience'>
        <SectionTitle>🛠️ {i18n`experience.title`} 🛠️</SectionTitle>
        <div className='columns'>
          <div className='column'>
            <h2 className='experience-category-title'>Work experience</h2>
            <Timeline>{i18n`experience.positions.work`.map((position, i) => <TimelineItem key={i} {...position} />)}</Timeline>
          </div>
          <div className='column'>
            <h2 className='experience-category-title'>Volunteer experience</h2>
            <Timeline>{i18n`experience.positions.volunteer`.map((position, i) => <TimelineItem key={i} {...position} />)}</Timeline>
          </div>
        </div>
      </Section>
    )
  }
}
