import { hasOwnProperty } from './properties';
const ignoreOptions = ['typeof', 'sameType'];
// API
// Set 'not', 'all' and 'any' interfaces to methods based on their api property
/* -------------------------------------------------------------------------- */

const mixinTypeof = function (is) {
  let options = is;
  const typeOf = function(value) {
    let typeNames = [];
    for (let option in options) {
      if (hasOwnProperty.call(options, option) && is['function'](options[option])) {
        if ( ignoreOptions.indexOf(option) === -1 ) {
          if (is[option](value) === true) {
            typeNames.push(option);
          }
        }
      }
    }
    return typeNames;
  }
  options.typeof = typeOf;
}

export default mixinTypeof;
