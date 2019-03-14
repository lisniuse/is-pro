// is current device android tablet?
const isAndroidTablet = function () {
  return /android/.test(this._userAgent) && !/mobile/.test(this._userAgent);
};

// androidTablet method does not support 'all' and 'any' interfaces
isAndroidTablet.api = ['not'];

export default isAndroidTablet;
