// has a given object got parameterized count property?
const isPropertyCount = function (object, count) {
  if (this.not.object(object) || this.not.number(count)) {
    return false;
  }
  let n = 0;
  for (let property in object) {
    if (this._hasOwnProperty.call(object, property) && ++n > count) {
      return false;
    }
  }
  return n === count;
};

export default isPropertyCount;
