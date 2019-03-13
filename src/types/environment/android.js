// is current device android?
const isAndroid = function () {
  return /android/.test(this._userAgent);
};

export default isAndroid;
