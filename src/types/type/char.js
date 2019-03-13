// is a given value Char?
const isChar = function(value) {
  return this.string(value) && value.length === 1;
};

export default isChar;
