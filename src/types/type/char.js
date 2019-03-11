import isString from './string';

// is a given value Char?
const isChar = function(value) {
  return isString(value) && value.length === 1;
};

export default isChar;
