import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { Link } from 'components/Links'
import i18n from 'lang'

export default class TimelineItem extends Component {
  static propTypes = {
    role: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string,
      icon: PropTypes.any.isRequired // Image imports have no type
    }).isRequired,
    location: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
      'fullTime',
      'partTime',
      'freelance',
      'volunteer',
      'conscript'
    ]).isRequired,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render () {
    const styles = {
      content: {
        backgroundColor: '#ffffff'
      },
      contentArrow: {
        borderRight: '7px solid #cdcdcd'
      },
      icon: {
        boxShadow: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }

    return (
      <VerticalTimelineElement
        className='vertical-timeline-element--work timeline-item'
        contentStyle={styles.content}
        contentArrowStyle={styles.contentArrow}
        iconStyle={styles.icon}
        date={this.props.date}
        icon={<img src={this.props.company.icon}/>}
      >
        <div className='role-content'>
          <h3 className='vertical-timeline-element-title role'>{this.props.role}</h3>
          <div className='meta'>
            <div className='icons'>
              <span>🏢</span>
              <span>📍</span>
              <span>👨‍💼</span>
            </div>
            <div className='texts'>
              <h4 className='vertical-timeline-element-subtitle company'>
                {
                  this.props.company.link
                    ? <Link to={this.props.company.link}>{this.props.company.name}</Link>
                    : this.props.company.name
                }
              </h4>
              <h4 className='vertical-timeline-element-subtitle location'>{this.props.location}</h4>
              <h4 className='vertical-timeline-element-subtitle type'>{i18n`experience.employmentTypes`[this.props.type]}</h4>
            </div>
          </div>
          <p className='description'>{this.props.description}</p>
          <p>{this.props.tags.map((tag, i) => <span key={i} className='tag tech is-dark'>{tag}</span>)}</p>
        </div>
      </VerticalTimelineElement>
    )
  }
}
