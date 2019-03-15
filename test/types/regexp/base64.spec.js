const is = require('../../../dist/umd/ispro.js');

describe('regexp/base64', () => {

  test('should return true if given value is base64', () => {
    expect(is.base64('dGhpcyBpcyBhIGV4YW1wbGU=')).toBe(true);
  });

  test('should return true if given value is not base64', () => {
    expect(is.base64('123456')).toBe(false);
  });
  
});
