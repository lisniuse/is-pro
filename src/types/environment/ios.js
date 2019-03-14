// is current device ios?
const isIos = function () {
  return this.iphone() || this.ipad() || this.ipod();
};

// ios method does not support 'all' and 'any' interfaces
isIos.api = ['not'];

export default isIos;
