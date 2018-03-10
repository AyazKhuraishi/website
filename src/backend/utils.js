/**
 * Get multiple elements by ID.
 * @param {Array} ids - Array of element IDs to get.
 */
function getElementsById (ids) {
  let elements = []
  for (let i = 0; i < ids.length; i++) {
    elements.push(document.getElementById(ids[i]))
  }
  return elements
}

export { getElementsById }
