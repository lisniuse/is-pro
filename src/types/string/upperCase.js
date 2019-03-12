import isString from '../type/string';

// is a given string all uppercase?
const isUpperCase = function (string) {
  return isString(string) && string === string.toUpperCase();
};

export default isUpperCase;
