// is current state online?
const isOnline = function () {
  if (!this._navigator) {
    return false;
  } else if (!this._navigator.onLine) {
    return false;
  } else if (this._navigator.onLine === true) {
    return true;
  }
};

// online method does not support 'all' and 'any' interfaces
isOnline.api = ['not'];

export default isOnline;
