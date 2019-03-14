const is = require('../../../dist/umd/ispro.js');

describe('object/arrayBuffer', () => {

  test('should return `true` for array buffers', () => { 
    expect(is.arrayBuffer(ArrayBuffer ? new ArrayBuffer(2) : undefined)).toBe(true);
  });

  test('should return `false` for non array buffers', () => { 
    expect(is.arrayBuffer([1])).toBe(false);
    expect(is.arrayBuffer(true)).toBe(false);
    expect(is.arrayBuffer(new Date)).toBe(false);
    expect(is.arrayBuffer(new Error)).toBe(false);
    expect(is.arrayBuffer({ 'a': 1 })).toBe(false);
    expect(is.arrayBuffer(1)).toBe(false);
    expect(is.arrayBuffer(/x/)).toBe(false);
    expect(is.arrayBuffer('a')).toBe(false);
    expect(is.arrayBuffer(Symbol())).toBe(false);
  });

});
