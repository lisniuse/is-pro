// is a given number integer?
const isInteger = function (n) {
  return this.number(n) && n % 1 === 0;
};

export default isInteger;
