// is a given number decimal?
const isDecimal = function (n) {
  return this.number(n) && n % 1 !== 0;
};

export default isDecimal;
