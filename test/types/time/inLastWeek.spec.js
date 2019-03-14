const is = require('../../../dist/umd/ispro.js');

describe('time/inLastWeek', () => {

  test('should return true if date is within last week', () => {
    let date = new Date();
    let twoDaysAgo = new Date(date.setDate(date.getDate() - 2));
    expect(is.inLastWeek(twoDaysAgo)).toBe(true);
  });

  test('should return false if date is not within last week', () => {
    let date = new Date();
    let eightDaysAgo = new Date(date.setDate(date.getDate() - 20));
    expect(is.inLastWeek(eightDaysAgo)).toBe(false);
  });

  test('is.not.inLastWeek(nineDaysAgo) => true', () => {
    let nineDaysAgo = new Date(new Date().setDate(new Date().getDate() - 9));
    expect(is.not.inLastWeek(nineDaysAgo)).toBe(true);
  });

});
