const is = require('../../../dist/umd/ispro.js');

describe('regexp/eppPhone', () => {

  test('should return true if given value is eppPhone', () => {
    expect(is.eppPhone('+90.2322456789')).toBe(true);
  });

  test('should return false if given value is not eppPhone', () => {
    expect(is.eppPhone('1')).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.eppPhone(null)).toBe(false);
  });
  
  test('should return false if the given value is undefined', () => {
    expect(is.eppPhone(undefined)).toBe(false);
  });

});
