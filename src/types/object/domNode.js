import isObject from '../type/object';

// is a given object a DOM node?
const isDomNode = function (object) {
  return isObject(object) && object.nodeType > 0;
};

export default isDomNode;
