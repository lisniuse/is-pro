// is current device tablet?
const isTablet = function () {
  return is.ipad() || is.androidTablet() || is.windowsTablet();
};

export default isTablet;
