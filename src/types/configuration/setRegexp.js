// set optional regexes to methods
const isSetRegexp = function (regexp, name) {
  for (var r in regexes) {
    if (hasOwnProperty.call(regexes, r) && (name === r)) {
      regexes[r] = regexp;
    }
  }
};

export default isSetRegexp;
