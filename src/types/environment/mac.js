// is current operating system mac?
const isMac = function () {
  return /mac/.test(this._platform);
};

// mac method does not support 'all' and 'any' interfaces
isMac.api = ['not'];

export default isMac;
