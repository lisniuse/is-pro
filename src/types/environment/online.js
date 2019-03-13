// is current state online?
const isOnline = function () {
  if ( !this._navigator ) {
    return false;
  } else if ( !this._navigator.onLine ) {
    return false;
  } else if ( this._navigator.onLine === true ) {
    return true;
  }
};

export default isOnline;
