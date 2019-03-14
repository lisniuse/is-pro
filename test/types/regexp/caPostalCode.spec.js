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

  test('is.not.caPostalCode(\'123\') => true', () => {
    expect(is.not.caPostalCode('123')).toBe(true);
  });

  test('is.all.caPostalCode(\'L8V3Y1\', \'123\') => false', () => {
    expect(is.all.caPostalCode('L8V3Y1', '123')).toBe(false);
  });
  
  test('is.any.caPostalCode(\'L8V3Y1\', \'123\') => true', () => {
    expect(is.any.caPostalCode('L8V3Y1', '123')).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.caPostalCode([\'L8V3Y1\', \'123\']) => false', () => {
    expect(is.all.caPostalCode(['L8V3Y1', '123'])).toBe(false);
  });

});
