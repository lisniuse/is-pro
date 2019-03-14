// is current browser safari?
// parameter is optional
const isSafari = function (range) {
  let match = this._userAgent.match(/version\/(\d+).+?safari/);
  return match !== null && this._compareVersion(match[1], range);
};

// safari method does not support 'all' and 'any' interfaces
isSafari.api = ['not'];

export default isSafari;
