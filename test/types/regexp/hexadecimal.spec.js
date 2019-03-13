const is = require('../../../dist/umd/ispro.js');

describe('regexp/hexadecimal', () => {

  test('should return true if given value is hexadecimal', () => {
    expect(is.hexadecimal('ff')).toBe(true);
    expect(is.hexadecimal('0xff')).toBe(true);
  });

  test('should return false if given value is not hexadecimal', () => {
    expect(is.hexadecimal(0.287)).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.hexadecimal(null)).toBe(false);
  });
  
  test('should return false if the given value is undefined', () => {
    expect(is.hexadecimal(undefined)).toBe(false);
  });

});
