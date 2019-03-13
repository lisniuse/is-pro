// is current device windows phone?
const isWindowsPhone = function () {
  return this.windows() && /phone/.test(this._userAgent);
};

export default isWindowsPhone;
