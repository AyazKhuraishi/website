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
      contentOverrides: {
        default: {
          column: {
            display: window.lowWidth ? 'none' : 'block'
          },
          image: {
            display: window.lowWidth ? 'none' : 'inline'
          }
        },
        lowWidth: {
          column: {
            display: !window.lowWidth ? 'none' : 'block'
          },
          image: {
            display: !window.lowWidth ? 'none' : 'inline-block'
          }
        }
      }
    }

    return (
      <Section id='about' className='section about'>
        <SectionTitle>👨‍💻 {i18n`about.title`} 👨‍💻</SectionTitle>
        {/* Low width image goes into separate section above the text */}
        <div className='columns' style={styles.contentOverrides.lowWidth.column}>
          <div className='column'>
            <figure className='image about-text-image-lowwidth'>
              <img src={profilePicture}/>
            </figure>
          </div>
        </div>
        <div className='columns'>
          {/* Unset is-three-quarters on low device widths because Bulma does not naturally remove it before 770px or so, but lowWidth triggers at 1030 */}
          <div className={`column ${!window.lowWidth ? 'is-three-quarters' : ''} about-text`} style={styles.textOverrides}>
            <h2 className='section-text-title'>{i18n`about.sectionTitle`}</h2>
            <div className='section-text about-text-column'>
              <p>{i18n`about.p1`}</p>
              <p>{i18n`about.p2`}</p>
              <p>{i18n`about.p3`}</p>
              <p>
                {i18n`about.p4.l1`}
                <Link to='https://github.com/TheSharks/WildBeast'>TheSharks/WildBeast</Link>
                {i18n`about.p4.l2`}
                <Link to='https://github.com/TheCodingDen/projects-bot'>TheCodingDen/projects-bot</Link>
                {i18n`about.p4.l3`}
                <Link to='https://github.com/linuswillner/react-console-emulator'>react-console-emulator</Link>
                {i18n`about.p4.l4`}
                <Link to='https://github.com/TheSharks/JagTag-JS'>TheSharks/JagTag-JS</Link>.
              </p>
              <p>{i18n`about.p5`}</p>
              <p>{i18n`about.p6`}</p>
              <p className='signature'>- LW</p>
            </div>
          </div>
          {/* High width image goes into separate section alongside the text */}
          <div className='column' style={styles.contentOverrides.default.column}>
            <figure className='image about-text-image' style={styles.contentOverrides.default.image}>
              <img src={profilePicture}/>
            </figure>
          </div>
        </div>
      </Section>
    )
  }
}
