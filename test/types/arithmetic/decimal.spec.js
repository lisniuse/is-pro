const is = require('../../../dist/umd/ispro.js');

describe('arithmetic/decimal', () => {

  test('should return true if given number is decimal', () => {
    expect(is.decimal(4.2)).toBe(true);
  });

  test('should return false if given number is not decimal', () => {
    expect(is.decimal(2)).toBe(false);
  });
  
});
