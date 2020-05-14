// Contact section
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Email from '../Email'
import { Link } from '../Links'
import { Section, SectionTitle } from '../Section'
import i18n from 'lang'

class SocialMediaIcon extends Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
    iconClassName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

  render () {
    const { link, iconClassName, name } = this.props

    return (
      <Link noDefaultStyle className='button social is-medium' to={link}>
        <span className='icon'><i className={iconClassName}/></span>
        <span className='name'>{name}</span>
      </Link>
    )
  }
}

export default class Contact extends Component {
  icons = [
    { link: 'https://github.com/linuswillner', class: 'cib-github github', name: 'GitHub' },
    { link: 'https://www.npmjs.com/~linuswillner', class: 'cib-npm npm', name: 'NPM' },
    { link: 'https://linkedin.com/in/linuswillner', class: 'cib-linkedin linkedin', name: 'LinkedIn' },
    { link: 'https://twitter.com/linuswillner', class: 'cib-twitter twitter', name: 'Twitter' },
    { link: 'https://instagram.com/linuswillner', class: 'cib-instagram instagram', name: 'Instagram' }
  ]

  render () {
    return (
      <Section id='contact' className='section contact'>
        <SectionTitle>📧 {i18n`contact.title`} 📧</SectionTitle>
        <div className='columns'>
          <div className='column section-text contact-text'>
            <div className='contact-pre'>
              <p>{i18n`contact.p1.l1`}<br/>{i18n`contact.p1.l2`}</p>
              <p>{i18n`contact.p2.l1`}<Link to='https://discord.com'>{i18n`contact.p2.l2`}</Link>{i18n`contact.p2.l3`}</p>
              <p>{i18n`contact.p3`}</p>
            </div>
            <div className='contact-methods'>
              <h2 className='contact-method'>
                <i className='cil-envelope-closed'/>&nbsp;
                {i18n`contact.email`}: <Email prefix='hello' suffix='linuswillner.me'/>
              </h2>
              <h2 className='contact-method'>
                <i className='cib-discord discord'/> Discord: <b>LW#0005</b>
              </h2>
              <p className='field'>
                {
                  this.icons.map(icon => (
                    <SocialMediaIcon
                      key={icon.link}
                      name={icon.name}
                      link={icon.link}
                      iconClassName={icon.class}
                    />
                  ))
                }
              </p>
            </div>
          </div>
        </div>
      </Section>
    )
  }
}
