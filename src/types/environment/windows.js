// is current operating system windows?
const isWindows = function () {
  return /win/.test(platform);
};

export default isWindows;
