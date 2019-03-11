// are given values same type?
// prevent NaN, Number same type check
const isSameType = function(is) {
  return function (value, other) {
    var tag = toString.call(value);
    if (tag !== toString.call(other)) {
      return false;
    }
    if (tag === '[object Number]') {
      return !is.any.nan(value, other) || is.all.nan(value, other);
    }
    return true;
  };
}

export default isSameType;
