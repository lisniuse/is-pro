// is a given number within minimum and maximum parameters?
const isWithin = function (n, min, max) {
  return this.all.number(n, min, max) && n > min && n < max;
};

isWithin.api = ['not'];

export default isWithin;
