// is current device mobile?
const isMobile = function () {
  return this.iphone() || this.ipod() || this.androidPhone() || this.blackberry() || this.windowsPhone();
};

// mobile method does not support 'all' and 'any' interfaces
isMobile.api = ['not'];

export default isMobile;
