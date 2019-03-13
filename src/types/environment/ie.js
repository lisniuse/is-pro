// is current browser internet explorer?
// parameter is optional
const isIe = function(range) {
  let match = this._userAgent.match(/(?:msie |trident.+?; rv:)(\d+)/);
  return match !== null && compareVersion(match[1], range);
};

export default isIe;
