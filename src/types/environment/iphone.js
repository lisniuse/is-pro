// is current device iphone?
// parameter is optional
const isIphone = function (range) {
  // avoid false positive for Facebook in-app browser on ipad;
  // original iphone doesn't have the OS portion of the UA
  let match = is.ipad() ? null : userAgent.match(/iphone(?:.+?os (\d+))?/);
  return match !== null && compareVersion(match[1] || 1, range);
};

export default isIphone;
