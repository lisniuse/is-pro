const is = require('../../../dist/umd/ispro.js');

describe('regexp/usZipCode', () => {

  test('should return true if given value is US zip code', () => {
    expect(is.usZipCode('02201-1020')).toBe(true);
  });

  test('should return false if given value is not US zip code', () => {
    expect(is.usZipCode('1')).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.usZipCode(null)).toBe(false);
  });

  test('should return false if the given value is undefined', () => {
    expect(is.usZipCode(undefined)).toBe(false);
  });

});
