// is a given value String?
const isString = function(value) {
  return this._toString.call(value) === '[object String]';
};

export default isString;
