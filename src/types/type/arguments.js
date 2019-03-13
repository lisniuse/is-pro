// fallback check is for IE
const isArguments = function(value) {
  return this._toString.call(value) === '[object Arguments]' ||
    (value != null && typeof value === 'object' && 'callee' in value);
};

export default isArguments;
