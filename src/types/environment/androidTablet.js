// is current device android tablet?
const isAndroidTablet = function () {
  return /android/.test(this._userAgent) && !/mobile/.test(this._userAgent);
};

export default isAndroidTablet;
