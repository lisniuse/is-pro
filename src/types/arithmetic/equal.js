import isNumber from '../type/number';
import isString from '../type/string';
import isBoolean from '../type/boolean';
import isRegexp from '../type/regexp';

import setInterfaces from '../../core/setInterfaces';
let is = {
  number: isNumber,
  string: isString,
  boolean: isBoolean,
  regexp: isRegexp
}
setInterfaces(is);

// are given values equal? supports numbers, strings, regexes, booleans
// TODO: Add object and array support
const isEqual = function (value, other) {
  // check 0 and -0 equity with Infinity and -Infinity
  if (is.all.number(value, other)) {
    return value === other && 1 / value === 1 / other;
  }
  // check regexes as strings too
  if (is.all.string(value, other) || is.all.regexp(value, other)) {
    return '' + value === '' + other;
  }
  if (is.all.boolean(value, other)) {
    return value === other;
  }
  return false;
};

export default isEqual;
