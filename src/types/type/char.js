// is a given value Char?
const isChar = function(value) {
  return is.string(value) && value.length === 1;
};

export default isChar;
