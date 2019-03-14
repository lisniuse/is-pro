// is current device supports touch?
const isTouchDevice = function () {
  return !!this._document && ('ontouchstart' in this._freeSelf ||
    ('DocumentTouch' in this._freeSelf && this._document instanceof DocumentTouch));
};

// touchDevice method does not support 'all' and 'any' interfaces
isTouchDevice.api = ['not'];

export default isTouchDevice;
