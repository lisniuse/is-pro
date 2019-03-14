//import object
import {
  isPropertyCount,
  isPropertyDefined,
  isWindowObject,
  isDomNode,
  isLength,
  isArrayLike,
  isArrayBuffer,
  isArrayLikeObject,
  isObjectLike,
  isBuffer
} from './index';

// export object
export default {
  propertyCount: isPropertyCount,
  propertyDefined: isPropertyDefined,
  windowObject: isWindowObject,
  domNode: isDomNode,
  length: isLength,
  arrayLike: isArrayLike,
  arrayBuffer: isArrayBuffer,
  arrayLikeObject: isArrayLikeObject,
  objectLike: isObjectLike,
  buffer: isBuffer
}
