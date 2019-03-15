const is = require('../../../dist/umd/ispro.js');

describe('actual/QQ', () => {

  test('should return true if given a right QQ', () => {
    expect(is.QQ('12345678')).toBe(true);
  });

  test('should return false if given a wrong QQ', () => {
    expect(is.QQ('lol!')).toBe(false);
  });

});
