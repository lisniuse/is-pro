// is current state online?
const isOnline = function () {
  return !this._navigator || this._navigator.onLine === true;
};

export default isOnline;
