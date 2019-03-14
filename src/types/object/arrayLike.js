/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 */

const isArrayLike = function (value) {
  return value != null && typeof value != 'function' && this.length(value.length)
}

export default isArrayLike;
