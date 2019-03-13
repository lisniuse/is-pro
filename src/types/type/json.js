// is given value a pure JSON object?
const isJson = function (value) {
  return this._toString.call(value) === '[object Object]';
};

export default isJson;
