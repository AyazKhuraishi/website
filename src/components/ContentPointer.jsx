import React, { Component } from 'react'

export default class ContentPointer extends Component {
  constructor (props) {
    super(props)
    this.state = { isOverlapping: false }
  }

  checkDescriptionOverlap = () => {
    // I could *theoretically* use refs for this, but that would involve uplifting refs so much that it would just be wasted effort
    const contentPointerRect = document.getElementById('content-pointer')?.getBoundingClientRect()
    const subtitleRect = document.getElementById('subtitle')?.getBoundingClientRect()

    // First check if element is above the subtitle, where it should not be - if so, short-circuit
    const isAbove = ((contentPointerRect.top < subtitleRect.top) && (contentPointerRect.bottom < subtitleRect.bottom))

    if (isAbove) return true
    else {
      // Check if any property exists since Object.keys() doesn't apparently works on bounding rects
      if (contentPointerRect?.x && subtitleRect?.x) {
        const isOverlapping = !(
          contentPointerRect.right < subtitleRect.left ||
          contentPointerRect.left > subtitleRect.right ||
          contentPointerRect.bottom < subtitleRect.top ||
          contentPointerRect.top > subtitleRect.bottom
        )

        return isOverlapping
      }
    }
  }

  checkOverlapState = () => {
    const isOverlapping = this.checkDescriptionOverlap()
    if (isOverlapping !== this.state.isOverlapping) this.setState({ isOverlapping })
  }

  handleClick = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  componentDidMount () {
    // This looks quite stupid, but it works with not letting the arrow appear on page load
    setTimeout(this.checkOverlapState, 0)
    window.addEventListener('resize', this.checkOverlapState)
  }

  render () {
    const styles = {
      hidden: {
        opacity: 0
      }
    }

    return (
      <div
        id='content-pointer'
        className='content-pointer'
        style={this.state.isOverlapping ? styles.hidden : {}}
        onClick={this.handleClick}
      >
        <i className='cil-chevron-double-down'/>
      </div>
    )
  }
}
