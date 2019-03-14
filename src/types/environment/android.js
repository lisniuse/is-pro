// is current device android?
const isAndroid = function () {
  return /android/.test(this._userAgent);
};

// android method does not support 'all' and 'any' interfaces
isAndroid.api = ['not'];

export default isAndroid;
