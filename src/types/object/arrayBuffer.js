/**
 * Checks if `value` is classified as an `ArrayBuffer` object.
 */

const isArrayBuffer = function (value) {
  return this._toString.call(value) === '[object ArrayBuffer]';
}

export default isArrayBuffer;
