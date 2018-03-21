// Skills section
import React from 'react'
import Bar from './Bar'

export default class Skills extends React.Component {
  render () {
    return (
      <section className={'section skills'} id={'skills'}>
        <div className={'container'}>
          <h1 className={'title section-title'}>{window.i18n`skills.title`}</h1>
          <div className={'columns'}>
            <div className={'column section-text skills-text'}>
              <p>{window.i18n`skills.p1`}</p>
              <p>{window.i18n`skills.p2`}</p>
              <p>{window.i18n`skills.p3.l1`}<a href={'https://github.com/linuswillner'}>{window.i18n`skills.p3.l2`}</a>{window.i18n`skills.p3.l3`}</p>
            </div>
            <div className={'column bars'}>
              <Bar text={'Node.js'} progress={90} icon={<i className={'fab fa-node'}/>} />
              <Bar text={'JavaScript'} progress={80} icon={<i className={'fab fa-js-square js'}/>} />
              <Bar text={'HTML/CSS'} progress={70} icon={<i className={'fab fa-html5 html'}/>} />
              <Bar text={'React'} progress={60} icon={<i className={'fab fa-react react'}/>} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
