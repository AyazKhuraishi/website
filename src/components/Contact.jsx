// Contact section
import React from 'react'
import PropTypes from 'prop-types'
import { config } from '../config'

class SocialMediaIcon extends React.Component {
  render () {
    return (
      <a className={'button social is-medium'} href={this.props.link} target={'_blank'}>
        <span className={'icon'}>
          <i className={this.props.iconClassName}></i>
        </span>
      </a>
    )
  }
}

export default class Contact extends React.Component {
  render () {
    return (
      <section className={'section contact'} id={'contact'}>
        <div className={'container'}>
          <h1 className={'title section-title'}>CONTACT</h1>
          <div className={'columns'}>
            <div className={'column section-text contact-text'}>
              <div className={'contact-pre'}>
                <p>If you want to reach out to me for any sort of inquiry, be it formal or not, email is usually the best way to do that.<br/>I read my email frequently and will answer to the best of my ability.</p>
                <p>For more informal conversation in the form of instant messaging, my DMs on <a href={'https://discordapp.com'}>Discord</a> are open.</p>
                <p>Finally, if you want to just see what I'm up to, I've left some links to my social media here as well.</p>
              </div>
              <div className={'contact-methods'}>
                <h2 className={'contact-method'}>Email: <b>hello@linuswillner.me</b></h2>
                <h2 className={'contact-method'}>Discord: <b>LWTech#0005</b></h2>
                <p className={'field'}>
                  {
                    config.contact.icons.map(icon => {
                      return (
                        <SocialMediaIcon
                          key={icon.link}
                          link={icon.link}
                          iconClassName={icon.iconClassName}
                        />
                      )
                    })
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

SocialMediaIcon.propTypes = {
  link: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired
}
