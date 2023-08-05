const chroma = require('chroma-js')

const key_colors = {
  primary: chroma("#3237cd"),
  secondary: chroma("#3284cd"),
  tertiary: chroma("#cdc832"),
  error: chroma("#c53e3a"),
  focused: chroma("#cd820a"),
  disabled: chroma("#949497"),
  neutral: chroma("#7e7d82"),
  neutral_variant: chroma("#7f827d")
}


function create_tones_of_accent_colors(color, keyPrefix, initial={}) {
  return [0,10,20,30,40,50,60,70,80,90,95,99,100].reduce((obj, val) => {
    obj[`${keyPrefix}${val}`] = color.set('hsl.l', val / 100).hex()
    return obj
  }, initial)
}
function create_tones_of_neutral_colors(color, keyPrefix, initial={}) {
  return [...Array(101).keys()].reduce((obj, val) => {
    obj[`${keyPrefix}${val}`] = color.set('hsl.l', val / 100).hex()
    return obj
  }, initial)
}

const tones = {}
create_tones_of_accent_colors(key_colors.primary, "P_", tones)
create_tones_of_accent_colors(key_colors.secondary, "S_", tones)
create_tones_of_accent_colors(key_colors.tertiary, "T_", tones)
create_tones_of_accent_colors(key_colors.error, "E_", tones)
create_tones_of_neutral_colors(key_colors.neutral, "N_", tones)
create_tones_of_neutral_colors(key_colors.neutral_variant, "NV_", tones)
create_tones_of_neutral_colors(key_colors.disabled, "D_", tones)

module.exports.key_colors = key_colors
module.exports.tones = tones
module.exports.create_tones_of_accent_colors = create_tones_of_accent_colors
module.exports.create_tones_of_neutral_colors = create_tones_of_neutral_colors
//console.log(tones)