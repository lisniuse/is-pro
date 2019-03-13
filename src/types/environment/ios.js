// is current device ios?
const isIos = function () {
  return this.iphone() || this.ipad() || this.ipod();
};

export default isIos;
