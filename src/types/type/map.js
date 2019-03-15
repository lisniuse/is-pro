// Checks if `value` is classified as a `Map` object.
const isMap = function (value) {
  return this._toString.call(value) === '[object Map]' &&
    typeof value === 'object';
};

export default isMap;
