// is current device windows tablet?
const isWindowsTablet = function () {
  return isWindows() && is.not.windowsPhone() && /touch/.test(userAgent);
};

export default isWindowsTablet;
