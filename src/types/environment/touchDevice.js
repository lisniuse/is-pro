// is current device supports touch?
const isTouchDevice = function () {
  return !!document && ('ontouchstart' in freeSelf ||
    ('DocumentTouch' in freeSelf && document instanceof DocumentTouch));
};

export default isTouchDevice;
