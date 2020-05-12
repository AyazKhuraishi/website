const fs = require('fs')
const path = require('path')

const src = path.resolve(__dirname, '..', 'src', 'keybase.txt')
const dest = path.resolve(__dirname, '..', 'build', 'keybase.txt')

try {
  fs.copyFileSync(src, dest)
  console.log('Replicated Keybase signature to build folder')
} catch (err) {
  console.error('Could not replicate Keybase signature to build folder:', err)
  process.exit(1)
}
