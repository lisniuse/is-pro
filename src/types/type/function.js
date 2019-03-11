// is a given value function?
// fallback check is for IE
const isFunction = function (value) {
  return toString.call(value) === '[object Function]' || typeof value === 'function';
};

export default isFunction;
