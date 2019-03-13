// is a given number odd?
const isOdd = function(n) {
  return this.number(n) && (n % 2 === 1 || n % 2 === -1);
}

export default isOdd;
