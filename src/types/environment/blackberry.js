// is current device blackberry?
const isBlackberry = function () {
  return /blackberry/.test(userAgent) || /bb10/.test(userAgent);
};

export default isBlackberry;
