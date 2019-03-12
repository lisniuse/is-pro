import isNumber from '../type/number';
import setInterfaces from '../../core/setInterfaces';
let is = {
  number: isNumber
}
setInterfaces(is);

// is a given number above minimum parameter?
const isAbove = function(n, min) {
  return is.all.number(n, min) && n > min;
};

export default isAbove;
