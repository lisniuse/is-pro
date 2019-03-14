const is = require('../../../dist/umd/ispro.js');

describe('time/inDateRange', () => {

  test('should return true if date is within given start date and end date', () => {
    let today = new Date();
    let date = new Date();
    let tomorrow = new Date(date.setDate(date.getDate() + 1));
    let yesterday = new Date(date.setDate(date.getDate() - 2));
    expect(is.inDateRange(today, yesterday, tomorrow)).toBe(true);
  });

  test('should return false if date is not within given start date and end date', () => {
    let today = new Date();
    let date = new Date();
    let tomorrow = new Date(date.setDate(date.getDate() + 1));
    let yesterday = new Date(date.setDate(date.getDate() - 2));
    expect(is.inDateRange(yesterday, today, tomorrow)).toBe(false);
  });

  test('is.not.inDateRange(saturday, sunday, monday) => true', () => {
    let saturday = new Date('01/24/2015');
    let sunday = new Date('01/25/2015');
    let monday = new Date('01/26/2015');
    expect(is.not.inDateRange(saturday, sunday, monday)).toBe(true);
  });

});
