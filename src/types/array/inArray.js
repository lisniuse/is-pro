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

// inArray method does not support 'all' and 'any' interfaces
isInArray.api = ['not'];

export default isInArray;
