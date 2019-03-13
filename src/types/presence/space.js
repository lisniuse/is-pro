// is a given value space?
// horizontal tab: 9, line feed: 10, vertical tab: 11, form feed: 12, carriage return: 13, space: 32
const isSpace = function (value) {
  if (this.not.char(value)) {
    return false;
  }
  let charCode = value.charCodeAt(0);
  return (charCode > 8 && charCode < 14) || charCode === 32;
};

export default isSpace;
