// is current browser safari?
// parameter is optional
const isSafari = function (range) {
  let match = userAgent.match(/version\/(\d+).+?safari/);
  return match !== null && compareVersion(match[1], range);
};

export default isSafari;
