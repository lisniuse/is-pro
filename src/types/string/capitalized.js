// is a given string or sentence capitalized?
const isCapitalized = function (string) {
  if (!this.string(string)) {
    return false;
  }
  let words = string.split(' ');
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length) {
      let chr = word.charAt(0);
      if (chr !== chr.toUpperCase()) {
        return false;
      }
    }
  }
  return true;
};

export default isCapitalized;
