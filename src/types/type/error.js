// is a given value Error object?
const isError = function (value) {
  return this._toString.call(value) === '[object Error]';
};

export default isError;
