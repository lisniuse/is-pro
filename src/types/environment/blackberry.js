// is current device blackberry?
const isBlackberry = function () {
  return /blackberry/.test(this._userAgent) || /bb10/.test(this._userAgent);
};

export default isBlackberry;
