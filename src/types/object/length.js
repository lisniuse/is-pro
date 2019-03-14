//Checks if `value` is a valid array-like length.
const isLength = function (value) {
  return this.number(value) &&
    value > -1 && value % 1 == 0 && value <= this.MAX_SAFE_INTEGER
};

export default isLength;
