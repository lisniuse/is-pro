// is current device android phone?
const isAndroidPhone = function () {
  return /android/.test(this._userAgent) && /mobile/.test(this._userAgent);
};

// androidPhone method does not support 'all' and 'any' interfaces
isAndroidPhone.api = ['not'];

export default isAndroidPhone;
