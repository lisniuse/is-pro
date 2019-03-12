import isArray from '../type/array';
import setInterfaces from '../../core/setInterfaces';
let is = {
  array: isArray
}
setInterfaces(is);

// is a given item in an array?
const isInArray = function (value, array) {
  if (is.not.array(array)) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
};

export default isInArray;
