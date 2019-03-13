// is a given object a DOM node?
const isDomNode = function (object) {
  return this.object(object) && object.nodeType > 0;
};

export default isDomNode;
