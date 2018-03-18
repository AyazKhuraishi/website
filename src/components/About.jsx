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
          <h1 className={'title section-title'}>ABOUT ME</h1>
          <div className={'columns'}>
            <div className={'column is-three-quarters about-text'}>
              <h2 className={'section-text-title'}>Hello there! 👋</h2>
              <div className={'section-text about-text-column'}>
                <p>I'm Linus Willner, an 18-year-old student and freelance developer from Finland. Pleasure to meet you!</p>
                <p>I'm an avid tech nerd that enjoys programming in his free time. I mostly develop JavaScript applications for the backend and web applications with common frontend paradigms, such as HTML and CSS.</p>
                <p>When it comes to programming, I'm quite a competent developer despite being self-taught and only having done freelance in the past. I am also proficient in three languages (<span className={'flag-icon flag-icon-fi'}/>, <span className={'flag-icon flag-icon-se'}/> and <span className={'flag-icon flag-icon-gb'}/>) and as such tend to write documentation for the projects I contribute to.</p>
                <p>I have created quite a few programs on my own, such as <a href={'https://github.com/linuswillner/LiveSoundBoard'}>Live Sound Board</a> and <a href={'https://github.com/linuswillner/Weather-Observatory'}>Weather Observatory</a>, ranging from websites to full-fledged desktop applications. Some of the major projects I have contributed to are <a href={'https://github.com/TheSharks/WildBeast'}>WildBeast</a> and <a href={'https://github.com/ArekSredzki/electron-release-server'}>electron-release-server</a>.</p>
                <p>Open source software is close to my ❤️ and I'm always looking for opportunities to help out. If you feel that I could help you with something, please keep on reading!</p>
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
