import isNumber from '../type/number';
import setInterfaces from '../../core/setInterfaces';
let is = {
  number: isNumber
}
setInterfaces(is);

// is a given number within minimum and maximum parameters?
const isWithin = function (n, min, max) {
  return is.all.number(n, min, max) && n > min && n < max;
};

export default isWithin;
