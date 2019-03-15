const is = require('../../../dist/umd/ispro.js');

describe('regexp/macAddress', () => {

  test('should return true if given value is macAddress', () => {
    expect(is.macAddress('FF:FF:FF:FF:FF:FF')).toBe(true);
  });

  test('should return true if given value is not macAddress', () => {
    expect(is.macAddress('123456')).toBe(false);
  });
  
});
