const is = require('../../../dist/umd/ispro.js');

describe('regexp/caPostalCode', () => {

  test('should return true if given value is Canada postal code', () => {
    expect(is.caPostalCode('L8V3Y1')).toBe(true);
  });

  test('should return true if given value is Canada postal code with space', () => {
    expect(is.caPostalCode('L8V 3Y1')).toBe(true);
  });

  test('should return false if given value is not Canada postal code', () => {
    expect(is.caPostalCode('1')).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.caPostalCode(null)).toBe(false);
  });
  
  test('should return false if the given value is undefined', () => {
    expect(is.caPostalCode(undefined)).toBe(false);
  });

});
