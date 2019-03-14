/**
 * Checks if `value` is a buffer.
 */

const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined
const isBuffer = nativeIsBuffer || function() {
  return false;
}

export default isBuffer;
