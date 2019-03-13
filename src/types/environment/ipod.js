// is current device ipod?
// parameter is optional
const isIpod = function (range) {
  let match = this._userAgent.match(/ipod.+?os (\d+)/);
  return match !== null && this._compareVersion(match[1], range);
};

export default isIpod;
