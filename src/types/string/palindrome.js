import isString from '../type/string';

// is a given string palindrome?
const isPalindrome = function (string) {
  if (!isString(string)) {
    return false;
  }
  string = string.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
  let length = string.length - 1;
  for (let i = 0, half = Math.floor(length / 2); i <= half; i++) {
    if (string.charAt(i) !== string.charAt(length - i)) {
      return false;
    }
  }
  return true;
};

export default isPalindrome;
