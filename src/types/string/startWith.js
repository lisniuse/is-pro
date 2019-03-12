import isString from '../type/string';

// is string start with a given target parameter?
const isStartWith = function (string, target) {
  return isString(string) && string.indexOf(target) === 0;
};

export default isStartWith;
