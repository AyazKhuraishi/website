// About section
import React from 'react'

const styles = {
  imageOverrides: {
    display: window.innerWidth < 770 ? 'none' : 'inline'
  }
}

export default class About extends React.Component {
  render () {
    return (
      <section className={'section about'} id={'about'}>
        <div className={'container'}>
          <h1 className={'title section-title'}>{window.i18n`about.title`}</h1>
          <div className={'columns'}>
            <div className={'column is-three-quarters about-text'}>
              <h2 className={'section-text-title'}>{window.i18n`about.sectionTitle`}</h2>
              <div className={'section-text about-text-column'}>
                <p>{window.i18n`about.p1`}</p>
                <p>{window.i18n`about.p2`}</p>
                <p>{window.i18n`about.p3`}</p>
                <p>{window.i18n`about.p4.l1`}<a href={'https://github.com/linuswillner/LiveSoundBoard'}>Live Sound Board</a>{window.i18n`about.p4.l2`}<a href={'https://github.com/linuswillner/Weather-Observatory'}>Weather Observatory</a>{window.i18n`about.p4.l3`}<a href={'https://github.com/TheSharks/WildBeast'}>WildBeast</a>{window.i18n`about.p4.l4`}<a href={'https://github.com/ArekSredzki/electron-release-server'}>electron-release-server</a>.</p>
                <p>{window.i18n`about.p5`}</p>
                <p className={'signature'}>- LW</p>
              </div>
            </div>
            <div className={'column'}>
              <figure className={'image about-text-image'} style={styles.imageOverrides}>
                <img src={require('../assets/images/me.jpg')}/>
              </figure>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
