// is a given value number?
const isNumber = function (value) {
  return is.not.nan(value) && toString.call(value) === '[object Number]';
};

export default isNumber;
