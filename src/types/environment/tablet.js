// is current device tablet?
const isTablet = function () {
  return this.ipad() || this.androidTablet() || this.windowsTablet();
};

// tablet method does not support 'all' and 'any' interfaces
isTablet.api = ['not'];

export default isTablet;
