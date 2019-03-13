// is string start with a given target parameter?
const isStartWith = function (string, target) {
  return this.string(string) && string.indexOf(target) === 0;
};

export default isStartWith;
