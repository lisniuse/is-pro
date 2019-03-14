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

  test('is.not.timeString(\'90:90:90\') => true', () => {
    expect(is.not.timeString('90:90:90')).toBe(true);
  });
  
  test('is.all.timeString(\'13:45:30\', \'90:90:90\') => false', () => {
    expect(is.all.timeString('13:45:30', '90:90:90')).toBe(false);
  });

  test('is.any.timeString(\'13:45:30\', \'90:90:90\') => true', () => {
    expect(is.any.timeString('13:45:30', '90:90:90')).toBe(true);
  });

  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.timeString([\'13:45:30\', \'90:90:90\']) => false', () => {
    expect(is.all.timeString(['13:45:30', '90:90:90'])).toBe(false);
  });

});
