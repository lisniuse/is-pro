import { slice } from './prototype';

// helper function which reverses the sense of predicate result
const not = function (func) {
  return function () {
    return !func.apply(null, slice.call(arguments));
  };
}

export default not;
