// is current operating system windows?
const isWindows = function () {
  return /win/.test(this._platform);
};

// windows method does not support 'all' and 'any' interfaces
isWindows.api = ['not'];

export default isWindows;
