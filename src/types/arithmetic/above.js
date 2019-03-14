// is a given number above minimum parameter?
const isAbove = function(n, min) {
  return this.all.number(n, min) && n > min;
};

isAbove.api = ['not'];

export default isAbove;
