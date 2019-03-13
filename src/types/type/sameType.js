// are given values same type?
// prevent NaN, Number same type check
const isSameType = function (value, other) {
  let tag = this._toString.call(value);
  if (tag !== this._toString.call(other)) {
    return false;
  }
  if (tag === '[object Number]') {
    return !this.any.nan(value, other) || this.all.nan(value, other);
  }
  return true;
}

isSameType.api = ['not'];

export default isSameType;
