// is current browser opera mini?
// parameter is optional
const isOperaMini = function (range) {
  let match = this._userAgent.match(/opera mini\/(\d+)/);
  return match !== null && this._compareVersion(match[1], range);
};

// operaMini method does not support 'all' and 'any' interfaces
isOperaMini.api = ['not'];

export default isOperaMini;
