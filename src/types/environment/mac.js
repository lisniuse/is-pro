// is current operating system mac?
const isMac = function () {
  return /mac/.test(platform);
};

export default isMac;
