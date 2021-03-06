import { hasOwnProperty } from './properties';
const whiteList = [
  'arguments',
  'array',
  'buffer',
  'boolean',
  'date',
  'error',
  'function',
  'nan',
  'null',
  'number',
  'plainObject',
  'object',
  'json',
  'regexp', 
  'string',
  'char',
  'undefined',
  'arrayLike',
  'objectLike',
  'empty',
  'existy',
  'set',
  'map',
  'symbol',
  'buffer'
];

/*
 * Set 'typeof' API.
 * > is.typeof([1,2,3]) 
 * => [ 'array', 'object', 'existy', 'arrayLike', 'objectLike' ]
 */

const mixinTypeof = function (is) {
  let options = is;
  const typeOf = function (value) {
    let typeNames = [];
    for (let option in options) {
      if (hasOwnProperty.call(options, option) && is['function'](options[option])) {
        if (whiteList.indexOf(option) !== -1) {
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
