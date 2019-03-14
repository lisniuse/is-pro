// is a given string include parameter target?
const isInclude = function (string, target) {
  return string.indexOf(target) > -1;
}

isInclude.api = ['not'];

export default isInclude;
