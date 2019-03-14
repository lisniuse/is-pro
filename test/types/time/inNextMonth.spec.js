const is = require('../../../dist/umd/ispro.js');

describe('time/inNextMonth', () => {

  test('should return true if date is within next month', () => {
    let date = new Date();
    let aWeekLater = new Date(date.setDate(date.getDate() + 7));
    expect(is.inNextMonth(aWeekLater)).toBe(true);
  });

  test('should return false if date is not within next month', () => {
    let date = new Date();
    let yesterday = new Date(date.setDate(date.getDate() - 1));
    expect(is.inNextMonth(yesterday)).toBe(false);
  });
  
  test('is.not.inNextMonth(fortyDaysLater) => true', () => {
    let fortyDaysLater = new Date(new Date().setDate(new Date().getDate() + 40));
    expect(is.not.inNextMonth(fortyDaysLater)).toBe(true);
  });

});
