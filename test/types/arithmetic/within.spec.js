const is = require('../../../dist/umd/ispro.js');

describe('arithmetic/within', () => {

  test('should return true if given number is within minimum and maximum values', () => {
    expect(is.within(10, 5, 15)).toBe(true);
  });
  
  test('should return false if given number is not within minimum and maximum values', () => {
    expect(is.within(20, 5, 15)).toBe(false);
  });

  test('is.not.within(40, 30, 35) => true', () => {
    expect(is.not.within(40, 30, 35)).toBe(true);
  });

});
