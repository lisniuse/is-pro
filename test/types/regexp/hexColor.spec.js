const is = require('../../../dist/umd/ispro.js');

describe('regexp/hexColor', () => {

  test('should return true if given value is hexColor', () => {
    expect(is.hexColor('#333')).toBe(true);
  });
  
  test('should return false if given value is not hexColor', () => {
    expect(is.hexColor(0.287)).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.hexColor(null)).toBe(false);
  });

  test('should return false if the given value is undefined', () => {
    expect(is.hexColor(undefined)).toBe(false);
  });

});
