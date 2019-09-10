// Contact section
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from '../Links'
import reverseString from 'utils/reverseString'
import config from 'config'
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
  render () {
    const email = <b className={'email'} data-prefix={reverseString('hello')} data-suffix={reverseString('linuswillner.me')}/>

    return (
      <section className={'section contact'} id={'contact'}>
        <div className={'container'}>
          <h1 className={'title section-title'}>{i18n`contact.title`}</h1>
          <div className={'columns'}>
            <div className={'column section-text contact-text'}>
              <div className={'contact-pre'}>
                <p>{i18n`contact.p1.l1`}<br/>{i18n`contact.p1.l2`}</p>
                <p>{i18n`contact.p2.l1`}<Link to={'https://discordapp.com'}>{i18n`contact.p2.l2`}</Link>{i18n`contact.p2.l3`}</p>
                <p>{i18n`contact.p3`}</p>
              </div>
              <div className={'contact-methods'}>
                <h2 className={'contact-method'}>{i18n`contact.email`}: {email}</h2>
                <h2 className={'contact-method'}>Discord: <b>LWTech#0005</b></h2>
                <p className={'field'}>
                  {config.contact.icons.map(icon => <SocialMediaIcon key={icon.link} link={icon.link} iconClassName={icon.iconClassName}/>)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
