const is = require('../../../dist/umd/ispro.js');

describe('type/symbol', () => {

  test('should return true if given value is symbol', () => {
    expect(is.symbol(Symbol())).toBe(true);
  });

  test('should return true if given value is not symbol', () => {
    expect(is.symbol('123456')).toBe(false);
  });
  
});
