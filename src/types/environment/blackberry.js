// is current device blackberry?
const isBlackberry = function () {
  return /blackberry/.test(this._userAgent) || /bb10/.test(this._userAgent);
};

// blackberry method does not support 'all' and 'any' interfaces
isBlackberry.api = ['not'];

export default isBlackberry;
