/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 * 
 */

const isObjectLike = function(value) {
  return typeof value == 'object' && value !== null;
}

export default isObjectLike;
