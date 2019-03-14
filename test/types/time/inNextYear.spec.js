const is = require('../../../dist/umd/ispro.js');

describe('time/inNextYear', () => {

  test('should return true if date is within next year', () => {
    let date = new Date();
    let threeMonthsLater = new Date(date.setMonth(date.getMonth() + 3));
    expect(is.inNextYear(threeMonthsLater)).toBe(true);
  });

  test('should return false if date is not within next year', () => {
    let date = new Date();
    let past = new Date(date.setDate(date.getDate() - 1));
    expect(is.inNextYear(past)).toBe(false);
  });

  test('is.not.inNextYear(thirteenMonthsLater) => true', () => {
    let thirteenMonthsLater = new Date(new Date().setMonth(new Date().getMonth() + 13));
    expect(is.not.inNextYear(thirteenMonthsLater)).toBe(true);
  });

});
