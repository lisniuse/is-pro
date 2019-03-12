import isNumber from '../type/number';

// is a given number positive?
const isPositive = function (n) {
  return isNumber(n) && n > 0;
};

export default isPositive;
