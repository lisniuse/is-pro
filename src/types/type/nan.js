// is a given value NaN?
// NaN is number :) Also it is the only value which does not equal itself
const isNan = function(value) {
  return value !== value;
};

export default isNan;
