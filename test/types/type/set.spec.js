const is = require('../../../dist/umd/ispro.js');

describe('regexp/set', () => {

  test('should return true if given value is set', () => {
    expect(is.set(new Set())).toBe(true);
  });

  test('should return true if given value is not set', () => {
    expect(is.set('123456')).toBe(false);
  });
  
});
