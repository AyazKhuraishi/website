// Lang system core
import * as R from 'ramda'

const sourcePath = './sources/'

export const lang = {
  gb: require(sourcePath + 'gb'),
  fi: require(sourcePath + 'fi'),
  se: require(sourcePath + 'se')
}

/**
 * Return a lang string based on property notation. Use as tagged template.
 * @param {Array} stringPath - Array with an item describing the string path in the lang object.
 */
export function i18n (stringPath) {
  // Convert array from [ 'obj.prop' ] to [ 'obj', 'prop' ]
  stringPath = stringPath[0].split('.')

  // Ramda handles the pathfinding in the object
  let res = R.path(stringPath, window.lang[localStorage.getItem('lang') || 'gb'])

  if (res === undefined) return ''
  else return res
}
