import comparator from './comparator';

// helper function which compares a version to a range
function compareVersion(version, range) {
  var string = (range + '');
  var n = +(string.match(/\d+/) || NaN);
  var op = string.match(/^[<>]=?|/)[0];
  return comparator[op] ? comparator[op](version, n) : (version == n || n !== n);
}

export default compareVersion;
