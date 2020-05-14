// Footer section
import React, { Component } from 'react'
import { FooterLink } from '../Links'
import i18n from 'lang'

export default class Footer extends Component {
  render () {
    return (
      <footer className='footer page-footer'>
        <div className='container'>
          <div className='footer-text section-text'>
            <p>{i18n`footer.copyright`}</p>
            <p>
              {i18n`footer.photos.l1`}
              <FooterLink to='https://unsplash.com/@ffstop'>Fotis Fotopoulos</FooterLink>.&nbsp;
              {i18n`footer.photos.l2`}
              <FooterLink to='https://taddeodario.com'>Dario Taddeo</FooterLink>.
            </p>
            <p>
              {i18n`footer.tech.l1`}
              <FooterLink type='react'>{i18n`footer.tech.l2`}</FooterLink>,
              <FooterLink type='sass'>{i18n`footer.tech.l3`}</FooterLink>
              {i18n`footer.tech.l4`}
              <FooterLink type='bulma'>{i18n`footer.tech.l5`}</FooterLink>
              {i18n`footer.location`}
            </p>
          </div>
        </div>
      </footer>
    )
  }
}
