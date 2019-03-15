// Checks if `value` is classified as a `Set` object.
const isSymbol = function (value) {
  return this._toString.call(value) === '[object Symbol]' &&
    typeof value === 'symbol';
};

export default isSymbol;
