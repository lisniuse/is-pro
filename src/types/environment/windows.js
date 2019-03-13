// is current operating system windows?
const isWindows = function () {
  return /win/.test(this._platform);
};

export default isWindows;
