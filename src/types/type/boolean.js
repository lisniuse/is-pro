// is a given value Boolean?
const isBoolean = function (value) {
  return value === true || value === false || toString.call(value) === '[object Boolean]';
};

export default isBoolean;
