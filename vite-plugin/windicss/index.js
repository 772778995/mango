const { windPreset } = require('can-can-need-bug')
// const electronPlugin = require('./electronPlugin')
// const themeVar = require('../../theme/default/light.json')

windPreset.prefix = false
windPreset.addUtilities = {
  preflight: '_'
}
windPreset.preflight = true

windPreset.theme = {
  extend: {
    colors: {
    }
  }
}

module.exports = windPreset

