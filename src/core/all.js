import getParams from './getParams';

// helper function which call predicate function per parameter and return true if all pass
const all = function (func) {
  return function () {
    var params = getParams(arguments);
    var length = params.length;
    for (var i = 0; i < length; i++) {
      if (!func.call(null, params[i])) {
        return false;
      }
    }
    return true;
  };
}

export default all;
