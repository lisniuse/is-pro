import isNumber from '../type/number';
import setInterfaces from '../../core/setInterfaces';
let is = {
  number: isNumber
}
setInterfaces(is);

// is a given number above maximum parameter?
const isUnder = function (n, max) {
  return is.all.number(n, max) && n < max;
};

export default isUnder;
