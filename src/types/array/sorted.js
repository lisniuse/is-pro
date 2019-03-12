import isArray from '../type/array';
import setInterfaces from '../../core/setInterfaces';
let is = {
  array: isArray
}
setInterfaces(is);

// is a given array sorted?
const isSorted = function (array, sign) {
  if (is.not.array(array)) {
    return false;
  }
  let predicate = comparator[sign] || comparator['>='];
  for (let i = 1; i < array.length; i++) {
    if (!predicate(array[i], array[i - 1])) {
      return false;
    }
  }
  return true;
};

export default isSorted;
