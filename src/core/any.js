import getParams from './getParams';

// helper function which call predicate function per parameter and return true if any pass
const any = function (func, that) {
  that = that || null;
  return function () {
    let params = getParams(arguments);
    let length = params.length;
    for (let i = 0; i < length; i++) {
      if (func.call(that, params[i])) {
        return true;
      }
    }
    return false;
  };
}

export default any;
