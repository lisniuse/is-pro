// is a given number above maximum parameter?
const isUnder = function (n, max) {
  return this.all.number(n, max) && n < max;
};

isUnder.api = ['not'];

export default isUnder;
