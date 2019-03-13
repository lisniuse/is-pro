// is a given value RegExp?
const isRegexp = function (value) {
  return this._toString.call(value) === '[object RegExp]';
};

export default isRegexp;
