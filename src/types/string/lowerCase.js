import isString from '../type/string';

// is a given string all lowercase?
const isLowerCase = function (string) {
  return isString(string) && string === string.toLowerCase();
};

export default isLowerCase;
