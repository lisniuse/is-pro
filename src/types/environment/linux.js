// is current operating system linux?
const isLinux = function () {
  return /linux/.test(this._platform) && this.not.android();
};

export default isLinux;
