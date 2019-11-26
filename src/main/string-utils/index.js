'use strict'

const toSnake = (camel, upper = false) => {
  if (!camel) return camel

  camel = camel
    .toString()
    .replace(/(^([A-Z]))/, (match, upper) => `${upper.toLowerCase()}`)
    .replace(/([A-Z])/g, (match, upper) => `_${upper.toLowerCase()}`)

  return upper ? camel.toUpperCase() : camel
}

const toUpperSnake = camel => toSnake(camel, true)
const toLowerSnake = camel => toSnake(camel)

const toCamel = (snake, upper = true) => {
  if (!snake) return snake

  return snake
    .toString()
    .split('_')
    .reduce((accum, next) => {
      if (!next) return accum

      next = next.toLowerCase()

      if (upper) {
        return `${accum}${next.replace(/^([a-z])/, (match, lower) => lower.toUpperCase())}`
      } else {
        upper = true
        return next
      }
    }, '')
}

const toUpperCamel = snake => toCamel(snake)
const toLowerCamel = snake => toCamel(snake, false)

module.exports = {
  toSnake,
  toUpperSnake,
  toLowerSnake,
  toCamel,
  toUpperCamel,
  toLowerCamel
}
