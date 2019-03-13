//is a given value empty? Objects, arrays, strings
const isEmpty = function (value) {
  if (this.object(value)) {
    let length = Object.getOwnPropertyNames(value).length;
    if (length === 0 || (length === 1 && this.array(value)) ||
      (length === 2 && this.arguments(value))) {
      return true;
    }
    return false;
  }
  return value === '';
}

export default isEmpty;
