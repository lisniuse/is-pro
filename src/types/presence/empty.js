import { isObject, isArray, isArguments } from '../type/index';

//is a given value empty? Objects, arrays, strings
const isEmpty = function (value) {
  if (isObject(value)) {
    let length = Object.getOwnPropertyNames(value).length;
    if (length === 0 || (length === 1 && isArray(value)) ||
      (length === 2 && isArguments(value))) {
      return true;
    }
    return false;
  }
  return value === '';
}

export default isEmpty;
