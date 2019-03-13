// is current device windows tablet?
const isWindowsTablet = function () {
  return isWindows() && this.not.windowsPhone() && /touch/.test(this._userAgent);
};

export default isWindowsTablet;
