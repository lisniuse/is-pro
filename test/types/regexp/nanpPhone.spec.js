const is = require('../../../dist/umd/ispro.js');

describe('regexp/nanpPhone', () => {

  test('should return true if given value is nanpPhone', () => {
    expect(is.nanpPhone('609-555-0175')).toBe(true);
  });

  test('should return false if given value is not nanpPhone', () => {
    expect(is.nanpPhone('1')).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.nanpPhone(null)).toBe(false);
  });

  test('should return false if the given value is undefined', () => {
    expect(is.nanpPhone(undefined)).toBe(false);
  });

});
