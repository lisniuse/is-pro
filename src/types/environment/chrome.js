// is current browser chrome?
// parameter is optional
const isChrome = function (range) {
  let match = /google inc/.test(this._vendor) ? this._userAgent.match(/(?:chrome|crios)\/(\d+)/) : null;
  return match !== null && this.not.opera() && compareVersion(match[1], range);
};

export default isChrome;
