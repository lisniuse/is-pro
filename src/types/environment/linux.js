// is current operating system linux?
const isLinux = function () {
  return /linux/.test(this._platform) && this.not.android();
};

// linux method does not support 'all' and 'any' interfaces
isLinux.api = ['not'];

export default isLinux;
