import isNumber from '../type/number';

// is a given number odd?
const isOdd = function(n) {
  return isNumber(n) && (n % 2 === 1 || n % 2 === -1);
}

export default isOdd;
