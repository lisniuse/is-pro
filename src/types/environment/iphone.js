// is current device iphone?
// parameter is optional
const isIphone = function (range) {
  // avoid false positive for Facebook in-app browser on ipad;
  // original iphone doesn't have the OS portion of the UA
  let match = this.ipad() ? null : this._userAgent.match(/iphone(?:.+?os (\d+))?/);
  return match !== null && this._compareVersion(match[1] || 1, range);
};

// iphone method does not support 'all' and 'any' interfaces
isIphone.api = ['not'];

export default isIphone;
