import isWindows from './windows';

// is current device windows phone?
const isWindowsPhone = function () {
  return isWindows() && /phone/.test(this._userAgent);
};

export default isWindowsPhone;
