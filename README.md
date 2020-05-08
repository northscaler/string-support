# `string-support`
This package contains various string utilities.

## Snake & Camel Case Conversions
> NOTE: These string utilities are deprecated in favor of lodash's [snakeCase](https://lodash.com/docs/4.17.15#snakeCase) and [camelCase](https://lodash.com/docs/4.17.15#camelCase) functions.
> These will no longer be maintained and users are encouraged to port to the aforelinked lodash methods.

### Camel case to snake
* `toSnake(camel, upper = false)`: converts camel case to snake, lower case by default
* `toUpperSnake(camel)`: converts camel case to upper case snake
* `toLowerSnake(camel)`: converts camel case to lower case snake

### Snake to camel case
* `toCamel(snake, upper = true)`: converts snake to camel case, leading upper by default
* `toUpperCamel(snake)`: converts snake to leading upper camel case
* `toLowerCamel(snake)`: converts snake to leading lower camel case
