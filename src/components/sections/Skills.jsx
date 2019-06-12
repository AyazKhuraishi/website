// Skills section
import React, { Component } from 'react'
import Bar from '../Bar'
import { Link } from '../Links'

export default class Skills extends Component {
  render () {
    // On low device widths, center text for better UX
    // Styles are computed on render due to possible resizes happening without reload
    const styles = {
      columnOverrides: {
        textAlign: window.lowWidth ? 'center' : 'left',
        paddingRight: window.lowWidth ? '12px' : '70px'
      }
    }

    return (
      <section className={'section skills'} id={'skills'}>
        <div className={'container'}>
          <h1 className={'title section-title'}>{window.i18n`skills.title`}</h1>
          <div className={'columns'}>
            <div className={'column section-text skills-text'} style={styles.columnOverrides}>
              <p>{window.i18n`skills.p1`}</p>
              <p>{window.i18n`skills.p2`}</p>
              <p>{window.i18n`skills.p3`}</p>
              <p>{window.i18n`skills.p4.l1`}<Link to={'https://github.com/linuswillner'}>{window.i18n`skills.p4.l2`}</Link>{window.i18n`skills.p4.l3`}</p>
            </div>
            <div className={'column bars'}>
              <Bar text={'JavaScript'} progress={100} icon={<i className={'fab fa-node-js js'}/>}/>
              <Bar text={'React'} progress={90} icon={<i className={'fab fa-react react'}/>}/>
              <Bar text={'Sass'} progress={85} icon={<i className={'fab fa-sass sass'}/>}/>
              <Bar text={'Linux'} progress={55} icon={<i className={'fab fa-linux linux'}/>}/>
              <Bar text={'Golang'} progress={30} icon={<i className={'fab fa-google golang'}/>}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
