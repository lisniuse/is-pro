// is current browser internet explorer?
// parameter is optional
const isIe = function (range) {
  let match = this._userAgent.match(/(?:msie |trident.+?; rv:)(\d+)/);
  return match !== null && this._compareVersion(match[1], range);
};

// ie method does not support 'all' and 'any' interfaces
isIe.api = ['not'];

export default isIe;
