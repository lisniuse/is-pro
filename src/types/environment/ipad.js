// is current device ipad?
// parameter is optional
const isIpad = function (range) {
  let match = this._userAgent.match(/ipad.+?os (\d+)/);
  return match !== null && compareVersion(match[1], range);
};

export default isIpad;
