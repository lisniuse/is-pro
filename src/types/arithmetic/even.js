import isNumber from '../type/number';

// is a given number even?
const isEven = function (n) {
  return isNumber(n) && n % 2 === 0;
};

export default isEven;
