// is current operating system mac?
const isMac = function () {
  return /mac/.test(this._platform);
};

export default isMac;
