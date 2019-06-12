// Lang system core
import * as R from 'ramda'

const src = './sources'

export const lang = {
  gb: require(`${src}/gb.js`).default,
  fi: require(`${src}/fi.js`).default,
  se: require(`${src}/se.js`).default
}

/**
 * Return a lang string based on property notation. Use as tagged template.
 * @param {Array} stringPath - Array with an item describing the string path in the lang object.
 */
export function i18n (stringPath) {
  // Convert array from [ 'obj.prop' ] to [ 'obj', 'prop' ]
  stringPath = stringPath[0].split('.')

  // Check that the lang value is correct
  if (localStorage.getItem('lang') && localStorage.getItem('lang').match(/gb|fi|se/gi) !== null) {
    // Ramda handles the pathfinding in the object
    const res = R.path(stringPath, window.lang[localStorage.getItem('lang') || 'gb'])

    return !res ? '' : res
  } else {
    // Backwards compatibility to previous version of the website
    // Old: en/fi/sv
    // New: gb/fi/se
    localStorage.setItem('lang', 'gb')
    window.location.reload(true)
  }
}
