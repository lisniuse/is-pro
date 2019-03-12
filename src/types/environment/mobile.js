// is current device mobile?
const isMobile = function () {
  return is.iphone() || is.ipod() || is.androidPhone() || is.blackberry() || is.windowsPhone();
};

export default isMobile;
