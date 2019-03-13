// is current device supports touch?
const isTouchDevice = function () {
  return !!this._document && ('ontouchstart' in this._freeSelf ||
    ('DocumentTouch' in this._freeSelf && this._document instanceof DocumentTouch));
};

export default isTouchDevice;
