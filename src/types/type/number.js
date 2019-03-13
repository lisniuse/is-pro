// is a given value number?
const isNumber = function (value) {
  return this.not.nan(value) && this._toString.call(value) === '[object Number]';
};

export default isNumber;
