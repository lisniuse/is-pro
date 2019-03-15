// Checks if `value` is classified as a `Set` object.
const isSet = function (value) {
  return this._toString.call(value) === '[object Set]' &&
    typeof value === 'object';
};

export default isSet;
