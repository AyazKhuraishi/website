// Skills section
import React, { Component } from 'react'
import SkillDisplay from '../SkillDisplay'
import { Link } from '../Links'
import { Section, SectionTitle } from '../Section'
import i18n from 'lang'

export default class Skills extends Component {
  render () {
    // On low device widths, center text for better UX
    // Styles are computed on render due to possible resizes happening without reload
    const styles = {
      leftColumnOverrides: {
        textAlign: window.lowWidth ? 'center' : 'left',
        paddingRight: window.lowWidth ? '12px' : '70px'
      },
      rightColumnOverrides: {
        textAlign: window.lowWidth ? 'center' : 'left',
        alignItems: window.lowWidth ? 'center' : 'unset'
      }
    }

    return (
      <Section id='skills' className='section skills'>
        <SectionTitle>🔧 {i18n`skills.title`} 🔧</SectionTitle>
        <div className='columns'>
          <div className='column section-text skills-text' style={styles.leftColumnOverrides}>
            <p>{i18n`skills.p1`}</p>
            <p>{i18n`skills.p2`}</p>
            <p>{i18n`skills.p3`}</p>
            <p>{i18n`skills.p4.l1`}<Link to='https://github.com/linuswillner'>{i18n`skills.p4.l2`}</Link>{i18n`skills.p4.l3`}</p>
            <p>{i18n`skills.p5`}</p>
          </div>
          <div className='column' style={styles.rightColumnOverrides}>
            <SkillDisplay/>
          </div>
        </div>
      </Section>
    )
  }
}
