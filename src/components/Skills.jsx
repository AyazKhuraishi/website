import React from 'react'
import Bar from './Bar'

export default class Skills extends React.Component {
  render () {
    return (
      <section className={'section skills'} id={'skills'}>
        <div className={'container'}>
          <h1 className={'title section-title'}>SKILLS</h1>
          <div className={'columns'}>
            <div className={'column section-text skills-text'}>
              <p>I'm a freelance developer with 2 years of experience in both open and closed source development. I have worked in team-oriented environments in addition to working on my own.</p>
              <p>I develop websites and web applications (React), JavaScript applications for the backend (Node.js) and desktop applications (Electron). I also have experience in version control (Git), continuous integration and deployment of production applications.</p>
              <p>Most of the projects I have created or contribute to can be found on my <a href={'https://github.com/linuswillner'}>GitHub page</a> and I keep all my open source projects on the platform.</p>
            </div>
            <div className={'column bars'}>
              <Bar text={'Node.js'} progress={90} icon={<i className={'fab fa-node'}/>} />
              <Bar text={'JavaScript'} progress={80} icon={<i className={'fab fa-js-square'}/>} />
              <Bar text={'HTML/CSS'} progress={70} icon={<i className={'fab fa-html5'}/>} />
              <Bar text={'React'} progress={60} icon={<i className={'fab fa-react'}/>} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
