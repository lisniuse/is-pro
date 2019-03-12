import isNumber from '../type/number';

// is a given number negative?
const isNegative = function (n) {
  return isNumber(n) && n < 0;
};

export default isNegative;
