const is = require('../../../dist/umd/ispro.js');

describe('type/nan', () => {

  test('should return true if passed parameter type is NaN', () => {
    expect(is.nan(NaN)).toBe(true);
  });

  test('should return false if passed parameter type is not NaN', () => {
    let notNaN = 'test';
    expect(is.nan(notNaN)).toBe(false);
  });

});
