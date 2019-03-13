const is = require('../../../dist/umd/ispro.js');

describe('regexp/timeString', () => {

  test('should return true if given value is time string', () => {
    expect(is.timeString('13:45:30')).toBe(true);
  });

  test('should return false if given value is not time string', () => {
    expect(is.timeString('12:12:90')).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.timeString(null)).toBe(false);
  });
  
  test('should return false if the given value is undefined', () => {
    expect(is.timeString(undefined)).toBe(false);
  });

});
