// is current browser opera?
// parameter is optional
const isOpera = function (range) {
  let match = this._userAgent.match(/(?:^opera.+?version|opr)\/(\d+)/);
  return match !== null && this._compareVersion(match[1], range);
};

// opera method does not support 'all' and 'any' interfaces
isOpera.api = ['not'];

export default isOpera;
