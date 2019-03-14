const is = require('../../../dist/umd/ispro.js');

describe('time/inLastYear', () => {

  test('should return true if date is within last year', () => {
    let date = new Date();
    let threeMonthsAgo = new Date(date.setMonth(date.getMonth() - 3));
    expect(is.inLastYear(threeMonthsAgo)).toBe(true);
  });

  test('should return false if date is not within last year', () => {
    let date = new Date();
    let future = new Date(date.setDate(date.getDate() + 1));
    expect(is.inLastYear(future)).toBe(false);
  });

  test('is.not.inLastYear(thirteenMonthsAgo) => true', () => {
    let thirteenMonthsAgo = new Date(new Date().setMonth(new Date().getMonth() - 13));
    expect(is.not.inLastYear(thirteenMonthsAgo)).toBe(true);
  });

});
