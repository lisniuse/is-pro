const is = require('../../../dist/umd/ispro.js');

describe('time/day', () => {

  test('should return true if given day string is the day of the date object', () => {
    let time = 1421572235303;
    expect(is.day(new Date(time), 'sunday')).toBe(true);
  });

  test('should return false if given day string is not the day of the date object', () => {
    let time = 1421572235303;
    expect(is.day(new Date(time), 'monday')).toBe(false);
  });

  test('is.not.day(mondayObj, \'tuesday\') => true', () => {
    let mondayObj = new Date('01/26/2015');
    expect(is.not.day(mondayObj, 'tuesday')).toBe(true);
  });

});
