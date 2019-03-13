const is = require('../../../dist/umd/ispro.js');

describe('presenceFalsy', () => {

  test('should return false if given value is truthy', () => {
    expect(is.falsy('test')).toBe(false);
  });

  test('should return true if given value is falsy', () => {
    expect(is.falsy(undefined)).toBe(true);
  });

  test('should return true if given value is false', () => {
    expect(is.falsy(false)).toBe(true);
  });

});
