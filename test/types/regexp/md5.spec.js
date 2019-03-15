const is = require('../../../dist/umd/ispro.js');

describe('regexp/md5', () => {

  test('should return true if given value is md5', () => {
    expect(is.md5('49ba59abbe56e057')).toBe(true);
    expect(is.md5('e10adc3949ba59abbe56e057f20f883e')).toBe(true);
  });

  test('should return true if given value is not md5', () => {
    expect(is.md5('123456')).toBe(false);
  });
  
});
