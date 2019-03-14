const is = require('../../../dist/umd/ispro.js');

describe('object/buffer', () => {

  test('should return `true` for buffers', () => {
    expect(is.buffer(new Buffer(2))).toBe(true);
  });

  test('should return `false` for non-buffers', () => {
    expect(is.buffer([1])).toBe(false);
    expect(is.buffer(true)).toBe(false);
    expect(is.buffer(new Date)).toBe(false);
    expect(is.buffer(new Error)).toBe(false);
    expect(is.buffer({ 'a': 1 })).toBe(false);
    expect(is.buffer(1)).toBe(false);
    expect(is.buffer(/x/)).toBe(false);
    expect(is.buffer('a')).toBe(false);
  });

});
