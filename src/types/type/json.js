// is given value a pure JSON object?
const isJson = function (value) {
  return toString.call(value) === '[object Object]';
};

export default isJson;
