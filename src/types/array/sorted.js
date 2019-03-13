// is a given array sorted?
const isSorted = function (array, sign) {
  if (this.not.array(array)) {
    return false;
  }
  let predicate = this._comparator[sign] || this._comparator['>='];
  for (let i = 1; i < array.length; i++) {
    if (!predicate(array[i], array[i - 1])) {
      return false;
    }
  }
  return true;
};

export default isSorted;
