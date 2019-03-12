import isNumber from '../type/number';

// is a given number integer?
const isInteger = function (n) {
  return isNumber(n) && n % 1 === 0;
};

export default isInteger;
