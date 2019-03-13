// set optional regexes to methods
const isSetRegexp = function (regexp, name) {
  for (let r in regexes) {
    if (this._hasOwnProperty.call(regexes, r) && (name === r)) {
      regexes[r] = regexp;
    }
  }
};

export default isSetRegexp;
