const is = require('../../../dist/umd/ispro.js');

describe('typeDate', () => {

  test('should return true if passed parameter type is date', () => {
    let date = new Date();
    expect(is.date(date)).toBe(true);
  });

  test('should return false if passed parameter type is not date', () => {
    let notDate = 'test';
    expect(is.date(notDate)).toBe(false);
  });

});
