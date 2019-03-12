// is current device android phone?
const isAndroidPhone = function () {
  return /android/.test(userAgent) && /mobile/.test(userAgent);
};

export default isAndroidPhone;
