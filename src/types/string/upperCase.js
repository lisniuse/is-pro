// is a given string all uppercase?
const isUpperCase = function (string) {
  return this.string(string) && string === string.toUpperCase();
};

export default isUpperCase;
