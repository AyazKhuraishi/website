// Experience section
import React, { Component } from 'react'
import Timeline from 'components/Timeline'
import TimelineItem from 'components/TimelineItem'
import { Section, SectionTitle } from '../Section'
import i18n from 'lang'

export default class Experience extends Component {
  render () {
    // On low device widths, center text for better UX
    // Styles are computed on render due to possible resizes happening without reload
    const styles = {
      leftColumnOverrides: {
        // textAlign: window.lowWidth ? 'center' : 'left'
      }
    }

    return (
      <Section id='experience' className='section experience'>
        <SectionTitle>🛠️ {i18n`experience.title`} 🛠️</SectionTitle>
        <div className='columns'>
          <div className='column' style={styles.leftColumnOverrides}>
            <Timeline>
              {i18n`experience.positions`.map((position, i) => <TimelineItem key={i} {...position} />)}
            </Timeline>
          </div>
        </div>
      </Section>
    )
  }
}
