// is current browser edge?
// parameter is optional
const isEdge = function (range) {
  let match = this._userAgent.match(/edge\/(\d+)/);
  return match !== null && compareVersion(match[1], range);
}

export default isEdge;
