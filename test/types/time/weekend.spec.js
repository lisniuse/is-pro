const is = require('../../../dist/umd/ispro.js');
const monday = new Date('01/26/2015');
const sunday = new Date('01/25/2015');
const saturday = new Date('01/24/2015');

describe('time/weekend', () => {

  test('should return true if given date is weekend', () => {
    let time = 1421572235303;
    expect(is.weekend(new Date(time))).toBe(true);
  });

  test('should return false if given date is not weekend', () => {
    let time = 1421572235303;
    let date = new Date(time);
    let friday = new Date(date.setDate(date.getDate() - 2));
    expect(is.weekend(friday)).toBe(false);
  });

  test('is.not.weekend(monday) => true', () => {
    expect(is.not.weekend(monday)).toBe(true);
  });

  test('is.not.weekend(monday) => true', () => {
    expect(is.not.weekend(monday)).toBe(true);
  });

  test('is.all.weekend(sunday, saturday) => true', () => {
    expect(is.all.weekend(sunday, saturday)).toBe(true);
  });
  
  test('is.any.weekend(sunday, saturday, monday) => true', () => {
    expect(is.any.weekend(sunday, saturday, monday)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.weekend([sunday, saturday, monday]) => false', () => {
    expect(is.all.weekend([sunday, saturday, monday])).toBe(false);
  });

});
