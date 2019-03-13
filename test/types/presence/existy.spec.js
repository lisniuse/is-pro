const is = require('../../../dist/umd/ispro.js');

describe('presenceExisty', () => {

  test('should return false if given value is null', () => {
    expect(is.existy(null)).toBe(false);
  });

  test('should return false if given value is undefined', () => {
    expect(is.existy(undefined)).toBe(false);
  });

  test('should return true if given value is not null or undefined', () => {
    expect(is.existy('test')).toBe(true);
  });

});
