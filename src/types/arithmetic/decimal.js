import isNumber from '../type/number';

// is a given number decimal?
const isDecimal = function (n) {
  return isNumber(n) && n % 1 !== 0;
};

export default isDecimal;
