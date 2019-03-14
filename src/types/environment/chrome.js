// is current browser chrome?
// parameter is optional
const isChrome = function (range) {
  let match = /google inc/.test(this._vendor) ? this._userAgent.match(/(?:chrome|crios)\/(\d+)/) : null;
  return match !== null && this.not.opera() && this._compareVersion(match[1], range);
};

// chrome method does not support 'all' and 'any' interfaces
isChrome.api = ['not'];

export default isChrome;
