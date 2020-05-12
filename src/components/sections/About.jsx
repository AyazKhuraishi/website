// About section
import React, { Component } from 'react'
import { Link } from '../Links'
import { Section, SectionTitle } from '../Section'
import profilePicture from '../../assets/images/profile.jpg'
import i18n from 'lang'

export default class About extends Component {
  render () {
    // On low device widths, hide certain elements to improve UX
    // Styles are computed on render due to possible resizes happening without reload
    const styles = {
      textOverrides: {
        textAlign: window.lowWidth ? 'center' : 'left',
        paddingRight: window.lowWidth ? '12px' : '70px'
      },
      columnOverrides: {
        display: window.lowWidth ? 'none' : 'block'
      },
      imageOverrides: {
        display: window.lowWidth ? 'none' : 'inline'
      }
    }

    return (
      <Section className='section about'>
        <SectionTitle>{i18n`about.title`}</SectionTitle>
        <div className='columns'>
          <div className='column is-three-quarters about-text' style={styles.textOverrides}>
            <h2 className='section-text-title'>{i18n`about.sectionTitle`}</h2>
            <div className='section-text about-text-column'>
              <p>{i18n`about.p1`}</p>
              <p>{i18n`about.p2`}</p>
              <p>{i18n`about.p3`}</p>
              <p>{i18n`about.p4`}</p>
              <p>
                {i18n`about.p5.l1`}
                <Link to='https://github.com/TheSharks/WildBeast'>WildBeast</Link>
                {i18n`about.p5.l2`}
                <Link to='https://github.com/js-rcon'>JS-RCON</Link>
                {i18n`about.p5.l3`}
                <Link to='https://github.com/linuswillner/react-console-emulator'>react-console-emulator</Link>
                {i18n`about.p5.l4`}
                <Link to='https://github.com/linuswillner/tag-replacer'>tag-replacer</Link>.
              </p>
              <p>{i18n`about.p6`}</p>
              <p className='signature'>- LW</p>
            </div>
          </div>
          <div className='column' style={styles.columnOverrides}>
            <figure className='image about-text-image' style={styles.imageOverrides}>
              <img src={profilePicture}/>
            </figure>
          </div>
        </div>
      </Section>
    )
  }
}
