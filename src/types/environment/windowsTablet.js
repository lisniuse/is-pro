// is current device windows tablet?
const isWindowsTablet = function () {
  return this.windows() && this.not.windowsPhone() && /touch/.test(this._userAgent);
};

// windowsTablet method does not support 'all' and 'any' interfaces
isWindowsTablet.api = ['not'];

export default isWindowsTablet;
