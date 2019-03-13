// is a given value function?
// fallback check is for IE
const isFunction = function (value) {
  return this._toString.call(value) === '[object Function]' ||
    typeof value === 'function';
};

export default isFunction;
