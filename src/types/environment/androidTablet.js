// is current device android tablet?
const isAndroidTablet = function () {
  return /android/.test(userAgent) && !/mobile/.test(userAgent);
};

export default isAndroidTablet;
