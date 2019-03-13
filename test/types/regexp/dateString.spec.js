const is = require('../../../dist/umd/ispro.js');

describe('regexp/dateString', () => {

  test('should return true if given value is date string', () => {
    expect(is.dateString('11/11/2011')).toBe(true);
    expect(is.dateString('10-21-2012')).toBe(true);
  });

  test('should return false if given value is not date string', () => {
    expect(is.dateString('1')).toBe(false);
    expect(is.dateString('10/21-2012')).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.dateString(null)).toBe(false);
  });
  
  test('should return false if the given value is undefined', () => {
    expect(is.dateString(undefined)).toBe(false);
  });

});
