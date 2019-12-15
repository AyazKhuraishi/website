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
    iconClassName: PropTypes.string.isRequired
  }

  render () {
    return (
      <Link className={'button social is-medium'} to={this.props.link}>
        <span className={'icon'}>
          <i className={this.props.iconClassName}></i>
        </span>
      </Link>
    )
  }
}

export default class Contact extends Component {
  icons = [
    { link: 'https://github.com/linuswillner', iconClassName: 'fab fa-github' },
    { link: 'https://linkedin.com/in/linuswillner', iconClassName: 'fab fa-linkedin' },
    { link: 'https://twitter.com/linuswillner', iconClassName: 'fab fa-twitter' },
    { link: 'https://instagram.com/linuswillner', iconClassName: 'fab fa-instagram' }
  ]

  render () {
    return (
      <Section className={'section contact'}>
        <SectionTitle>{i18n`contact.title`}</SectionTitle>
        <div className={'columns'}>
          <div className={'column section-text contact-text'}>
            <div className={'contact-pre'}>
              <p>{i18n`contact.p1.l1`}<br/>{i18n`contact.p1.l2`}</p>
              <p>{i18n`contact.p2.l1`}<Link to={'https://discordapp.com'}>{i18n`contact.p2.l2`}</Link>{i18n`contact.p2.l3`}</p>
              <p>{i18n`contact.p3`}</p>
            </div>
            <div className={'contact-methods'}>
              <h2 className={'contact-method'}>{i18n`contact.email`}: <Email prefix={'hello'} suffix={'linuswillner.me'}/></h2>
              <h2 className={'contact-method'}>Discord: <b>LW#0005</b></h2>
              <p className={'field'}>
                {this.icons.map(icon => <SocialMediaIcon key={icon.link} link={icon.link} iconClassName={icon.iconClassName}/>)}
              </p>
            </div>
          </div>
        </div>
      </Section>
    )
  }
}
