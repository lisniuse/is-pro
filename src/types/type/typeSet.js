//import type
import {
  isArguments,
  isArray,
  isBoolean,
  isDate,
  isError,
  isFunction,
  isNan,
  isNull,
  isNumber,
  isObject,
  isJson,
  isRegexp,
  isString,
  isChar,
  isUndefined,
  isSameType
} from './index';

// export type
export default {
  arguments: isArguments,
  array: isArray,
  boolean: isBoolean,
  date: isDate,
  error: isError,
  function: isFunction,
  nan: isNan,
  null: isNull,
  number: isNumber,
  object: isObject,
  json: isJson,
  regexp: isRegexp,
  string: isString,
  char: isChar,
  undefined: isUndefined,
  sameType: isSameType
}
