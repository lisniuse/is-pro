const is = require('../../../dist/umd/ispro.js');

describe('time/inLastWeek', () => {

  test('should return true if date is within last week', () => {
    let date = new Date();
    let twoDaysAgo = new Date(date.setDate(date.getDate() - 2));
    expect(is.inLastWeek(twoDaysAgo)).toBe(true);
  });

  test('should return false if date is not within last week', () => {
    let date = new Date();
    let eightDaysAgo = new Date(date.setDate(date.getDate() - 8));
    expect(is.inLastWeek(eightDaysAgo)).toBe(false);
  });

});
