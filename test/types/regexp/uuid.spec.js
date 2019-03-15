const is = require('../../../dist/umd/ispro.js');

describe('regexp/uuid', () => {

  test('should return true if given value is uuid', () => {
    expect(is.uuid('A987FBC9-4BED-3078-CF07-9141BA07C9F3')).toBe(true);
  });

  test('should return true if given value is not uuid', () => {
    expect(is.uuid('123456')).toBe(false);
  });
  
});
