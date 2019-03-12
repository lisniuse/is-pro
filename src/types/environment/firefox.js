// is current browser firefox?
// parameter is optional
const isFirefox = function (range) {
  var match = userAgent.match(/(?:firefox|fxios)\/(\d+)/);
  return match !== null && compareVersion(match[1], range);
};

export default isFirefox;
