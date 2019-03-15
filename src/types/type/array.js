// is a given value Array?
// check native isArray first
const isArray = function (value) {
  if ( Array.isArray ) return Array.isArray(value);
  return this._toString.call(value) === '[object Array]' && value.constructor === Array;
};

export default isArray;
