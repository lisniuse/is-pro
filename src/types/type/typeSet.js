//import type
import {
  isArguments,
  isArray,
  isBuffer,
  isBoolean,
  isDate,
  isError,
  isFunction,
  isNan,
  isNull,
  isNumber,
  isObject,
  isPlainObject,
  isJson,
  isRegexp,
  isString,
  isChar,
  isUndefined,
  isMap,
  isSet,
  isSymbol,
  isSameType
} from './index';

// export type
export default {
  arguments: isArguments,
  array: isArray,
  buffer: isBuffer,
  boolean: isBoolean,
  date: isDate,
  error: isError,
  function: isFunction,
  nan: isNan,
  null: isNull,
  number: isNumber,
  object: isObject,
  plainObject: isPlainObject,
  json: isJson,
  regexp: isRegexp,
  string: isString,
  char: isChar,
  undefined: isUndefined,
  map: isMap,
  set: isSet,
  symbol: isSymbol,
  sameType: isSameType
}
