// is string end with a given target parameter?
const isEndWith = function (string, target) {
  if (!this.string(string)) {
    return false;
  }
  target += '';
  let position = string.length - target.length;
  return position >= 0 && string.indexOf(target, position) === position;
};

export default isEndWith;
