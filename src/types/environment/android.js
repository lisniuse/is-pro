// is current device android?
const isAndroid = function () {
  return /android/.test(userAgent);
};

export default isAndroid;
