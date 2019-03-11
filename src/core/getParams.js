import { slice } from './prototype';

// helper function which extracts params from arguments
const getParams = function(args) {
  var params = slice.call(args);
  var length = params.length;
  if (length === 1 && is.array(params[0])) {    // support array
    params = params[0];
  }
  return params;
}

export default getParams;
