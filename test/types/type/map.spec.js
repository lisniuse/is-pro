const is = require('../../../dist/umd/ispro.js');

describe('regexp/map', () => {

  test('should return true if given value is map', () => {
    expect(is.map(new Map())).toBe(true);
  });

  test('should return true if given value is not map', () => {
    expect(is.map('123456')).toBe(false);
  });
  
});
