import not from './not';
import all from './all';
import any from './any';
import isFunction from '../types/type/function';
import { hasOwnProperty } from './prototype';

// API
// Set 'not', 'all' and 'any' interfaces to methods based on their api property
/* -------------------------------------------------------------------------- */
const setInterfaces = function (is) {
  let options = is;
  if ( !options.not ) options.not = {};
  if ( !options.all ) options.all = {};
  if ( !options.any ) options.any = {};
  for (let option in options) {
    if (hasOwnProperty.call(options, option) && isFunction(options[option])) {
      let interfaces = options[option].api || ['not', 'all', 'any'];
      for (let i = 0; i < interfaces.length; i++) {
        if (interfaces[i] === 'not') {
          is.not[option] = not(is[option]);
        }
        if (interfaces[i] === 'all') {
          is.all[option] = all(is[option]);
        }
        if (interfaces[i] === 'any') {
          is.any[option] = any(is[option]);
        }
      }
    }
  }
}

export default setInterfaces;
