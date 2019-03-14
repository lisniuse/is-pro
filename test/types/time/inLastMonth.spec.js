const is = require('../../../dist/umd/ispro.js');

describe('time/inLastMonth', () => {

  test('should return true if date is within last month', () => {
    let date = new Date();
    let tenDaysAgo = new Date(date.setDate(date.getDate() - 10));
    expect(is.inLastMonth(tenDaysAgo)).toBe(true);
  });

  test('should return false if date is not within last month', () => {
    let date = new Date();
    let fiftyDaysAgo = new Date(date.setDate(date.getDate() - 50));
    expect(is.inLastMonth(fiftyDaysAgo)).toBe(false);
  });

  test('is.not.inLastMonth(fortyDaysAgo) => true', () => {
    let fortyDaysAgo = new Date(new Date().setDate(new Date().getDate() - 40));
    expect(is.not.inLastMonth(fortyDaysAgo)).toBe(true);
  });

});
