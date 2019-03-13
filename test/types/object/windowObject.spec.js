const is = require('../../../dist/umd/ispro.js');

describe('object/windowObject', () => {

  test('should return true if given object is window object', () => {
    expect(is.windowObject(window)).toBe[!!window];
  });

  test('should return false if given object is not window object', () => {
    expect(is.windowObject({})).toBe(false);
  });

});
