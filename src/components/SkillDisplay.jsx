import React, { Component } from 'react'
import PropTypes from 'prop-types'
import skillList from '../lang/skills'

class SkillGroup extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.exact({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['cil', 'cib', 'cif'])
      })
    ).isRequired
  }

  render () {
    return (
      <div className='skill-group'>
        <div className='title'>
          {this.props.title}
        </div>
        <div className='icon-list'>
          {this.props.skills.map((skill, i) => {
            // Use brand icons per default, but if an icon is marked as different, use that type instead
            return (
              <span
                key={i}
                className='icon-container'
                data-tooltip={skill.name}
              >
                <span className={`${skill.type || 'cib'}-${skill.icon}`}/>
              </span>
            )
          })}
        </div>
      </div>
    )
  }
}

export default class SkillDisplay extends Component {
  render () {
    return (
      <div className='skill-display'>
        <SkillGroup title='Programming languages' skills={skillList.languages}/>
        <SkillGroup title='Libraries and frameworks' skills={skillList.libraries}/>
        <SkillGroup title='Operating systems' skills={skillList.operatingSystems}/>
        <SkillGroup title='Tools' skills={skillList.tools}/>
        <SkillGroup title='Services' skills={skillList.services}/>
      </div>
    )
  }
}
