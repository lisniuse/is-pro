// is current browser phantomjs?
// parameter is optional
const isPhantom = function (range) {
  let match = this._userAgent.match(/phantomjs\/(\d+)/);
  return match !== null && this._compareVersion(match[1], range);
};
// phantom method does not support 'all' and 'any' interfaces
isPhantom.api = ['not'];

export default isPhantom;
