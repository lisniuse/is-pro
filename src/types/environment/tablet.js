// is current device tablet?
const isTablet = function () {
  return this.ipad() || this.androidTablet() || this.windowsTablet();
};

export default isTablet;
