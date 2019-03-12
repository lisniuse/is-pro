import isNumer from '../type/number';
import isObject from '../type/object';
import { hasOwnProperty } from '../../core/prototype';
import setInterfaces from '../../core/setInterfaces';
let is = {
  number: isNumer,
  object: isObject
}
setInterfaces(is);

// has a given object got parameterized count property?
const isPropertyCount = function (object, count) {
  if (is.not.object(object) || is.not.number(count)) {
    return false;
  }
  let n = 0;
  for (let property in object) {
    if (hasOwnProperty.call(object, property) && ++n > count) {
      return false;
    }
  }
  return n === count;
};

export default isPropertyCount;
