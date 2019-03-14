// is given object has parameterized property?
const isPropertyDefined = function (object, property) {
  return this.object(object) && this.string(property) && property in object;
};

// propertyDefined method does not support 'all' and 'any' interfaces
isPropertyDefined.api = ['not'];

export default isPropertyDefined;
