const is = require('../../../dist/umd/ispro.js');

describe('time/dayLightSavingTime', () => {

  test('should return false if given date is not in daylight saving time', () => {
    let time = 1421572235303;
    let date = new Date(time);
    expect(is.dayLightSavingTime(date)).toBe(false);
  });

  test('should return false if given date is in daylight saving time', () => {
    let time = 1421572235303;
    let date = new Date(time);
    let sixMonthsAgo = new Date(date.setMonth(date.getMonth() - 6));
    expect(is.dayLightSavingTime(sixMonthsAgo)).toBe(true);
  });

});
