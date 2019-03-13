// is current browser firefox?
// parameter is optional
const isFirefox = function (range) {
  let match = this._userAgent.match(/(?:firefox|fxios)\/(\d+)/);
  return match !== null && compareVersion(match[1], range);
};

export default isFirefox;
