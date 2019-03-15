// Checks if value is a plain object, that is, 
// an object created by the Object constructor or one with a [[Prototype]] of null.
const isPlainObject = function (value) {
  if (!value) return false;
  return this._toString.call(value) === '[object Object]' && 
  value.toString() === '[object Object]' && value.constructor === Object;
};

export default isPlainObject;
