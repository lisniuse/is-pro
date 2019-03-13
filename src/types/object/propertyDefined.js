// is given object has parameterized property?
const isPropertyDefined = function (object, property) {
  return this.object(object) && this.string(property) && property in object;
};

export default isPropertyDefined;
