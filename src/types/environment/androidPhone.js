// is current device android phone?
const isAndroidPhone = function () {
  return /android/.test(this._userAgent) && /mobile/.test(this._userAgent);
};

export default isAndroidPhone;
