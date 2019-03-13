const is = require('../../../dist/umd/ispro.js');

describe('type/undefined', () => {

  test('should return true if passed parameter type is undefined', () => {
    expect(is.undefined(undefined)).toBe(true);
  });

  test('should return false if passed parameter type is not undefined', () => {
    expect(is.undefined(null)).toBe(false);
    expect(is.undefined('test')).toBe(false);
  });

});
