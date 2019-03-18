const is = require('../../../dist/umd/ispro.js');

describe('actual/username', () => {

  test('should return true if given a right username', () => {
    expect(is.username('username123123')).toBe(true);
  });

  test('should return false if given a wrong username', () => {
    expect(is.username('11111')).toBe(false);
  });

});
