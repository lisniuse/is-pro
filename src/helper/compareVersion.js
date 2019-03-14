import comparator from './comparator';

// helper function which compares a version to a range
function compareVersion(version, range) {
  let string = (range + '');
  let n = +(string.match(/\d+/) || NaN);
  let op = string.match(/^[<>]=?|/)[0];
  return comparator[op] ? comparator[op](version, n) : (version == n || n !== n);
}

export default compareVersion;
