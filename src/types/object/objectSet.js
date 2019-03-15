//import object
import {
  isEqual,
  isPropertyCount,
  isPropertyDefined,
  isWindowObject,
  isDomNode,
  isLength,
  isArrayLike,
  isArrayBuffer,
  isArrayLikeObject,
  isObjectLike
} from './index';

// export object
export default {
  equal: isEqual,
  propertyCount: isPropertyCount,
  propertyDefined: isPropertyDefined,
  windowObject: isWindowObject,
  domNode: isDomNode,
  length: isLength,
  arrayLike: isArrayLike,
  arrayBuffer: isArrayBuffer,
  arrayLikeObject: isArrayLikeObject,
  objectLike: isObjectLike
}
