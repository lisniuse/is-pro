/**
 * Checks if `value` is a buffer.
 */

const nativeIsBuffer = typeof Buffer !== 'undefined' ? Buffer.isBuffer : undefined
const isBuffer = nativeIsBuffer || function() {
  return false;
}

export default isBuffer;
