const is = require('../../../dist/umd/ispro.js');

describe('regexp/ascii', () => {

  test('should return true if given value is ascii', () => {
    expect(is.ascii('foobar')).toBe(true);
  });

  test('should return true if given value is not ascii', () => {
    expect(is.ascii('１２３456')).toBe(false);
  });
  
});
