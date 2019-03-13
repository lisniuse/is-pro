// is a given number finite?
const isFinite = isFinite || function (n) {
  return this.not.infinite(n) && this.not.nan(n);
};

export default isFinite;
