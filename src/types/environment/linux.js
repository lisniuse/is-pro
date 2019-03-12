// is current operating system linux?
const isLinux = function () {
  return /linux/.test(platform) && is.not.android();
};

export default isLinux;
