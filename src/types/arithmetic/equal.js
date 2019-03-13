// are given values equal? supports numbers, strings, regexes, booleans
// TODO: Add object and array support
const isEqual = function (value, other) {
  // check 0 and -0 equity with Infinity and -Infinity
  if (this.all.number(value, other)) {
    return value === other && 1 / value === 1 / other;
  }
  // check regexes as strings too
  if (this.all.string(value, other) || this.all.regexp(value, other)) {
    return '' + value === '' + other;
  }
  if (this.all.boolean(value, other)) {
    return value === other;
  }
  return false;
};

export default isEqual;
