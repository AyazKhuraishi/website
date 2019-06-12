// Footer section
import React, { Component } from 'react'
import { FooterLink } from '../Links'

export default class Footer extends Component {
  render () {
    return (
      <footer className={'footer page-footer'}>
        <div className={'container'}>
          <div className={'footer-text section-text'}>
            <p>{window.i18n`footer.copyright`}</p>
            <p>
              {window.i18n`footer.tech.l1`}
              <FooterLink type={'react'}>{window.i18n`footer.tech.l2`}</FooterLink>,
              <FooterLink type={'sass'}>{window.i18n`footer.tech.l3`}</FooterLink>
              {window.i18n`footer.tech.l4`}
              <FooterLink type={'bulma'}>{window.i18n`footer.tech.l5`}</FooterLink>.
              {window.i18n`footer.location`}
            </p>
          </div>
        </div>
      </footer>
    )
  }
}
