// is current browser edge?
// parameter is optional
const isEdge = function (range) {
  let match = userAgent.match(/edge\/(\d+)/);
  return match !== null && compareVersion(match[1], range);
}

export default isEdge;
