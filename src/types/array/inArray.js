// is a given item in an array?
const isInArray = function (value, array) {
  if (this.not.array(array)) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
};

export default isInArray;
