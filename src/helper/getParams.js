import { slice, toString } from '../core/properties';
import isArray from '../types/type/array';
let is = {
  _toString: toString,
  array: isArray
}

// helper function which extracts params from arguments
const getParams = function(args) {
  let params = slice.call(args);
  let length = params.length;
  if (length === 1 && is.array(params[0])) {    // support array
    params = params[0];
  }
  return params;
}

export default getParams;
