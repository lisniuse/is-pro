const is = require('../../../dist/umd/ispro.js');

describe('time/inNextWeek', () => {

  test('should return true if date is within next week', () => {
    let date = new Date();
    let future = new Date(date.setDate(date.getDate() + 1));
    expect(is.inNextWeek(future)).toBe(true);
  });

  test('should return false if date is not within next week', () => {
    let date = new Date();
    let yesterday = new Date(date.setDate(date.getDate() - 1));
    expect(is.inNextWeek(yesterday)).toBe(false);
  });

  test('is.not.inNextMonth(fortyDaysLater) => true', () => {
    let nineDaysLater = new Date(new Date().setDate(new Date().getDate() + 9));
    expect(is.not.inNextWeek(nineDaysLater)).toBe(true);
  });

});
