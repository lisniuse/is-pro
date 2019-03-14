// is current device ipad?
// parameter is optional
const isIpad = function (range) {
  let match = this._userAgent.match(/ipad.+?os (\d+)/);
  return match !== null && this._compareVersion(match[1], range);
};

// ipad method does not support 'all' and 'any' interfaces
isIpad.api = ['not'];

export default isIpad;
