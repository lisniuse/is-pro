// is current browser chrome?
// parameter is optional
const isChrome = function (range) {
  var match = /google inc/.test(vendor) ? userAgent.match(/(?:chrome|crios)\/(\d+)/) : null;
  return match !== null && is.not.opera() && compareVersion(match[1], range);
};

export default isChrome;
