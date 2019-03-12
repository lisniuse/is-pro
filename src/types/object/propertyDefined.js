import isObject from '../type/object';
import isString from '../type/string';

// is given object has parameterized property?
const isPropertyDefined = function (object, property) {
  return isObject(object) && isString(property) && property in object;
};

export default isPropertyDefined;
