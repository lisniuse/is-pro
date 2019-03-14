const is = require('../../../dist/umd/ispro.js');
const monday = new Date('01/26/2015');
const sunday = new Date('01/25/2015');
const saturday = new Date('01/24/2015');

describe('time/weekday', () => {

  test('should return true if given date is weekday', () => {
    let time = 1421572235303;
    let date = new Date(time);
    let friday = new Date(date.setDate(date.getDate() - 2));
    expect(is.weekday(friday)).toBe(true);
  });

  test('should return false if given date is not weekday', () => {
    let time = 1421572235303;
    let sunday = new Date(time);
    expect(is.weekday(sunday)).toBe(false);
  });

  test('is.not.weekday(sunday) => true', () => {
    expect(is.not.weekday(sunday)).toBe(true);
  });

  test('is.all.weekday(monday, saturday) => false', () => {
    expect(is.all.weekday(monday, saturday)).toBe(false);
  });
  
  test('is.any.weekday(sunday, saturday, monday) => true', () => {
    expect(is.any.weekday(sunday, saturday, monday)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.weekday([sunday, saturday, monday]) => false', () => {
    expect(is.all.weekday([sunday, saturday, monday])).toBe(false);
  });

});
