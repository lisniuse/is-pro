// is a given value RegExp?
const isRegexp = function (value) {
  return toString.call(value) === '[object RegExp]';
};

export default isRegexp;
