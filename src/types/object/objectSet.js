//import object
import {
  isPropertyCount,
  isPropertyDefined,
  isWindowObject,
  isDomNode
} from './index';

// export object
export default {
  propertyCount: isPropertyCount,
  propertyDefined: isPropertyDefined,
  windowObject: isWindowObject,
  domNode: isDomNode
}
