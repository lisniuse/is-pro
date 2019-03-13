import { slice } from './properties';

// helper function which reverses the sense of predicate result
const not = function (func, that) {
  that = that || null;
  return function () {
    return !func.apply(that, slice.call(arguments));
  };
}

export default not;
