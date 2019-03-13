// is current browser opera?
// parameter is optional
const isOpera = function (range) {
  let match = this._userAgent.match(/(?:^opera.+?version|opr)\/(\d+)/);
  return match !== null && compareVersion(match[1], range);
};

export default isOpera;
