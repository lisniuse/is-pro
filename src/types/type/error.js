// is a given value Error object?
const isError = function (value) {
  return toString.call(value) === '[object Error]';
};

export default isError;
