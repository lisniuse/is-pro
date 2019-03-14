// is current browser firefox?
// parameter is optional
const isFirefox = function (range) {
  let match = this._userAgent.match(/(?:firefox|fxios)\/(\d+)/);
  return match !== null && this._compareVersion(match[1], range);
};

// firefox method does not support 'all' and 'any' interfaces
isFirefox.api = ['not'];

export default isFirefox;
