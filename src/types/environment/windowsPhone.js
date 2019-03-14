// is current device windows phone?
const isWindowsPhone = function () {
  return this.windows() && /phone/.test(this._userAgent);
};

// windowsPhone method does not support 'all' and 'any' interfaces
isWindowsPhone.api = ['not'];

export default isWindowsPhone;
