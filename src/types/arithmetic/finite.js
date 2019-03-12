import isInfinite from './infinite';
import isNan from '../type/nan';
import setInterfaces from '../../core/setInterfaces';
let is = {
  infinite: isInfinite,
  nan: isNan
}
setInterfaces(is);

// is a given number finite?
const isFinite = isFinite || function (n) {
  return is.not.infinite(n) && is.not.nan(n);
};

export default isFinite;
