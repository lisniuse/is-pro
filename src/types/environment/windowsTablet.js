// is current device windows tablet?
const isWindowsTablet = function () {
  return this.windows() && this.not.windowsPhone() && /touch/.test(this._userAgent);
};

export default isWindowsTablet;
