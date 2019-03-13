// is current device mobile?
const isMobile = function () {
  return this.iphone() || this.ipod() || this.androidPhone() || this.blackberry() || this.windowsPhone();
};

export default isMobile;
